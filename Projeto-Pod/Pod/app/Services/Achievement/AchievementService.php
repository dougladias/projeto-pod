<?php

namespace App\Services\Achievement;

use App\Models\Achievement;
use App\Models\User;
use App\Models\UserAchievement;
use Illuminate\Support\Collection;

class AchievementService
{
    /**
     * Check and unlock achievements for a user.
     */
    public function checkAndUnlockAchievements(User $user): Collection
    {
        $unlockedAchievements = collect();

        $achievements = Achievement::active()->get();

        foreach ($achievements as $achievement) {
            // Skip if already unlocked
            if ($achievement->isUnlockedBy($user)) {
                continue;
            }

            // Check if user meets requirement
            if ($this->meetsRequirement($user, $achievement)) {
                $this->unlockAchievement($user, $achievement);
                $unlockedAchievements->push($achievement);
            }
        }

        return $unlockedAchievements;
    }

    /**
     * Check if user meets achievement requirement.
     */
    protected function meetsRequirement(User $user, Achievement $achievement): bool
    {
        switch ($achievement->type) {
            case Achievement::TYPE_QUIZ_COUNT:
                return $user->total_completed_quizzes >= $achievement->requirement_value;

            case Achievement::TYPE_STREAK:
                $streak = app(\App\Services\Quiz\ScoringService::class)->calculateStreak($user->id);
                return $streak >= $achievement->requirement_value;

            case Achievement::TYPE_ACCURACY:
                return $user->average_accuracy >= $achievement->requirement_value;

            case Achievement::TYPE_POINTS:
                return $user->total_points >= $achievement->requirement_value;

            default:
                return false;
        }
    }

    /**
     * Unlock an achievement for a user.
     */
    public function unlockAchievement(User $user, Achievement $achievement): UserAchievement
    {
        return UserAchievement::create([
            'user_id' => $user->id,
            'achievement_id' => $achievement->id,
            'unlocked_at' => now(),
        ]);
    }

    /**
     * Get all achievements with unlock status for a user.
     */
    public function getAchievementsWithStatus(User $user): Collection
    {
        $userAchievements = $user->achievements->keyBy('id');

        return Achievement::active()
            ->orderBy('requirement_value')
            ->get()
            ->map(function ($achievement) use ($user, $userAchievements) {
                $isUnlocked = $userAchievements->has($achievement->id);
                $progress = $this->getAchievementProgress($user, $achievement);

                return [
                    'id' => $achievement->id,
                    'name' => $achievement->name,
                    'description' => $achievement->description,
                    'icon' => $achievement->icon,
                    'type' => $achievement->type,
                    'requirement_value' => $achievement->requirement_value,
                    'points_reward' => $achievement->points_reward,
                    'is_unlocked' => $isUnlocked,
                    'unlocked_at' => $isUnlocked
                        ? $userAchievements->get($achievement->id)->pivot->unlocked_at->format('d/m/Y H:i')
                        : null,
                    'progress' => $progress,
                ];
            });
    }

    /**
     * Get achievement progress for a user.
     */
    protected function getAchievementProgress(User $user, Achievement $achievement): array
    {
        $current = 0;

        switch ($achievement->type) {
            case Achievement::TYPE_QUIZ_COUNT:
                $current = $user->total_completed_quizzes;
                break;

            case Achievement::TYPE_STREAK:
                $current = app(\App\Services\Quiz\ScoringService::class)->calculateStreak($user->id);
                break;

            case Achievement::TYPE_ACCURACY:
                $current = $user->average_accuracy;
                break;

            case Achievement::TYPE_POINTS:
                $current = $user->total_points;
                break;
        }

        $percentage = $achievement->requirement_value > 0
            ? min(100, round(($current / $achievement->requirement_value) * 100, 2))
            : 0;

        return [
            'current' => $current,
            'required' => $achievement->requirement_value,
            'percentage' => $percentage,
        ];
    }

    /**
     * Get user's recent achievements.
     */
    public function getRecentAchievements(User $user, int $limit = 5): Collection
    {
        return $user->achievements()
            ->orderByDesc('user_achievements.unlocked_at')
            ->limit($limit)
            ->get()
            ->map(function ($achievement) {
                return [
                    'id' => $achievement->id,
                    'name' => $achievement->name,
                    'description' => $achievement->description,
                    'icon' => $achievement->icon,
                    'points_reward' => $achievement->points_reward,
                    'unlocked_at' => $achievement->pivot->unlocked_at->diffForHumans(),
                ];
            });
    }

    /**
     * Get achievement statistics.
     */
    public function getAchievementStats(): array
    {
        $totalAchievements = Achievement::active()->count();
        $totalUnlocks = UserAchievement::count();
        $averageUnlocksPerUser = User::where('role', User::ROLE_STUDENT)->count() > 0
            ? round($totalUnlocks / User::where('role', User::ROLE_STUDENT)->count(), 2)
            : 0;

        $mostUnlockedAchievement = Achievement::withCount('users')
            ->orderByDesc('users_count')
            ->first();

        $rarestAchievement = Achievement::withCount('users')
            ->where('users_count', '>', 0)
            ->orderBy('users_count')
            ->first();

        return [
            'total_achievements' => $totalAchievements,
            'total_unlocks' => $totalUnlocks,
            'average_unlocks_per_user' => $averageUnlocksPerUser,
            'most_unlocked' => $mostUnlockedAchievement ? [
                'name' => $mostUnlockedAchievement->name,
                'unlocks' => $mostUnlockedAchievement->users_count,
            ] : null,
            'rarest' => $rarestAchievement ? [
                'name' => $rarestAchievement->name,
                'unlocks' => $rarestAchievement->users_count,
            ] : null,
        ];
    }

    /**
     * Get users who unlocked a specific achievement.
     */
    public function getAchievementHolders(Achievement $achievement, int $limit = 50): Collection
    {
        return $achievement->users()
            ->orderBy('user_achievements.unlocked_at')
            ->limit($limit)
            ->get()
            ->map(function ($user, $index) {
                return [
                    'position' => $index + 1,
                    'name' => $user->name,
                    'avatar' => $user->avatar,
                    'unlocked_at' => $user->pivot->unlocked_at->format('d/m/Y H:i'),
                ];
            });
    }

    /**
     * Get next achievements user can unlock.
     */
    public function getNextAchievements(User $user, int $limit = 3): Collection
    {
        $userAchievements = $user->achievements->pluck('id');

        return Achievement::active()
            ->whereNotIn('id', $userAchievements)
            ->get()
            ->map(function ($achievement) use ($user) {
                $progress = $this->getAchievementProgress($user, $achievement);
                return [
                    'achievement' => $achievement,
                    'progress' => $progress,
                ];
            })
            ->sortByDesc('progress.percentage')
            ->take($limit)
            ->map(function ($item) {
                return [
                    'id' => $item['achievement']->id,
                    'name' => $item['achievement']->name,
                    'description' => $item['achievement']->description,
                    'icon' => $item['achievement']->icon,
                    'type' => $item['achievement']->type,
                    'points_reward' => $item['achievement']->points_reward,
                    'progress' => $item['progress'],
                ];
            })
            ->values();
    }
}
