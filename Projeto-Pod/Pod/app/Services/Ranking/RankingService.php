<?php

namespace App\Services\Ranking;

use App\Models\User;
use Illuminate\Support\Collection;

class RankingService
{
    /**
     * Get global ranking of all students.
     */
    public function getGlobalRanking(int $limit = 50): Collection
    {
        return User::where('role', User::ROLE_STUDENT)
            ->get()
            ->sortByDesc(fn($user) => $user->total_points)
            ->take($limit)
            ->map(function ($user, $index) {
                return [
                    'position' => $index + 1,
                    'user_id' => $user->id,
                    'name' => $user->name,
                    'avatar' => $user->avatar,
                    'school' => $user->school,
                    'school_year' => $user->school_year,
                    'total_points' => $user->total_points,
                    'completed_quizzes' => $user->total_completed_quizzes,
                    'average_accuracy' => round($user->average_accuracy, 2),
                ];
            })
            ->values();
    }

    /**
     * Get top N students.
     */
    public function getTopStudents(int $limit = 10): Collection
    {
        return $this->getGlobalRanking($limit);
    }

    /**
     * Get user's ranking position.
     */
    public function getUserPosition(User $user): int
    {
        return User::where('role', User::ROLE_STUDENT)
            ->get()
            ->sortByDesc(fn($u) => $u->total_points)
            ->search(fn($u) => $u->id === $user->id) + 1;
    }

    /**
     * Get ranking by school.
     */
    public function getRankingBySchool(string $school, int $limit = 50): Collection
    {
        return User::where('role', User::ROLE_STUDENT)
            ->where('school', $school)
            ->get()
            ->sortByDesc(fn($user) => $user->total_points)
            ->take($limit)
            ->map(function ($user, $index) {
                return [
                    'position' => $index + 1,
                    'user_id' => $user->id,
                    'name' => $user->name,
                    'avatar' => $user->avatar,
                    'school_year' => $user->school_year,
                    'total_points' => $user->total_points,
                    'completed_quizzes' => $user->total_completed_quizzes,
                    'average_accuracy' => round($user->average_accuracy, 2),
                ];
            })
            ->values();
    }

    /**
     * Get ranking by school year.
     */
    public function getRankingBySchoolYear(string $schoolYear, int $limit = 50): Collection
    {
        return User::where('role', User::ROLE_STUDENT)
            ->where('school_year', $schoolYear)
            ->get()
            ->sortByDesc(fn($user) => $user->total_points)
            ->take($limit)
            ->map(function ($user, $index) {
                return [
                    'position' => $index + 1,
                    'user_id' => $user->id,
                    'name' => $user->name,
                    'avatar' => $user->avatar,
                    'school' => $user->school,
                    'total_points' => $user->total_points,
                    'completed_quizzes' => $user->total_completed_quizzes,
                    'average_accuracy' => round($user->average_accuracy, 2),
                ];
            })
            ->values();
    }

    /**
     * Get user's ranking context (users around their position).
     */
    public function getUserRankingContext(User $user, int $range = 5): array
    {
        $allStudents = User::where('role', User::ROLE_STUDENT)
            ->get()
            ->sortByDesc(fn($u) => $u->total_points)
            ->values();

        $userIndex = $allStudents->search(fn($u) => $u->id === $user->id);

        if ($userIndex === false) {
            return [
                'user_position' => 0,
                'total_students' => $allStudents->count(),
                'above' => collect(),
                'user' => null,
                'below' => collect(),
            ];
        }

        $start = max(0, $userIndex - $range);
        $end = min($allStudents->count() - 1, $userIndex + $range);

        $context = $allStudents->slice($start, $end - $start + 1)
            ->map(function ($u, $index) use ($start) {
                return [
                    'position' => $start + $index + 1,
                    'user_id' => $u->id,
                    'name' => $u->name,
                    'avatar' => $u->avatar,
                    'school' => $u->school,
                    'total_points' => $u->total_points,
                    'completed_quizzes' => $u->total_completed_quizzes,
                    'average_accuracy' => round($u->average_accuracy, 2),
                    'is_current_user' => $u->id === $user->id,
                ];
            })
            ->values();

        return [
            'user_position' => $userIndex + 1,
            'total_students' => $allStudents->count(),
            'context' => $context,
        ];
    }

    /**
     * Get ranking statistics.
     */
    public function getRankingStats(): array
    {
        $students = User::where('role', User::ROLE_STUDENT)->get();

        $totalPoints = $students->sum(fn($user) => $user->total_points);
        $totalQuizzesCompleted = $students->sum(fn($user) => $user->total_completed_quizzes);

        return [
            'total_students' => $students->count(),
            'total_points_distributed' => $totalPoints,
            'total_quizzes_completed' => $totalQuizzesCompleted,
            'average_points_per_student' => $students->count() > 0
                ? round($totalPoints / $students->count(), 2)
                : 0,
            'average_quizzes_per_student' => $students->count() > 0
                ? round($totalQuizzesCompleted / $students->count(), 2)
                : 0,
            'highest_points' => $students->max(fn($user) => $user->total_points) ?? 0,
            'lowest_points' => $students->min(fn($user) => $user->total_points) ?? 0,
        ];
    }

    /**
     * Get monthly ranking (based on current month activity).
     */
    public function getMonthlyRanking(int $limit = 50): Collection
    {
        $startOfMonth = now()->startOfMonth();
        $endOfMonth = now()->endOfMonth();

        return User::where('role', User::ROLE_STUDENT)
            ->withSum([
                'quizAttempts as monthly_points' => function ($query) use ($startOfMonth, $endOfMonth) {
                    $query->whereNotNull('completed_at')
                          ->whereBetween('completed_at', [$startOfMonth, $endOfMonth]);
                }
            ], 'score')
            ->get()
            ->sortByDesc('monthly_points')
            ->take($limit)
            ->map(function ($user, $index) {
                return [
                    'position' => $index + 1,
                    'user_id' => $user->id,
                    'name' => $user->name,
                    'avatar' => $user->avatar,
                    'school' => $user->school,
                    'monthly_points' => $user->monthly_points ?? 0,
                    'total_points' => $user->total_points,
                ];
            })
            ->values();
    }

    /**
     * Get weekly ranking (based on current week activity).
     */
    public function getWeeklyRanking(int $limit = 50): Collection
    {
        $startOfWeek = now()->startOfWeek();
        $endOfWeek = now()->endOfWeek();

        return User::where('role', User::ROLE_STUDENT)
            ->withSum([
                'quizAttempts as weekly_points' => function ($query) use ($startOfWeek, $endOfWeek) {
                    $query->whereNotNull('completed_at')
                          ->whereBetween('completed_at', [$startOfWeek, $endOfWeek]);
                }
            ], 'score')
            ->get()
            ->sortByDesc('weekly_points')
            ->take($limit)
            ->map(function ($user, $index) {
                return [
                    'position' => $index + 1,
                    'user_id' => $user->id,
                    'name' => $user->name,
                    'avatar' => $user->avatar,
                    'school' => $user->school,
                    'weekly_points' => $user->weekly_points ?? 0,
                    'total_points' => $user->total_points,
                ];
            })
            ->values();
    }
}
