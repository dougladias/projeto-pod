<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserAchievement extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     */
    protected $table = 'user_achievements';

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'user_id',
        'achievement_id',
        'unlocked_at',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'unlocked_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the user that owns this achievement unlock.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the achievement that was unlocked.
     */
    public function achievement(): BelongsTo
    {
        return $this->belongsTo(Achievement::class);
    }

    /**
     * Scope a query to only include recent unlocks.
     */
    public function scopeRecent($query, int $days = 7)
    {
        return $query->where('unlocked_at', '>=', now()->subDays($days));
    }

    /**
     * Scope a query to order by most recent unlocks.
     */
    public function scopeLatest($query)
    {
        return $query->orderBy('unlocked_at', 'desc');
    }
}
