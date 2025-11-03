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
        Schema::create('quiz_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('quiz_attempt_id')->constrained('quiz_attempts')->onDelete('cascade');
            $table->integer('pergunta_id');
            $table->integer('resposta_id')->nullable();
            $table->boolean('is_correct')->default(false);
            $table->timestamps();

            $table->foreign('pergunta_id')->references('id_pergunta')->on('perguntas')->onDelete('cascade');
            $table->foreign('resposta_id')->references('id_resposta')->on('respostas')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quiz_answers');
    }
};
