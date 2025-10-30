<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Indexes para quiz_question_options
        Schema::table('quiz_question_options', function (Blueprint $table) {
            $table->index('question_id', 'idx_options_question_id');
            $table->index('order', 'idx_options_order');
        });

        // Indexes para quiz_attempts
        Schema::table('quiz_attempts', function (Blueprint $table) {
            $table->index(['user_id', 'quiz_id'], 'idx_attempts_user_quiz');
            $table->index('status', 'idx_attempts_status');
            $table->index('completed_at', 'idx_attempts_completed_at');
        });

        // Indexes para quiz_attempt_answers
        Schema::table('quiz_attempt_answers', function (Blueprint $table) {
            $table->index('attempt_id', 'idx_answers_attempt_id');
            $table->index('is_correct', 'idx_answers_is_correct');
        });

        // Indexes para user_answered_questions
        Schema::table('user_answered_questions', function (Blueprint $table) {
            $table->index(['user_id', 'quiz_id'], 'idx_answered_user_quiz');
            $table->index('answered_at', 'idx_answered_at');
        });

        // Indexes para quiz_questions
        Schema::table('quiz_questions', function (Blueprint $table) {
            $table->index('quiz_id', 'idx_questions_quiz_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('quiz_question_options', function (Blueprint $table) {
            $table->dropIndex('idx_options_question_id');
            $table->dropIndex('idx_options_order');
        });

        Schema::table('quiz_attempts', function (Blueprint $table) {
            $table->dropIndex('idx_attempts_user_quiz');
            $table->dropIndex('idx_attempts_status');
            $table->dropIndex('idx_attempts_completed_at');
        });

        Schema::table('quiz_attempt_answers', function (Blueprint $table) {
            $table->dropIndex('idx_answers_attempt_id');
            $table->dropIndex('idx_answers_is_correct');
        });

        Schema::table('user_answered_questions', function (Blueprint $table) {
            $table->dropIndex('idx_answered_user_quiz');
            $table->dropIndex('idx_answered_at');
        });

        Schema::table('quiz_questions', function (Blueprint $table) {
            $table->dropIndex('idx_questions_quiz_id');
        });
    }
};
