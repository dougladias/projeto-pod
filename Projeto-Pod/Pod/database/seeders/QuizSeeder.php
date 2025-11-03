<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Criar quizzes temáticos usando as perguntas do banco
        $quizzes = [
            [
                'title' => 'Quiz Missão - Caça Vape: Básico',
                'description' => 'Teste seus conhecimentos básicos sobre os malefícios do vape. Quiz ideal para iniciantes!',
                'theme' => 'Introdução aos malefícios do vape',
                'difficulty' => 'facil',
                'points_reward' => 100,
                'time_limit_minutes' => 15,
                'is_active' => true,
                'order' => 1,
            ],
            [
                'title' => 'Composição e Substâncias Químicas',
                'description' => 'Descubra o que realmente há dentro dos vapes e cigarros eletrônicos.',
                'theme' => 'Química e composição',
                'difficulty' => 'medio',
                'points_reward' => 150,
                'time_limit_minutes' => 20,
                'is_active' => true,
                'order' => 2,
            ],
            [
                'title' => 'Dependência e Nicotina',
                'description' => 'Entenda como a nicotina causa dependência e afeta seu corpo.',
                'theme' => 'Vícios e dependência',
                'difficulty' => 'medio',
                'points_reward' => 150,
                'time_limit_minutes' => 20,
                'is_active' => true,
                'order' => 3,
            ],
            [
                'title' => 'Efeitos Respiratórios e Pulmonares',
                'description' => 'Aprenda sobre os danos que o vape causa ao sistema respiratório.',
                'theme' => 'Saúde respiratória',
                'difficulty' => 'medio',
                'points_reward' => 150,
                'time_limit_minutes' => 20,
                'is_active' => true,
                'order' => 4,
            ],
            [
                'title' => 'Efeitos Cardiovasculares e Sistêmicos',
                'description' => 'Descubra como o vape afeta seu coração e sistema circulatório.',
                'theme' => 'Saúde cardiovascular',
                'difficulty' => 'dificil',
                'points_reward' => 200,
                'time_limit_minutes' => 25,
                'is_active' => true,
                'order' => 5,
            ],
            [
                'title' => 'Riscos para Grupos Vulneráveis',
                'description' => 'Conheça os perigos especiais do vape para adolescentes, gestantes e crianças.',
                'theme' => 'Grupos de risco',
                'difficulty' => 'dificil',
                'points_reward' => 200,
                'time_limit_minutes' => 25,
                'is_active' => true,
                'order' => 6,
            ],
            [
                'title' => 'Aspectos Legais, Sociais e Prevenção',
                'description' => 'Entenda as leis, regulamentações e formas de prevenção do uso de vapes.',
                'theme' => 'Legislação e sociedade',
                'difficulty' => 'dificil',
                'points_reward' => 200,
                'time_limit_minutes' => 25,
                'is_active' => true,
                'order' => 7,
            ],
            [
                'title' => 'Desafio Completo - Caça Vape',
                'description' => 'Quiz completo com perguntas de todas as categorias. Teste todos os seus conhecimentos!',
                'theme' => 'Quiz completo',
                'difficulty' => 'dificil',
                'points_reward' => 300,
                'time_limit_minutes' => 30,
                'is_active' => true,
                'order' => 8,
            ],
        ];

        foreach ($quizzes as $quizData) {
            $quizId = DB::table('quizzes')->insertGetId([
                'title' => $quizData['title'],
                'description' => $quizData['description'],
                'theme' => $quizData['theme'],
                'difficulty' => $quizData['difficulty'],
                'points_reward' => $quizData['points_reward'],
                'time_limit_minutes' => $quizData['time_limit_minutes'],
                'is_active' => $quizData['is_active'],
                'order' => $quizData['order'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Associar perguntas ao quiz baseado no tipo
            $this->associarPerguntas($quizId, $quizData['order']);
        }
    }

    /**
     * Associa perguntas específicas a cada quiz.
     */
    private function associarPerguntas(int $quizId, int $quizOrder): void
    {
        $perguntasData = [];

        switch ($quizOrder) {
            case 1: // Quiz Básico - Mix de todas categorias (perguntas mais fáceis)
                $perguntas = DB::table('perguntas')
                    ->whereIn('id_pergunta', [1, 2, 3, 11, 21, 31, 41, 51, 61, 71, 81, 91])
                    ->get();
                break;

            case 2: // Composição e Substâncias Químicas
                $perguntas = DB::table('perguntas')
                    ->where('categoria', 'Composição e Substâncias Químicas')
                    ->limit(15)
                    ->get();
                break;

            case 3: // Dependência e Nicotina
                $perguntas = DB::table('perguntas')
                    ->where('categoria', 'Dependência e Nicotina')
                    ->limit(17)
                    ->get();
                break;

            case 4: // Efeitos Respiratórios e Pulmonares
                $perguntas = DB::table('perguntas')
                    ->where('categoria', 'Efeitos Respiratórios e Pulmonares')
                    ->limit(17)
                    ->get();
                break;

            case 5: // Efeitos Cardiovasculares e Sistêmicos
                $perguntas = DB::table('perguntas')
                    ->where('categoria', 'Efeitos Cardiovasculares e Sistêmicos')
                    ->limit(13)
                    ->get();
                break;

            case 6: // Riscos para Grupos Vulneráveis
                $perguntas = DB::table('perguntas')
                    ->where('categoria', 'Riscos para Grupos Vulneráveis')
                    ->limit(17)
                    ->get();
                break;

            case 7: // Aspectos Legais, Sociais e Prevenção
                $perguntas = DB::table('perguntas')
                    ->where('categoria', 'Aspectos Legais, Sociais e Prevenção')
                    ->limit(21)
                    ->get();
                break;

            case 8: // Desafio Completo - 20 perguntas aleatórias de todas categorias
                $perguntas = DB::table('perguntas')
                    ->inRandomOrder()
                    ->limit(20)
                    ->get();
                break;

            default:
                $perguntas = collect();
        }

        // Calcular pontos por pergunta baseado na dificuldade
        $pointsPerQuestion = match ($quizOrder) {
            1 => 10,  // Básico
            2, 3, 4 => 12,  // Médio
            5, 6, 7 => 15,  // Difícil
            8 => 20,  // Desafio completo
            default => 10,
        };

        // Inserir perguntas na tabela pivot
        $order = 1;
        foreach ($perguntas as $pergunta) {
            DB::table('quiz_perguntas')->insert([
                'quiz_id' => $quizId,
                'pergunta_id' => $pergunta->id_pergunta,
                'order' => $order++,
                'points' => $pointsPerQuestion,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
