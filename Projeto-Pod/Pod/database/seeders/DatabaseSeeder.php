<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

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
    }
}
