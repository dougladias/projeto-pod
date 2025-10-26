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
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'school')) {
                $table->string('school')->nullable();
            }
            if (!Schema::hasColumn('users', 'birth_date')) {
                $table->date('birth_date')->nullable();
            }
            if (!Schema::hasColumn('users', 'cpf')) {
                $table->string('cpf', 14)->unique()->nullable();
            }
            if (!Schema::hasColumn('users', 'school_year')) {
                $table->enum('school_year', ['6', '7', '8', '9', '1', '2', '3'])->nullable();
            }
            if (!Schema::hasColumn('users', 'gender')) {
                $table->enum('gender', ['male', 'female', 'other'])->nullable();
            }
            if (!Schema::hasColumn('users', 'language')) {
                $table->string('language', 10)->default('pt-BR');
            }
            if (!Schema::hasColumn('users', 'phone')) {
                $table->string('phone', 15)->nullable();
            }
            if (!Schema::hasColumn('users', 'avatar')) {
                $table->string('avatar')->nullable();
            }
            if (!Schema::hasColumn('users', 'role')) {
                $table->enum('role', ['admin', 'aluno'])->default('aluno');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'school',
                'birth_date',
                'cpf',
                'school_year',
                'gender',
                'language',
                'phone',
                'avatar',
                'role'
            ]);
        });
    }
};
