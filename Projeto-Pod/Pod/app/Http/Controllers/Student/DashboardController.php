<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Achievement;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Show the student dashboard with stats.
     */
    public function index(Request $request): Response
    {
        $user = $request->user();

        // Calcula nível baseado em pontos (a cada 500 pontos = 1 nível)
        $level = floor($user->total_points / 500) + 1;

        // Calcula streak (dias consecutivos) - últimos 7 dias
        $streak = $this->calculateStreak($user);

        // Estatísticas gerais do usuário
        $userStats = [
            'total_points' => $user->total_points,
            'total_completed_quizzes' => $user->total_completed_quizzes,
            'average_accuracy' => round($user->average_accuracy, 2),
            'ranking_position' => $user->ranking_position,
            'level' => $level,
            'streak' => $streak,
        ];

        // Atividades recentes (últimos 5 quizzes completados)
        $recentActivities = QuizAttempt::with('quiz:id,title,theme')
            ->where('user_id', $user->id)
            ->whereNotNull('completed_at')
            ->orderBy('completed_at', 'desc')
            ->limit(5)
            ->get()
            ->map(function ($attempt) {
                return [
                    'quiz_title' => $attempt->quiz->title,
                    'quiz_theme' => $attempt->quiz->theme,
                    'score' => $attempt->score,
                    'accuracy' => round($attempt->accuracy, 2),
                    'completed_at' => $attempt->completed_at->format('d/m/Y H:i'),
                    'passed' => $attempt->isPassed(),
                ];
            });

        // Quizzes recomendados (quizzes não completados ou com baixa pontuação)
        $recommendedQuizzes = Quiz::active()
            ->ordered()
            ->whereNotIn('id', function ($query) use ($user) {
                $query->select('quiz_id')
                      ->from('quiz_attempts')
                      ->where('user_id', $user->id)
                      ->whereNotNull('completed_at')
                      ->where('accuracy', '>=', 80);
            })
            ->limit(3)
            ->get()
            ->map(function ($quiz) {
                return [
                    'id' => $quiz->id,
                    'title' => $quiz->title,
                    'description' => $quiz->description,
                    'theme' => $quiz->theme,
                    'difficulty' => $quiz->difficulty,
                    'points_reward' => $quiz->points_reward,
                ];
            });

        // Top 3 no ranking
        $topRanking = User::where('role', User::ROLE_STUDENT)
            ->get()
            ->sortByDesc(fn($u) => $u->total_points)
            ->take(3)
            ->map(function ($u, $index) {
                return [
                    'position' => $index + 1,
                    'name' => $u->name,
                    'avatar' => $u->avatar,
                    'total_points' => $u->total_points,
                    'completed_quizzes' => $u->total_completed_quizzes,
                ];
            })
            ->values();

        return Inertia::render('student/dashboard/index', [
            'stats' => $userStats,
            'recent_activities' => $recentActivities,
            'recommended_quizzes' => $recommendedQuizzes,
            'top_ranking' => $topRanking,
        ]);
    }

    /**
     * Calcula streak (dias consecutivos jogando)
     */
    private function calculateStreak(User $user): int
    {
        $streak = 0;
        $currentDate = now()->startOfDay();

        // Verifica os últimos 30 dias
        for ($i = 0; $i < 30; $i++) {
            $hasActivity = QuizAttempt::where('user_id', $user->id)
                ->whereDate('completed_at', $currentDate)
                ->whereNotNull('completed_at')
                ->exists();

            if ($hasActivity) {
                $streak++;
                $currentDate->subDay();
            } else {
                // Se não jogou hoje mas jogou ontem, continua contando
                if ($i === 0) {
                    $currentDate->subDay();
                    continue;
                }
                break;
            }
        }

        return $streak;
    }
}
