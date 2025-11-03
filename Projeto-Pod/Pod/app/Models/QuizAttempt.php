<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class QuizAttempt extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     */
    protected $table = 'quiz_attempts';

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'user_id',
        'quiz_id',
        'score',
        'correct_answers',
        'total_questions',
        'accuracy',
        'time_spent_seconds',
        'completed_at',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'score' => 'integer',
        'correct_answers' => 'integer',
        'total_questions' => 'integer',
        'accuracy' => 'decimal:2',
        'time_spent_seconds' => 'integer',
        'completed_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the user that made this attempt.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the quiz that was attempted.
     */
    public function quiz(): BelongsTo
    {
        return $this->belongsTo(Quiz::class);
    }

    /**
     * Get all answers for this attempt.
     */
    public function answers(): HasMany
    {
        return $this->hasMany(QuizAnswer::class, 'quiz_attempt_id');
    }

    /**
     * Scope a query to only include completed attempts.
     */
    public function scopeCompleted($query)
    {
        return $query->whereNotNull('completed_at');
    }

    /**
     * Scope a query to only include incomplete attempts.
     */
    public function scopeIncomplete($query)
    {
        return $query->whereNull('completed_at');
    }

    /**
     * Scope a query to order by most recent.
     */
    public function scopeLatest($query)
    {
        return $query->orderBy('created_at', 'desc');
    }

    /**
     * Check if the attempt is completed.
     */
    public function isCompleted(): bool
    {
        return !is_null($this->completed_at);
    }

    /**
     * Get the time spent in minutes.
     */
    public function getTimeSpentMinutesAttribute(): float
    {
        return round($this->time_spent_seconds / 60, 2);
    }

    /**
     * Get the accuracy percentage.
     */
    public function getAccuracyPercentageAttribute(): float
    {
        if ($this->total_questions === 0) return 0;
        return round(($this->correct_answers / $this->total_questions) * 100, 2);
    }

    /**
     * Check if the attempt passed (accuracy >= 70%).
     */
    public function isPassed(): bool
    {
        return $this->accuracy >= 70;
    }
}
