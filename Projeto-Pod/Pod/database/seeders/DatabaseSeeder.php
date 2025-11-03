<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    // Users Seeder
    public function run(): void
    {
        // User Admin
        User::firstOrCreate(
            ['email' => 'admin@dev.com'],
            [
                'name' => 'Administrador do Sistema',
                'password' => 'admin123',
                'school' => 'Sistema',
                'birth_date' => '1990-01-01',
                'cpf' => '123.456.789-00',
                'school_year' => null,
                'gender' => 'other',
                'language' => 'pt-BR',
                'phone' => '(11) 98765-4321',
                'avatar' => null,
                'role' => 'admin',
            ]
        );

        // User Student
        User::firstOrCreate(
            ['email' => 'student@dev.com'],
            [
                'name' => 'Estudante de Teste',
                'password' => 'student123',
                'school' => 'Escola Modelo',
                'birth_date' => '2005-06-15',
                'cpf' => '987.654.321-00',
                'school_year' => '9',
                'gender' => 'male',
                'language' => 'pt-BR',
                'phone' => '(11) 91234-5678',
                'avatar' => null,
                'role' => 'aluno',
            ]
        );

        // Chamar PerguntaSeeder
        $this->call([
            PerguntaSeeder::class,
        ]);
    }
}
