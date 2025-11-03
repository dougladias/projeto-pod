<?php

namespace App\Services\Quiz;

use App\Models\Pergunta;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\User;
use Illuminate\Support\Collection;

class QuizService
{
    /**
     * Get all active quizzes with user progress.
     */
    public function getActiveQuizzesWithProgress(User $user): Collection
    {
        $userAttempts = QuizAttempt::where('user_id', $user->id)
            ->whereNotNull('completed_at')
            ->select('quiz_id', 'score', 'accuracy', 'completed_at')
            ->get()
            ->groupBy('quiz_id');

        return Quiz::active()
            ->ordered()
            ->get()
            ->map(function ($quiz) use ($userAttempts) {
                $attempts = $userAttempts->get($quiz->id, collect());

                return [
                    'quiz' => $quiz,
                    'best_score' => $attempts->max('score') ?? 0,
                    'best_accuracy' => $attempts->max('accuracy') ?? 0,
                    'attempts_count' => $attempts->count(),
                    'is_completed' => $attempts->isNotEmpty(),
                    'last_attempt' => $attempts->sortByDesc('completed_at')->first(),
                ];
            });
    }

    /**
     * Get quiz by ID with all perguntas and respostas.
     */
    public function getQuizWithPerguntas(int $quizId): ?Quiz
    {
        return Quiz::with(['perguntas.respostas'])
            ->find($quizId);
    }

    /**
     * Start a new quiz attempt for a user.
     */
    public function startQuizAttempt(Quiz $quiz, User $user): QuizAttempt
    {
        $totalQuestions = $quiz->perguntas()->count();

        return QuizAttempt::create([
            'user_id' => $user->id,
            'quiz_id' => $quiz->id,
            'total_questions' => $totalQuestions,
            'correct_answers' => 0,
            'score' => 0,
            'accuracy' => 0,
            'time_spent_seconds' => 0,
        ]);
    }

    /**
     * Get perguntas for a quiz with shuffled respostas.
     */
    public function getQuizPerguntas(Quiz $quiz): Collection
    {
        return $quiz->perguntas()
            ->with(['respostas' => function ($query) {
                $query->select('id_resposta', 'id_pergunta', 'texto_resposta')
                      ->inRandomOrder();
            }])
            ->get()
            ->map(function ($pergunta) {
                return [
                    'id' => $pergunta->id_pergunta,
                    'texto_pergunta' => $pergunta->texto_pergunta,
                    'categoria' => $pergunta->categoria,
                    'points' => $pergunta->pivot->points ?? 0,
                    'respostas' => $pergunta->respostas->map(function ($resposta) {
                        return [
                            'id' => $resposta->id_resposta,
                            'texto_resposta' => $resposta->texto_resposta,
                        ];
                    })->values(),
                ];
            });
    }

    /**
     * Get recommended quizzes for a user (not completed or with low accuracy).
     */
    public function getRecommendedQuizzes(User $user, int $limit = 3): Collection
    {
        return Quiz::active()
            ->ordered()
            ->whereNotIn('id', function ($query) use ($user) {
                $query->select('quiz_id')
                      ->from('quiz_attempts')
                      ->where('user_id', $user->id)
                      ->whereNotNull('completed_at')
                      ->where('accuracy', '>=', 80);
            })
            ->limit($limit)
            ->get();
    }

    /**
     * Get quiz statistics.
     */
    public function getQuizStats(Quiz $quiz): array
    {
        $attempts = QuizAttempt::where('quiz_id', $quiz->id)
            ->whereNotNull('completed_at');

        return [
            'total_attempts' => $attempts->count(),
            'average_score' => round($attempts->avg('score') ?? 0, 2),
            'average_accuracy' => round($attempts->avg('accuracy') ?? 0, 2),
            'average_time' => round($attempts->avg('time_spent_seconds') ?? 0, 2),
            'completion_rate' => $quiz->completion_rate,
        ];
    }

    /**
     * Get popular quizzes (most completed).
     */
    public function getPopularQuizzes(int $limit = 5): Collection
    {
        return Quiz::withCount(['attempts as completions' => function ($query) {
                $query->whereNotNull('completed_at');
            }])
            ->orderByDesc('completions')
            ->limit($limit)
            ->get();
    }

    /**
     * Check if user can start quiz (if it's active).
     */
    public function canStartQuiz(Quiz $quiz): bool
    {
        return $quiz->is_active;
    }

    /**
     * Get quizzes by difficulty.
     */
    public function getQuizzesByDifficulty(string $difficulty): Collection
    {
        return Quiz::active()
            ->ofDifficulty($difficulty)
            ->ordered()
            ->get();
    }

    /**
     * Get quizzes by theme.
     */
    public function getQuizzesByTheme(string $theme): Collection
    {
        return Quiz::active()
            ->where('theme', $theme)
            ->ordered()
            ->get();
    }
}
