<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class QuizCorrectAnswer extends Model
{
    protected $fillable = [
        'question_id',
        'correct_option_id',
        'explanation',
    ];

    public function question(): BelongsTo
    {
        return $this->belongsTo(QuizQuestion::class, 'question_id');
    }

    public function correctOption(): BelongsTo
    {
        return $this->belongsTo(QuizQuestionOption::class, 'correct_option_id');
    }
}
