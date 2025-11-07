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
        $students = User::where('role', User::ROLE_STUDENT)
            ->select('users.*')
            ->selectRaw('COALESCE(SUM(CASE WHEN quiz_attempts.completed_at IS NOT NULL THEN quiz_attempts.score ELSE 0 END), 0) as total_points')
            ->selectRaw('COUNT(CASE WHEN quiz_attempts.completed_at IS NOT NULL THEN 1 END) as completed_quizzes')
            ->selectRaw('COALESCE(AVG(CASE WHEN quiz_attempts.completed_at IS NOT NULL THEN quiz_attempts.accuracy END), 0) as average_accuracy')
            ->leftJoin('quiz_attempts', 'users.id', '=', 'quiz_attempts.user_id')
            ->groupBy('users.id')
            ->orderByDesc('total_points')
            ->limit($limit)
            ->get();

        return $students->map(function ($user, $index) {
            return [
                'position' => $index + 1,
                'user_id' => $user->id,
                'name' => $user->name,
                'avatar' => $user->avatar,
                'school' => $user->school,
                'school_year' => $user->school_year,
                'total_points' => (int) $user->total_points,
                'completed_quizzes' => (int) $user->completed_quizzes,
                'average_accuracy' => round((float) $user->average_accuracy, 2),
            ];
        })->values();
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
        // Get total students count
        $totalStudents = User::where('role', User::ROLE_STUDENT)->count();

        // Get user's position using optimized query
        $userPosition = User::where('role', User::ROLE_STUDENT)
            ->select('users.id')
            ->selectRaw('COALESCE(SUM(CASE WHEN quiz_attempts.completed_at IS NOT NULL THEN quiz_attempts.score ELSE 0 END), 0) as total_points')
            ->leftJoin('quiz_attempts', 'users.id', '=', 'quiz_attempts.user_id')
            ->groupBy('users.id')
            ->orderByDesc('total_points')
            ->get()
            ->pluck('id')
            ->search($user->id);

        if ($userPosition === false) {
            return [
                'user_position' => 0,
                'total_students' => $totalStudents,
                'context' => collect(),
            ];
        }

        $userPosition = $userPosition + 1;

        return [
            'user_position' => $userPosition,
            'total_students' => $totalStudents,
            'context' => collect(),
        ];
    }

    /**
     * Get ranking statistics.
     */
    public function getRankingStats(): array
    {
        $stats = User::where('users.role', User::ROLE_STUDENT)
            ->selectRaw('COUNT(DISTINCT users.id) as total_students')
            ->selectRaw('COALESCE(SUM(CASE WHEN quiz_attempts.completed_at IS NOT NULL THEN quiz_attempts.score ELSE 0 END), 0) as total_points')
            ->selectRaw('COUNT(CASE WHEN quiz_attempts.completed_at IS NOT NULL THEN 1 END) as total_quizzes')
            ->leftJoin('quiz_attempts', 'users.id', '=', 'quiz_attempts.user_id')
            ->first();

        $totalStudents = $stats->total_students ?? 0;
        $totalPoints = $stats->total_points ?? 0;

        return [
            'total_students' => $totalStudents,
            'total_points_distributed' => (int) $totalPoints,
            'total_quizzes_completed' => (int) ($stats->total_quizzes ?? 0),
            'average_points_per_student' => $totalStudents > 0
                ? round($totalPoints / $totalStudents, 2)
                : 0,
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
