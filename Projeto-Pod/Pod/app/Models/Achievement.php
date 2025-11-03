<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Achievement extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     */
    protected $table = 'achievements';

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'description',
        'icon',
        'type',
        'requirement_value',
        'points_reward',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'requirement_value' => 'integer',
        'points_reward' => 'integer',
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Achievement types constants.
     */
    const TYPE_QUIZ_COUNT = 'quiz_count';
    const TYPE_STREAK = 'streak';
    const TYPE_ACCURACY = 'accuracy';
    const TYPE_POINTS = 'points';

    /**
     * Get all users who have unlocked this achievement.
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_achievements')
                    ->withPivot('unlocked_at')
                    ->withTimestamps();
    }

    /**
     * Get the user achievements for this achievement.
     */
    public function userAchievements(): HasMany
    {
        return $this->hasMany(UserAchievement::class);
    }

    /**
     * Scope a query to only include active achievements.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to filter by type.
     */
    public function scopeOfType($query, string $type)
    {
        return $query->where('type', $type);
    }

    /**
     * Check if user has unlocked this achievement.
     */
    public function isUnlockedBy(User $user): bool
    {
        return $this->users()->where('user_id', $user->id)->exists();
    }

    /**
     * Get the number of users who unlocked this achievement.
     */
    public function getUnlockedCountAttribute(): int
    {
        return $this->users()->count();
    }
}
