<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AchievementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $achievements = [
            // Conquistas por quantidade de quizzes completados
            [
                'name' => 'Primeiro Passo',
                'description' => 'Complete seu primeiro quiz',
                'icon' => '🎯',
                'type' => 'quiz_count',
                'requirement_value' => 1,
                'points_reward' => 50,
                'is_active' => true,
            ],
            [
                'name' => 'Estudante Dedicado',
                'description' => 'Complete 5 quizzes',
                'icon' => '📚',
                'type' => 'quiz_count',
                'requirement_value' => 5,
                'points_reward' => 100,
                'is_active' => true,
            ],
            [
                'name' => 'Expert em Treinamento',
                'description' => 'Complete 10 quizzes',
                'icon' => '🎓',
                'type' => 'quiz_count',
                'requirement_value' => 10,
                'points_reward' => 200,
                'is_active' => true,
            ],
            [
                'name' => 'Mestre do Conhecimento',
                'description' => 'Complete 20 quizzes',
                'icon' => '👑',
                'type' => 'quiz_count',
                'requirement_value' => 20,
                'points_reward' => 500,
                'is_active' => true,
            ],

            // Conquistas por sequência (streak)
            [
                'name' => 'Comprometido',
                'description' => 'Jogue por 3 dias seguidos',
                'icon' => '🔥',
                'type' => 'streak',
                'requirement_value' => 3,
                'points_reward' => 100,
                'is_active' => true,
            ],
            [
                'name' => 'Persistente',
                'description' => 'Jogue por 7 dias seguidos',
                'icon' => '⚡',
                'type' => 'streak',
                'requirement_value' => 7,
                'points_reward' => 250,
                'is_active' => true,
            ],
            [
                'name' => 'Imparável',
                'description' => 'Jogue por 15 dias seguidos',
                'icon' => '🌟',
                'type' => 'streak',
                'requirement_value' => 15,
                'points_reward' => 500,
                'is_active' => true,
            ],
            [
                'name' => 'Lenda',
                'description' => 'Jogue por 30 dias seguidos',
                'icon' => '💎',
                'type' => 'streak',
                'requirement_value' => 30,
                'points_reward' => 1000,
                'is_active' => true,
            ],

            // Conquistas por precisão (accuracy)
            [
                'name' => 'Bom Começo',
                'description' => 'Alcance 70% de precisão média',
                'icon' => '✅',
                'type' => 'accuracy',
                'requirement_value' => 70,
                'points_reward' => 100,
                'is_active' => true,
            ],
            [
                'name' => 'Quase Perfeito',
                'description' => 'Alcance 80% de precisão média',
                'icon' => '🎯',
                'type' => 'accuracy',
                'requirement_value' => 80,
                'points_reward' => 200,
                'is_active' => true,
            ],
            [
                'name' => 'Excelência',
                'description' => 'Alcance 90% de precisão média',
                'icon' => '⭐',
                'type' => 'accuracy',
                'requirement_value' => 90,
                'points_reward' => 400,
                'is_active' => true,
            ],
            [
                'name' => 'Perfeccionista',
                'description' => 'Alcance 95% de precisão média',
                'icon' => '💯',
                'type' => 'accuracy',
                'requirement_value' => 95,
                'points_reward' => 800,
                'is_active' => true,
            ],

            // Conquistas por pontos totais
            [
                'name' => 'Iniciante',
                'description' => 'Acumule 500 pontos',
                'icon' => '🌱',
                'type' => 'points',
                'requirement_value' => 500,
                'points_reward' => 50,
                'is_active' => true,
            ],
            [
                'name' => 'Competente',
                'description' => 'Acumule 1.000 pontos',
                'icon' => '🏅',
                'type' => 'points',
                'requirement_value' => 1000,
                'points_reward' => 100,
                'is_active' => true,
            ],
            [
                'name' => 'Profissional',
                'description' => 'Acumule 2.500 pontos',
                'icon' => '🥈',
                'type' => 'points',
                'requirement_value' => 2500,
                'points_reward' => 250,
                'is_active' => true,
            ],
            [
                'name' => 'Expert',
                'description' => 'Acumule 5.000 pontos',
                'icon' => '🥇',
                'type' => 'points',
                'requirement_value' => 5000,
                'points_reward' => 500,
                'is_active' => true,
            ],
            [
                'name' => 'Campeão',
                'description' => 'Acumule 10.000 pontos',
                'icon' => '🏆',
                'type' => 'points',
                'requirement_value' => 10000,
                'points_reward' => 1000,
                'is_active' => true,
            ],

            // Conquistas especiais
            [
                'name' => 'Caçador de Vape',
                'description' => 'Complete todos os quizzes disponíveis',
                'icon' => '🎖️',
                'type' => 'quiz_count',
                'requirement_value' => 8,
                'points_reward' => 1000,
                'is_active' => true,
            ],
            [
                'name' => 'Sem Erros',
                'description' => 'Complete um quiz com 100% de acerto',
                'icon' => '🌟',
                'type' => 'accuracy',
                'requirement_value' => 100,
                'points_reward' => 300,
                'is_active' => true,
            ],
            [
                'name' => 'Guardião da Saúde',
                'description' => 'Demonstre conhecimento excepcional sobre os malefícios do vape',
                'icon' => '🛡️',
                'type' => 'points',
                'requirement_value' => 15000,
                'points_reward' => 2000,
                'is_active' => true,
            ],
        ];

        foreach ($achievements as $achievement) {
            DB::table('achievements')->insert([
                'name' => $achievement['name'],
                'description' => $achievement['description'],
                'icon' => $achievement['icon'],
                'type' => $achievement['type'],
                'requirement_value' => $achievement['requirement_value'],
                'points_reward' => $achievement['points_reward'],
                'is_active' => $achievement['is_active'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
