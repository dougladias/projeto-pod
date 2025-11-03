<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Pergunta extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     */
    protected $table = 'perguntas';

    /**
     * The primary key associated with the table.
     */
    protected $primaryKey = 'id_pergunta';

    /**
     * Indicates if the model should be timestamped.
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'texto_pergunta',
        'categoria',
    ];

    /**
     * Get the respostas (answers) for this pergunta (question).
     */
    public function respostas(): HasMany
    {
        return $this->hasMany(Resposta::class, 'id_pergunta', 'id_pergunta');
    }

    /**
     * Get the correct resposta for this pergunta.
     */
    public function respostaCorreta(): HasMany
    {
        return $this->hasMany(Resposta::class, 'id_pergunta', 'id_pergunta')
                    ->where('correta', true);
    }

    /**
     * Get the quizzes that include this pergunta.
     */
    public function quizzes(): BelongsToMany
    {
        return $this->belongsToMany(Quiz::class, 'quiz_perguntas', 'pergunta_id', 'quiz_id')
                    ->withPivot('order', 'points')
                    ->withTimestamps();
    }

    /**
     * Get the quiz answers for this pergunta.
     */
    public function quizAnswers(): HasMany
    {
        return $this->hasMany(QuizAnswer::class, 'pergunta_id', 'id_pergunta');
    }
}
