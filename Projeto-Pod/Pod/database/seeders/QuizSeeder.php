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
        // Criar quizzes organizados por níveis (do menor para o maior número de perguntas)
        $quizzes = [
            // NÍVEL 1 - Efeitos Cardiovasculares e Sistêmicos (13 perguntas - 13%)
            [
                'title' => 'Nível 1 - Efeitos Cardiovasculares e Sistêmicos',
                'description' => 'Descubra como o vape afeta seu coração e sistema circulatório. Nível inicial com 13 perguntas.',
                'theme' => 'Saúde cardiovascular',
                'difficulty' => 'facil',
                'points_reward' => 130,
                'time_limit_minutes' => 15,
                'is_active' => true,
                'order' => 1,
                'categoria' => 'Efeitos Cardiovasculares e Sistêmicos',
            ],
            // NÍVEL 2 - Composição e Substâncias Químicas (15 perguntas - 15%)
            [
                'title' => 'Nível 2 - Composição e Substâncias Químicas',
                'description' => 'Descubra o que realmente há dentro dos vapes e cigarros eletrônicos. 15 perguntas sobre química.',
                'theme' => 'Química e composição',
                'difficulty' => 'facil',
                'points_reward' => 150,
                'time_limit_minutes' => 18,
                'is_active' => true,
                'order' => 2,
                'categoria' => 'Composição e Substâncias Químicas',
            ],
            // NÍVEL 3 - Dependência e Nicotina (17 perguntas - 17%)
            [
                'title' => 'Nível 3 - Dependência e Nicotina',
                'description' => 'Entenda como a nicotina causa dependência e afeta seu corpo. 17 perguntas sobre vícios.',
                'theme' => 'Vícios e dependência',
                'difficulty' => 'medio',
                'points_reward' => 170,
                'time_limit_minutes' => 20,
                'is_active' => true,
                'order' => 3,
                'categoria' => 'Dependência e Nicotina',
            ],
            // NÍVEL 4 - Efeitos Respiratórios e Pulmonares (17 perguntas - 17%)
            [
                'title' => 'Nível 4 - Efeitos Respiratórios e Pulmonares',
                'description' => 'Aprenda sobre os danos que o vape causa ao sistema respiratório. 17 perguntas sobre saúde pulmonar.',
                'theme' => 'Saúde respiratória',
                'difficulty' => 'medio',
                'points_reward' => 170,
                'time_limit_minutes' => 20,
                'is_active' => true,
                'order' => 4,
                'categoria' => 'Efeitos Respiratórios e Pulmonares',
            ],
            // NÍVEL 5 - Riscos para Grupos Vulneráveis (17 perguntas - 17%)
            [
                'title' => 'Nível 5 - Riscos para Grupos Vulneráveis',
                'description' => 'Conheça os perigos especiais do vape para adolescentes, gestantes e crianças. 17 perguntas sobre grupos de risco.',
                'theme' => 'Grupos de risco',
                'difficulty' => 'dificil',
                'points_reward' => 170,
                'time_limit_minutes' => 22,
                'is_active' => true,
                'order' => 5,
                'categoria' => 'Riscos para Grupos Vulneráveis',
            ],
            // NÍVEL 6 - Aspectos Legais, Sociais e Prevenção (21 perguntas - 21%)
            [
                'title' => 'Nível 6 - Aspectos Legais, Sociais e Prevenção',
                'description' => 'Entenda as leis, regulamentações e formas de prevenção do uso de vapes. Nível final com 21 perguntas!',
                'theme' => 'Legislação e sociedade',
                'difficulty' => 'dificil',
                'points_reward' => 210,
                'time_limit_minutes' => 25,
                'is_active' => true,
                'order' => 6,
                'categoria' => 'Aspectos Legais, Sociais e Prevenção',
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
     * Associa perguntas específicas a cada quiz baseado no nível.
     */
    private function associarPerguntas(int $quizId, int $quizOrder): void
    {
        // Mapear níveis para categorias e quantidade de perguntas
        $nivelConfig = match ($quizOrder) {
            1 => ['categoria' => 'Efeitos Cardiovasculares e Sistêmicos', 'total' => 13, 'pontos' => 10],
            2 => ['categoria' => 'Composição e Substâncias Químicas', 'total' => 15, 'pontos' => 10],
            3 => ['categoria' => 'Dependência e Nicotina', 'total' => 17, 'pontos' => 10],
            4 => ['categoria' => 'Efeitos Respiratórios e Pulmonares', 'total' => 17, 'pontos' => 10],
            5 => ['categoria' => 'Riscos para Grupos Vulneráveis', 'total' => 17, 'pontos' => 10],
            6 => ['categoria' => 'Aspectos Legais, Sociais e Prevenção', 'total' => 21, 'pontos' => 10],
            default => ['categoria' => '', 'total' => 0, 'pontos' => 10],
        };

        // Buscar todas as perguntas da categoria do nível
        $perguntas = DB::table('perguntas')
            ->where('categoria', $nivelConfig['categoria'])
            ->limit($nivelConfig['total'])
            ->get();

        // Inserir perguntas na tabela pivot
        $order = 1;
        foreach ($perguntas as $pergunta) {
            DB::table('quiz_perguntas')->insert([
                'quiz_id' => $quizId,
                'pergunta_id' => $pergunta->id_pergunta,
                'order' => $order++,
                'points' => $nivelConfig['pontos'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
