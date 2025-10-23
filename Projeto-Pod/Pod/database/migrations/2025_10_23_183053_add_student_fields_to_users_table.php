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
            $table->string('school')->after('name');
            $table->date('birth_date')->after('school');
            $table->string('cpf', 14)->unique()->after('birth_date');
            $table->string('school_year')->after('cpf');
            $table->enum('gender', ['male', 'female'])->after('school_year');
            $table->string('language', 10)->default('pt-BR')->after('gender');
            $table->string('phone', 15)->after('email');
            $table->string('avatar')->nullable()->after('phone');
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
            ]);
        });
    }
};
