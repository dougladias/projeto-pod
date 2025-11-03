<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Resposta extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     */
    protected $table = 'respostas';

    /**
     * The primary key associated with the table.
     */
    protected $primaryKey = 'id_resposta';

    /**
     * Indicates if the model should be timestamped.
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'id_pergunta',
        'texto_resposta',
        'correta',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'correta' => 'boolean',
    ];

    /**
     * Get the pergunta (question) that owns this resposta (answer).
     */
    public function pergunta(): BelongsTo
    {
        return $this->belongsTo(Pergunta::class, 'id_pergunta', 'id_pergunta');
    }

    /**
     * Get the quiz answers that reference this resposta.
     */
    public function quizAnswers(): HasMany
    {
        return $this->hasMany(QuizAnswer::class, 'resposta_id', 'id_resposta');
    }

    /**
     * Scope a query to only include correct respostas.
     */
    public function scopeCorrect($query)
    {
        return $query->where('correta', true);
    }

    /**
     * Scope a query to only include incorrect respostas.
     */
    public function scopeIncorrect($query)
    {
        return $query->where('correta', false);
    }
}
