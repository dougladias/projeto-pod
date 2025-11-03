<?php

namespace App\Services\Quiz;

use App\Models\Quiz;
use App\Models\QuizAnswer;
use App\Models\QuizAttempt;
use App\Models\Resposta;

class ScoringService
{
    /**
     * Calculate and update quiz attempt score.
     */
    public function calculateAndUpdateScore(QuizAttempt $attempt): array
    {
        $totalQuestions = QuizAnswer::where('quiz_attempt_id', $attempt->id)->count();
        $correctAnswers = QuizAnswer::where('quiz_attempt_id', $attempt->id)
            ->where('is_correct', true)
            ->count();

        // Calculate accuracy percentage
        $accuracy = $totalQuestions > 0 ? ($correctAnswers / $totalQuestions) * 100 : 0;

        // Calculate score based on quiz points_reward and accuracy
        $quiz = $attempt->quiz;
        $score = round(($accuracy / 100) * $quiz->points_reward);

        // Calculate time spent in seconds
        $timeSpent = now()->diffInSeconds($attempt->created_at);

        // Update attempt
        $attempt->update([
            'correct_answers' => $correctAnswers,
            'total_questions' => $totalQuestions,
            'accuracy' => $accuracy,
            'score' => $score,
            'time_spent_seconds' => $timeSpent,
            'completed_at' => now(),
        ]);

        return [
            'score' => $score,
            'accuracy' => round($accuracy, 2),
            'correct_answers' => $correctAnswers,
            'total_questions' => $totalQuestions,
            'time_spent_seconds' => $timeSpent,
            'time_spent_minutes' => round($timeSpent / 60, 2),
            'passed' => $attempt->isPassed(),
        ];
    }

    /**
     * Check if an answer is correct.
     */
    public function checkAnswer(int $perguntaId, int $respostaId): array
    {
        $respostaCorreta = Resposta::where('id_pergunta', $perguntaId)
            ->where('correta', true)
            ->first();

        $isCorrect = $respostaCorreta && $respostaCorreta->id_resposta == $respostaId;

        return [
            'is_correct' => $isCorrect,
            'correct_resposta_id' => $respostaCorreta?->id_resposta,
        ];
    }

    /**
     * Calculate bonus points based on time and accuracy.
     */
    public function calculateBonusPoints(QuizAttempt $attempt): int
    {
        $bonus = 0;

        // Time bonus: if completed in less than 50% of time limit
        $quiz = $attempt->quiz;
        if ($quiz->time_limit_minutes > 0) {
            $timeLimit = $quiz->time_limit_minutes * 60; // convert to seconds
            $timeUsed = $attempt->time_spent_seconds;

            if ($timeUsed < ($timeLimit * 0.5)) {
                $bonus += round($quiz->points_reward * 0.2); // 20% bonus
            }
        }

        // Perfect score bonus
        if ($attempt->accuracy == 100) {
            $bonus += round($quiz->points_reward * 0.3); // 30% bonus
        }

        // High accuracy bonus (90-99%)
        if ($attempt->accuracy >= 90 && $attempt->accuracy < 100) {
            $bonus += round($quiz->points_reward * 0.1); // 10% bonus
        }

        return $bonus;
    }

    /**
     * Get performance level based on accuracy.
     */
    public function getPerformanceLevel(float $accuracy): string
    {
        if ($accuracy >= 90) {
            return 'Excelente';
        } elseif ($accuracy >= 70) {
            return 'Bom';
        } elseif ($accuracy >= 50) {
            return 'Regular';
        } else {
            return 'Precisa Melhorar';
        }
    }

    /**
     * Calculate streak (consecutive days playing).
     */
    public function calculateStreak(int $userId): int
    {
        $attempts = QuizAttempt::where('user_id', $userId)
            ->whereNotNull('completed_at')
            ->orderBy('completed_at', 'desc')
            ->pluck('completed_at')
            ->map(fn($date) => $date->format('Y-m-d'))
            ->unique()
            ->values();

        if ($attempts->isEmpty()) {
            return 0;
        }

        $streak = 1;
        $today = now()->format('Y-m-d');

        // Check if played today or yesterday to start counting
        if ($attempts->first() !== $today && $attempts->first() !== now()->subDay()->format('Y-m-d')) {
            return 0;
        }

        for ($i = 1; $i < $attempts->count(); $i++) {
            $currentDate = \Carbon\Carbon::parse($attempts[$i]);
            $previousDate = \Carbon\Carbon::parse($attempts[$i - 1]);

            if ($previousDate->diffInDays($currentDate) === 1) {
                $streak++;
            } else {
                break;
            }
        }

        return $streak;
    }

    /**
     * Get detailed attempt statistics.
     */
    public function getAttemptStats(QuizAttempt $attempt): array
    {
        $answers = QuizAnswer::where('quiz_attempt_id', $attempt->id)
            ->with(['pergunta:id_pergunta,categoria'])
            ->get();

        // Stats by category
        $statsByCategory = $answers->groupBy('pergunta.categoria')
            ->map(function ($categoryAnswers) {
                $total = $categoryAnswers->count();
                $correct = $categoryAnswers->where('is_correct', true)->count();

                return [
                    'total' => $total,
                    'correct' => $correct,
                    'accuracy' => $total > 0 ? round(($correct / $total) * 100, 2) : 0,
                ];
            });

        return [
            'overall' => [
                'score' => $attempt->score,
                'accuracy' => round($attempt->accuracy, 2),
                'correct_answers' => $attempt->correct_answers,
                'total_questions' => $attempt->total_questions,
                'time_spent' => $attempt->time_spent_minutes,
                'performance_level' => $this->getPerformanceLevel($attempt->accuracy),
                'passed' => $attempt->isPassed(),
            ],
            'by_category' => $statsByCategory,
            'bonus_points' => $this->calculateBonusPoints($attempt),
        ];
    }
}
