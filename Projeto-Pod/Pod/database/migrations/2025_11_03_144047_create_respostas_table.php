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
        Schema::create('respostas', function (Blueprint $table) {
            $table->integer('id_resposta')->primary()->autoIncrement();
            $table->integer('id_pergunta');
            $table->string('texto_resposta', 500);
            $table->boolean('correta')->default(false);
            $table->timestamps();

            $table->foreign('id_pergunta')->references('id_pergunta')->on('perguntas')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('respostas');
    }
};
