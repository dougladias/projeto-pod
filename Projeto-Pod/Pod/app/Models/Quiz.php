<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Quiz extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     */
    protected $table = 'quizzes';

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'title',
        'description',
        'theme',
        'difficulty',
        'points_reward',
        'time_limit_minutes',
        'is_active',
        'order',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'points_reward' => 'integer',
        'time_limit_minutes' => 'integer',
        'is_active' => 'boolean',
        'order' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Difficulty levels constants.
     */
    const DIFFICULTY_EASY = 'facil';
    const DIFFICULTY_MEDIUM = 'medio';
    const DIFFICULTY_HARD = 'dificil';

    /**
     * Get the perguntas (questions) for this quiz through the pivot table.
     */
    public function perguntas(): BelongsToMany
    {
        return $this->belongsToMany(Pergunta::class, 'quiz_perguntas', 'quiz_id', 'pergunta_id')
                    ->withPivot('order', 'points')
                    ->withTimestamps()
                    ->orderBy('quiz_perguntas.order');
    }

    /**
     * Get all quiz attempts for this quiz.
     */
    public function attempts(): HasMany
    {
        return $this->hasMany(QuizAttempt::class);
    }

    /**
     * Scope a query to only include active quizzes.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to filter by difficulty.
     */
    public function scopeOfDifficulty($query, string $difficulty)
    {
        return $query->where('difficulty', $difficulty);
    }

    /**
     * Scope a query to order by quiz order.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('order');
    }

    /**
     * Get the total number of questions in this quiz.
     */
    public function getTotalQuestionsAttribute(): int
    {
        return $this->perguntas()->count();
    }

    /**
     * Get the total possible points for this quiz.
     */
    public function getTotalPointsAttribute(): int
    {
        return $this->perguntas()->sum('quiz_perguntas.points');
    }

    /**
     * Get the average score for this quiz.
     */
    public function getAverageScoreAttribute(): float
    {
        return $this->attempts()
                    ->whereNotNull('completed_at')
                    ->avg('score') ?? 0;
    }

    /**
     * Get the completion rate for this quiz.
     */
    public function getCompletionRateAttribute(): float
    {
        $total = $this->attempts()->count();
        if ($total === 0) return 0;

        $completed = $this->attempts()->whereNotNull('completed_at')->count();
        return round(($completed / $total) * 100, 2);
    }
}
