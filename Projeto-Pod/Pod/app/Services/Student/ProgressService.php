<?php

namespace App\Services\Student;

use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class ProgressService
{
    /**
     * Get comprehensive progress data for a student.
     */
    public function getStudentProgress(User $user): array
    {
        return [
            'overall' => $this->getOverallProgress($user),
            'by_difficulty' => $this->getProgressByDifficulty($user),
            'by_category' => $this->getProgressByCategory($user),
            'recent_activity' => $this->getRecentActivity($user),
            'learning_curve' => $this->getLearningCurve($user),
        ];
    }

    /**
     * Get overall progress statistics.
     */
    protected function getOverallProgress(User $user): array
    {
        $totalQuizzes = Quiz::active()->count();
        $completedQuizzes = $user->total_completed_quizzes;
        $completionRate = $totalQuizzes > 0
            ? round(($completedQuizzes / $totalQuizzes) * 100, 2)
            : 0;

        return [
            'total_points' => $user->total_points,
            'total_quizzes' => $totalQuizzes,
            'completed_quizzes' => $completedQuizzes,
            'completion_rate' => $completionRate,
            'average_accuracy' => round($user->average_accuracy, 2),
            'ranking_position' => $user->ranking_position,
            'total_attempts' => $user->quizAttempts()->count(),
        ];
    }

    /**
     * Get progress by difficulty level.
     */
    protected function getProgressByDifficulty(User $user): Collection
    {
        $difficulties = [
            Quiz::DIFFICULTY_EASY,
            Quiz::DIFFICULTY_MEDIUM,
            Quiz::DIFFICULTY_HARD,
        ];

        return collect($difficulties)->map(function ($difficulty) use ($user) {
            $quizIds = Quiz::active()
                ->ofDifficulty($difficulty)
                ->pluck('id');

            $attempts = QuizAttempt::where('user_id', $user->id)
                ->whereIn('quiz_id', $quizIds)
                ->whereNotNull('completed_at');

            $totalQuizzes = $quizIds->count();
            $completedQuizzes = $attempts->distinct('quiz_id')->count('quiz_id');

            return [
                'difficulty' => $difficulty,
                'total_quizzes' => $totalQuizzes,
                'completed_quizzes' => $completedQuizzes,
                'completion_rate' => $totalQuizzes > 0
                    ? round(($completedQuizzes / $totalQuizzes) * 100, 2)
                    : 0,
                'average_accuracy' => round($attempts->avg('accuracy') ?? 0, 2),
                'average_score' => round($attempts->avg('score') ?? 0, 2),
            ];
        });
    }

    /**
     * Get progress by category.
     */
    protected function getProgressByCategory(User $user): Collection
    {
        $categories = DB::table('perguntas')
            ->select('categoria')
            ->distinct()
            ->pluck('categoria');

        return $categories->map(function ($categoria) use ($user) {
            // Get perguntas in this category
            $perguntaIds = DB::table('perguntas')
                ->where('categoria', $categoria)
                ->pluck('id_pergunta');

            // Get user's answers for these perguntas
            $answers = DB::table('quiz_answers')
                ->join('quiz_attempts', 'quiz_answers.quiz_attempt_id', '=', 'quiz_attempts.id')
                ->where('quiz_attempts.user_id', $user->id)
                ->whereIn('quiz_answers.pergunta_id', $perguntaIds)
                ->whereNotNull('quiz_attempts.completed_at')
                ->select('quiz_answers.is_correct')
                ->get();

            $total = $answers->count();
            $correct = $answers->where('is_correct', true)->count();

            return [
                'categoria' => $categoria,
                'total_answered' => $total,
                'correct_answers' => $correct,
                'accuracy' => $total > 0 ? round(($correct / $total) * 100, 2) : 0,
            ];
        });
    }

    /**
     * Get recent activity (last 10 quiz attempts).
     */
    protected function getRecentActivity(User $user, int $limit = 10): Collection
    {
        return QuizAttempt::with('quiz:id,title,theme,difficulty')
            ->where('user_id', $user->id)
            ->whereNotNull('completed_at')
            ->orderBy('completed_at', 'desc')
            ->limit($limit)
            ->get()
            ->map(function ($attempt) {
                return [
                    'quiz_title' => $attempt->quiz->title,
                    'theme' => $attempt->quiz->theme,
                    'difficulty' => $attempt->quiz->difficulty,
                    'score' => $attempt->score,
                    'accuracy' => round($attempt->accuracy, 2),
                    'time_spent' => $attempt->time_spent_minutes,
                    'passed' => $attempt->isPassed(),
                    'completed_at' => $attempt->completed_at->format('d/m/Y H:i'),
                ];
            });
    }

    /**
     * Get learning curve (accuracy over time).
     */
    protected function getLearningCurve(User $user, int $limit = 20): Collection
    {
        return QuizAttempt::where('user_id', $user->id)
            ->whereNotNull('completed_at')
            ->orderBy('completed_at')
            ->limit($limit)
            ->get()
            ->map(function ($attempt, $index) {
                return [
                    'attempt_number' => $index + 1,
                    'accuracy' => round($attempt->accuracy, 2),
                    'score' => $attempt->score,
                    'date' => $attempt->completed_at->format('d/m'),
                ];
            });
    }

    /**
     * Get weak areas (categories with low accuracy).
     */
    public function getWeakAreas(User $user, int $limit = 3): Collection
    {
        return $this->getProgressByCategory($user)
            ->where('total_answered', '>', 0)
            ->sortBy('accuracy')
            ->take($limit)
            ->map(function ($category) {
                return [
                    'categoria' => $category['categoria'],
                    'accuracy' => $category['accuracy'],
                    'total_answered' => $category['total_answered'],
                    'needs_improvement' => $category['accuracy'] < 70,
                ];
            })
            ->values();
    }

    /**
     * Get strong areas (categories with high accuracy).
     */
    public function getStrongAreas(User $user, int $limit = 3): Collection
    {
        return $this->getProgressByCategory($user)
            ->where('total_answered', '>', 0)
            ->sortByDesc('accuracy')
            ->take($limit)
            ->map(function ($category) {
                return [
                    'categoria' => $category['categoria'],
                    'accuracy' => $category['accuracy'],
                    'total_answered' => $category['total_answered'],
                ];
            })
            ->values();
    }

    /**
     * Get study recommendations based on user's progress.
     */
    public function getStudyRecommendations(User $user): array
    {
        $weakAreas = $this->getWeakAreas($user);
        $overallProgress = $this->getOverallProgress($user);

        $recommendations = [];

        // Recommend practice if accuracy is low
        if ($overallProgress['average_accuracy'] < 70) {
            $recommendations[] = [
                'type' => 'practice',
                'title' => 'Pratique mais para melhorar',
                'description' => 'Sua precisão está abaixo de 70%. Continue praticando para melhorar seus resultados!',
                'priority' => 'high',
            ];
        }

        // Recommend working on weak areas
        foreach ($weakAreas as $area) {
            $recommendations[] = [
                'type' => 'focus_area',
                'title' => "Estude mais sobre {$area['categoria']}",
                'description' => "Você teve {$area['accuracy']}% de acerto nesta categoria. Foque nesta área para melhorar!",
                'priority' => $area['accuracy'] < 50 ? 'high' : 'medium',
            ];
        }

        // Recommend trying harder quizzes if doing well
        if ($overallProgress['average_accuracy'] >= 80) {
            $recommendations[] = [
                'type' => 'challenge',
                'title' => 'Tente quizzes mais difíceis',
                'description' => 'Você está indo muito bem! Que tal tentar quizzes de nível difícil?',
                'priority' => 'low',
            ];
        }

        // Recommend completing more quizzes
        if ($overallProgress['completion_rate'] < 50) {
            $recommendations[] = [
                'type' => 'completion',
                'title' => 'Complete mais quizzes',
                'description' => "Você completou apenas {$overallProgress['completion_rate']}% dos quizzes disponíveis.",
                'priority' => 'medium',
            ];
        }

        return $recommendations;
    }

    /**
     * Compare user progress with class average.
     */
    public function compareWithAverage(User $user): array
    {
        $students = User::where('role', User::ROLE_STUDENT)->get();

        $avgPoints = $students->avg(fn($u) => $u->total_points);
        $avgAccuracy = $students->avg(fn($u) => $u->average_accuracy);
        $avgCompleted = $students->avg(fn($u) => $u->total_completed_quizzes);

        return [
            'user' => [
                'total_points' => $user->total_points,
                'average_accuracy' => round($user->average_accuracy, 2),
                'completed_quizzes' => $user->total_completed_quizzes,
            ],
            'class_average' => [
                'total_points' => round($avgPoints, 2),
                'average_accuracy' => round($avgAccuracy, 2),
                'completed_quizzes' => round($avgCompleted, 2),
            ],
            'comparison' => [
                'points_diff' => round($user->total_points - $avgPoints, 2),
                'accuracy_diff' => round($user->average_accuracy - $avgAccuracy, 2),
                'quizzes_diff' => $user->total_completed_quizzes - round($avgCompleted),
            ],
            'performance' => $this->getPerformanceLevel($user, $avgPoints, $avgAccuracy),
        ];
    }

    /**
     * Get performance level compared to average.
     */
    protected function getPerformanceLevel(User $user, float $avgPoints, float $avgAccuracy): string
    {
        $userPoints = $user->total_points;
        $userAccuracy = $user->average_accuracy;

        if ($userPoints > $avgPoints * 1.2 && $userAccuracy > $avgAccuracy * 1.1) {
            return 'Excelente - Acima da média';
        } elseif ($userPoints > $avgPoints && $userAccuracy > $avgAccuracy) {
            return 'Bom - Na média ou acima';
        } elseif ($userPoints < $avgPoints * 0.8 || $userAccuracy < $avgAccuracy * 0.8) {
            return 'Precisa melhorar';
        } else {
            return 'Dentro da média';
        }
    }
}
