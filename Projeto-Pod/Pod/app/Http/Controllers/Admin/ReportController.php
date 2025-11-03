<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Pergunta;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ReportController extends Controller
{
    /**
     * Display reports dashboard.
     */
    public function index(): Response
    {
        return Inertia::render('admin/reports/index', [
            'report_types' => [
                ['key' => 'overview', 'label' => 'Visão Geral', 'icon' => 'chart'],
                ['key' => 'students', 'label' => 'Relatório de Alunos', 'icon' => 'users'],
                ['key' => 'quizzes', 'label' => 'Relatório de Quizzes', 'icon' => 'clipboard'],
                ['key' => 'performance', 'label' => 'Desempenho por Categoria', 'icon' => 'trending-up'],
                ['key' => 'engagement', 'label' => 'Engajamento', 'icon' => 'activity'],
            ],
        ]);
    }

    /**
     * Get overview report.
     */
    public function overview(Request $request)
    {
        $startDate = $request->query('start_date', now()->subMonth()->format('Y-m-d'));
        $endDate = $request->query('end_date', now()->format('Y-m-d'));

        // General stats
        $totalStudents = User::where('role', User::ROLE_STUDENT)->count();
        $totalQuizzes = Quiz::count();
        $totalPerguntas = Pergunta::count();

        // Activity stats in period
        $attempts = QuizAttempt::whereBetween('created_at', [$startDate, $endDate])
            ->whereNotNull('completed_at');

        $totalAttempts = $attempts->count();
        $averageScore = round($attempts->avg('score') ?? 0, 2);
        $averageAccuracy = round($attempts->avg('accuracy') ?? 0, 2);
        $totalPointsDistributed = $attempts->sum('score');

        // Active students (students who completed at least one quiz in period)
        $activeStudents = QuizAttempt::whereBetween('created_at', [$startDate, $endDate])
            ->whereNotNull('completed_at')
            ->distinct('user_id')
            ->count('user_id');

        // Engagement rate
        $engagementRate = $totalStudents > 0
            ? round(($activeStudents / $totalStudents) * 100, 2)
            : 0;

        // Daily activity chart
        $dailyActivity = QuizAttempt::whereBetween('created_at', [$startDate, $endDate])
            ->whereNotNull('completed_at')
            ->selectRaw('DATE(completed_at) as date, COUNT(*) as count')
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        return response()->json([
            'period' => [
                'start' => $startDate,
                'end' => $endDate,
            ],
            'overview' => [
                'total_students' => $totalStudents,
                'active_students' => $activeStudents,
                'engagement_rate' => $engagementRate,
                'total_quizzes' => $totalQuizzes,
                'total_perguntas' => $totalPerguntas,
                'total_attempts' => $totalAttempts,
                'average_score' => $averageScore,
                'average_accuracy' => $averageAccuracy,
                'total_points_distributed' => $totalPointsDistributed,
            ],
            'daily_activity' => $dailyActivity,
        ]);
    }

    /**
     * Get students report.
     */
    public function students(Request $request)
    {
        $school = $request->query('school');
        $schoolYear = $request->query('school_year');

        $students = User::where('role', User::ROLE_STUDENT)
            ->when($school, fn($q, $school) => $q->where('school', $school))
            ->when($schoolYear, fn($q, $year) => $q->where('school_year', $year))
            ->get()
            ->map(function ($student) {
                return [
                    'id' => $student->id,
                    'name' => $student->name,
                    'school' => $student->school,
                    'school_year' => $student->school_year,
                    'total_points' => $student->total_points,
                    'completed_quizzes' => $student->total_completed_quizzes,
                    'average_accuracy' => round($student->average_accuracy, 2),
                    'ranking_position' => $student->ranking_position,
                    'achievements_count' => $student->achievements()->count(),
                ];
            })
            ->sortByDesc('total_points')
            ->values();

        // Statistics
        $avgPoints = $students->avg('total_points');
        $avgAccuracy = $students->avg('average_accuracy');
        $avgQuizzes = $students->avg('completed_quizzes');

        return response()->json([
            'students' => $students,
            'statistics' => [
                'total' => $students->count(),
                'average_points' => round($avgPoints, 2),
                'average_accuracy' => round($avgAccuracy, 2),
                'average_quizzes_completed' => round($avgQuizzes, 2),
            ],
        ]);
    }

    /**
     * Get quizzes report.
     */
    public function quizzes(Request $request)
    {
        $difficulty = $request->query('difficulty');

        $quizzes = Quiz::when($difficulty, fn($q, $diff) => $q->where('difficulty', $diff))
            ->withCount(['attempts as total_attempts' => fn($q) => $q->whereNotNull('completed_at')])
            ->get()
            ->map(function ($quiz) {
                $completedAttempts = $quiz->attempts()
                    ->whereNotNull('completed_at');

                $avgScore = round($completedAttempts->avg('score') ?? 0, 2);
                $avgAccuracy = round($completedAttempts->avg('accuracy') ?? 0, 2);
                $avgTime = round($completedAttempts->avg('time_spent_seconds') ?? 0, 2);

                return [
                    'id' => $quiz->id,
                    'title' => $quiz->title,
                    'theme' => $quiz->theme,
                    'difficulty' => $quiz->difficulty,
                    'points_reward' => $quiz->points_reward,
                    'total_perguntas' => $quiz->total_questions,
                    'total_attempts' => $quiz->total_attempts,
                    'average_score' => $avgScore,
                    'average_accuracy' => $avgAccuracy,
                    'average_time_minutes' => round($avgTime / 60, 2),
                    'completion_rate' => $quiz->completion_rate,
                ];
            })
            ->sortByDesc('total_attempts')
            ->values();

        return response()->json([
            'quizzes' => $quizzes,
            'total' => $quizzes->count(),
        ]);
    }

    /**
     * Get performance by category report.
     */
    public function performanceByCategory()
    {
        $categories = DB::table('perguntas')
            ->select('categoria')
            ->distinct()
            ->pluck('categoria');

        $performance = $categories->map(function ($categoria) {
            $perguntaIds = DB::table('perguntas')
                ->where('categoria', $categoria)
                ->pluck('id_pergunta');

            $answers = DB::table('quiz_answers')
                ->join('quiz_attempts', 'quiz_answers.quiz_attempt_id', '=', 'quiz_attempts.id')
                ->whereIn('quiz_answers.pergunta_id', $perguntaIds)
                ->whereNotNull('quiz_attempts.completed_at')
                ->select('quiz_answers.is_correct')
                ->get();

            $total = $answers->count();
            $correct = $answers->where('is_correct', true)->count();
            $accuracy = $total > 0 ? round(($correct / $total) * 100, 2) : 0;

            return [
                'categoria' => $categoria,
                'total_perguntas' => $perguntaIds->count(),
                'total_answered' => $total,
                'correct_answers' => $correct,
                'accuracy' => $accuracy,
                'difficulty_level' => $this->getDifficultyLevel($accuracy),
            ];
        })
        ->sortBy('accuracy')
        ->values();

        return response()->json([
            'performance' => $performance,
        ]);
    }

    /**
     * Get engagement report.
     */
    public function engagement(Request $request)
    {
        $period = $request->query('period', 'week'); // week, month, year

        $startDate = match($period) {
            'week' => now()->subWeek(),
            'month' => now()->subMonth(),
            'year' => now()->subYear(),
            default => now()->subMonth(),
        };

        // Active users over time
        $activeUsers = DB::table('quiz_attempts')
            ->select(DB::raw('DATE(completed_at) as date'))
            ->selectRaw('COUNT(DISTINCT user_id) as active_users')
            ->where('completed_at', '>=', $startDate)
            ->whereNotNull('completed_at')
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        // New users over time
        $newUsers = DB::table('users')
            ->select(DB::raw('DATE(created_at) as date'))
            ->selectRaw('COUNT(*) as new_users')
            ->where('created_at', '>=', $startDate)
            ->where('role', User::ROLE_STUDENT)
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        // Retention (users who played this week and last week)
        $thisWeek = QuizAttempt::whereBetween('completed_at', [now()->startOfWeek(), now()->endOfWeek()])
            ->distinct('user_id')
            ->pluck('user_id');

        $lastWeek = QuizAttempt::whereBetween('completed_at', [
            now()->subWeek()->startOfWeek(),
            now()->subWeek()->endOfWeek()
        ])
            ->distinct('user_id')
            ->pluck('user_id');

        $retained = $thisWeek->intersect($lastWeek)->count();
        $retentionRate = $lastWeek->count() > 0
            ? round(($retained / $lastWeek->count()) * 100, 2)
            : 0;

        // Most active times (hour of day)
        $activeHours = QuizAttempt::whereNotNull('completed_at')
            ->where('completed_at', '>=', $startDate)
            ->selectRaw('HOUR(completed_at) as hour, COUNT(*) as count')
            ->groupBy('hour')
            ->orderBy('hour')
            ->get();

        return response()->json([
            'period' => $period,
            'active_users' => $activeUsers,
            'new_users' => $newUsers,
            'retention_rate' => $retentionRate,
            'active_hours' => $activeHours,
        ]);
    }

    /**
     * Export report as CSV.
     */
    public function export(Request $request)
    {
        $type = $request->query('type', 'students');

        $filename = "report_{$type}_" . now()->format('Y-m-d') . '.csv';

        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename=\"{$filename}\"",
        ];

        $callback = function() use ($type) {
            $handle = fopen('php://output', 'w');

            switch ($type) {
                case 'students':
                    $this->exportStudents($handle);
                    break;
                case 'quizzes':
                    $this->exportQuizzes($handle);
                    break;
                case 'performance':
                    $this->exportPerformance($handle);
                    break;
            }

            fclose($handle);
        };

        return response()->stream($callback, 200, $headers);
    }

    protected function exportStudents($handle)
    {
        fputcsv($handle, ['Nome', 'Email', 'Escola', 'Ano', 'Pontos', 'Quizzes Completos', 'Precisão Média']);

        User::where('role', User::ROLE_STUDENT)
            ->chunk(100, function ($students) use ($handle) {
                foreach ($students as $student) {
                    fputcsv($handle, [
                        $student->name,
                        $student->email,
                        $student->school,
                        $student->school_year,
                        $student->total_points,
                        $student->total_completed_quizzes,
                        round($student->average_accuracy, 2),
                    ]);
                }
            });
    }

    protected function exportQuizzes($handle)
    {
        fputcsv($handle, ['Título', 'Tema', 'Dificuldade', 'Tentativas', 'Score Médio', 'Precisão Média']);

        Quiz::chunk(100, function ($quizzes) use ($handle) {
            foreach ($quizzes as $quiz) {
                $attempts = $quiz->attempts()->whereNotNull('completed_at');
                fputcsv($handle, [
                    $quiz->title,
                    $quiz->theme,
                    $quiz->difficulty,
                    $attempts->count(),
                    round($attempts->avg('score') ?? 0, 2),
                    round($attempts->avg('accuracy') ?? 0, 2),
                ]);
            }
        });
    }

    protected function exportPerformance($handle)
    {
        fputcsv($handle, ['Categoria', 'Total Perguntas', 'Total Respostas', 'Respostas Corretas', 'Precisão']);

        $categories = DB::table('perguntas')
            ->select('categoria')
            ->distinct()
            ->get();

        foreach ($categories as $cat) {
            $perguntaIds = DB::table('perguntas')
                ->where('categoria', $cat->categoria)
                ->pluck('id_pergunta');

            $answers = DB::table('quiz_answers')
                ->whereIn('pergunta_id', $perguntaIds)
                ->get();

            $total = $answers->count();
            $correct = $answers->where('is_correct', true)->count();
            $accuracy = $total > 0 ? round(($correct / $total) * 100, 2) : 0;

            fputcsv($handle, [
                $cat->categoria,
                $perguntaIds->count(),
                $total,
                $correct,
                $accuracy,
            ]);
        }
    }

    protected function getDifficultyLevel(float $accuracy): string
    {
        if ($accuracy >= 80) {
            return 'Fácil';
        } elseif ($accuracy >= 60) {
            return 'Médio';
        } else {
            return 'Difícil';
        }
    }
}
