<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class QuizAnswer extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     */
    protected $table = 'quiz_answers';

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'quiz_attempt_id',
        'pergunta_id',
        'resposta_id',
        'is_correct',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'is_correct' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the quiz attempt that this answer belongs to.
     */
    public function quizAttempt(): BelongsTo
    {
        return $this->belongsTo(QuizAttempt::class, 'quiz_attempt_id');
    }

    /**
     * Get the pergunta (question) that was answered.
     */
    public function pergunta(): BelongsTo
    {
        return $this->belongsTo(Pergunta::class, 'pergunta_id', 'id_pergunta');
    }

    /**
     * Get the resposta (answer) that was selected.
     */
    public function resposta(): BelongsTo
    {
        return $this->belongsTo(Resposta::class, 'resposta_id', 'id_resposta');
    }

    /**
     * Scope a query to only include correct answers.
     */
    public function scopeCorrect($query)
    {
        return $query->where('is_correct', true);
    }

    /**
     * Scope a query to only include incorrect answers.
     */
    public function scopeIncorrect($query)
    {
        return $query->where('is_correct', false);
    }
}
