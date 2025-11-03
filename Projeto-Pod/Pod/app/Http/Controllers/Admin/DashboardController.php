<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Achievement;
use App\Models\Pergunta;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Show the admin dashboard with statistics.
     */
    public function index(): Response
    {
        // Estatísticas gerais
        $totalStudents = User::where('role', User::ROLE_STUDENT)->count();
        $totalQuizzes = Quiz::count();
        $totalPerguntas = Pergunta::count();
        $totalAttempts = QuizAttempt::whereNotNull('completed_at')->count();

        // Estatísticas de quizzes
        $quizStats = QuizAttempt::whereNotNull('completed_at')
            ->selectRaw('
                COUNT(*) as total_completions,
                AVG(accuracy) as average_accuracy,
                AVG(time_spent_seconds) as average_time
            ')
            ->first();

        // Quizzes mais populares
        $popularQuizzes = Quiz::withCount(['attempts as completions' => function ($query) {
                $query->whereNotNull('completed_at');
            }])
            ->orderByDesc('completions')
            ->limit(5)
            ->get()
            ->map(function ($quiz) {
                return [
                    'id' => $quiz->id,
                    'title' => $quiz->title,
                    'completions' => $quiz->completions,
                    'average_score' => round($quiz->average_score, 2),
                ];
            });

        // Alunos mais ativos
        $topStudents = User::where('role', User::ROLE_STUDENT)
            ->get()
            ->sortByDesc(fn($user) => $user->total_points)
            ->take(5)
            ->map(function ($user, $index) {
                return [
                    'position' => $index + 1,
                    'name' => $user->name,
                    'avatar' => $user->avatar,
                    'total_points' => $user->total_points,
                    'completed_quizzes' => $user->total_completed_quizzes,
                    'average_accuracy' => round($user->average_accuracy, 2),
                ];
            })
            ->values();

        // Atividades recentes (últimas 10 tentativas completadas)
        $recentActivities = QuizAttempt::with(['user:id,name,avatar', 'quiz:id,title'])
            ->whereNotNull('completed_at')
            ->orderBy('completed_at', 'desc')
            ->limit(10)
            ->get()
            ->map(function ($attempt) {
                return [
                    'student_name' => $attempt->user->name,
                    'student_avatar' => $attempt->user->avatar,
                    'quiz_title' => $attempt->quiz->title,
                    'score' => $attempt->score,
                    'accuracy' => round($attempt->accuracy, 2),
                    'completed_at' => $attempt->completed_at->diffForHumans(),
                ];
            });

        // Distribuição de dificuldades dos quizzes
        $difficultyDistribution = Quiz::selectRaw('difficulty, COUNT(*) as count')
            ->groupBy('difficulty')
            ->get()
            ->mapWithKeys(fn($item) => [$item->difficulty => $item->count]);

        return Inertia::render('admin/dashboard/index', [
            'stats' => [
                'total_students' => $totalStudents,
                'total_quizzes' => $totalQuizzes,
                'total_perguntas' => $totalPerguntas,
                'total_attempts' => $totalAttempts,
                'average_accuracy' => round($quizStats->average_accuracy ?? 0, 2),
                'average_completion_time' => round(($quizStats->average_time ?? 0) / 60, 2), // em minutos
            ],
            'popular_quizzes' => $popularQuizzes,
            'top_students' => $topStudents,
            'recent_activities' => $recentActivities,
            'difficulty_distribution' => $difficultyDistribution,
        ]);
    }
}
