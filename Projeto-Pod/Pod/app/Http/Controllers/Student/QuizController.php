<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Pergunta;
use App\Models\Quiz;
use App\Models\QuizAnswer;
use App\Models\QuizAttempt;
use App\Models\Resposta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class QuizController extends Controller
{
    /**
     * Lista todos os quizzes disponíveis para jogar
     */
    public function index(Request $request)
    {
        $user = $request->user();

        // Busca todas as tentativas do usuário
        $userAttempts = QuizAttempt::where('user_id', $user->id)
            ->whereNotNull('completed_at')
            ->select('quiz_id', 'score', 'accuracy', 'completed_at')
            ->get()
            ->groupBy('quiz_id');

        // Busca quizzes ativos
        $quizzes = Quiz::active()
            ->ordered()
            ->select('id', 'title', 'description', 'theme', 'difficulty', 'points_reward', 'time_limit_minutes')
            ->get()
            ->map(function ($quiz) use ($userAttempts) {
                $attempts = $userAttempts->get($quiz->id, collect());

                $bestScore = $attempts->max('score') ?? 0;
                $bestAccuracy = $attempts->max('accuracy') ?? 0;
                $attemptsCount = $attempts->count();
                $lastAttempt = $attempts->sortByDesc('completed_at')->first();

                return [
                    'id' => $quiz->id,
                    'title' => $quiz->title,
                    'description' => $quiz->description,
                    'theme' => $quiz->theme,
                    'difficulty' => $quiz->difficulty,
                    'points_reward' => $quiz->points_reward,
                    'time_limit_minutes' => $quiz->time_limit_minutes,
                    'total_questions' => $quiz->total_questions,
                    'best_score' => $bestScore,
                    'best_accuracy' => round($bestAccuracy, 2),
                    'attempts_count' => $attemptsCount,
                    'is_completed' => $attemptsCount > 0,
                    'last_attempt' => $lastAttempt ? $lastAttempt->completed_at->diffForHumans() : null,
                ];
            });

        return Inertia::render('student/playQuiz/index', [
            'quizzes' => $quizzes,
        ]);
    }

    /**
     * Página "Meus Quizzes" - mostra histórico do usuário
     */
    public function meusQuizzes(Request $request)
    {
        $user = $request->user();

        // Busca estatísticas do usuário
        $stats = QuizAttempt::where('user_id', $user->id)
            ->whereNotNull('completed_at')
            ->selectRaw('
                COUNT(DISTINCT quiz_id) as completed_quizzes,
                COUNT(*) as total_attempts,
                SUM(score) as total_score,
                AVG(accuracy) as average_accuracy,
                MAX(score) as best_score
            ')
            ->first();

        // Busca tentativas recentes com detalhes do quiz
        $recentAttempts = QuizAttempt::with('quiz:id,title,theme,difficulty')
            ->where('user_id', $user->id)
            ->whereNotNull('completed_at')
            ->select('id', 'quiz_id', 'score', 'correct_answers', 'total_questions', 'accuracy', 'time_spent_seconds', 'completed_at')
            ->orderBy('completed_at', 'desc')
            ->limit(10)
            ->get()
            ->map(function ($attempt) {
                return [
                    'id' => $attempt->id,
                    'quiz_title' => $attempt->quiz->title,
                    'quiz_theme' => $attempt->quiz->theme,
                    'quiz_difficulty' => $attempt->quiz->difficulty,
                    'score' => $attempt->score,
                    'accuracy' => round($attempt->accuracy, 2),
                    'correct_answers' => $attempt->correct_answers,
                    'total_questions' => $attempt->total_questions,
                    'time_spent' => $attempt->time_spent_minutes,
                    'completed_at' => $attempt->completed_at->diffForHumans(),
                    'passed' => $attempt->isPassed(),
                ];
            });

        return Inertia::render('student/myQuiz/index', [
            'stats' => [
                'completed_quizzes' => $stats->completed_quizzes ?? 0,
                'total_quizzes' => Quiz::active()->count(),
                'total_attempts' => $stats->total_attempts ?? 0,
                'total_score' => $stats->total_score ?? 0,
                'average_accuracy' => round($stats->average_accuracy ?? 0, 2),
                'best_score' => $stats->best_score ?? 0,
            ],
            'recent_attempts' => $recentAttempts,
        ]);
    }

    /**
     * Inicia um quiz - carrega as perguntas
     */
    public function start(Request $request, Quiz $quiz)
    {
        $user = $request->user();

        // Verifica se o quiz está ativo
        if (!$quiz->is_active) {
            return back()->with('error', 'Quiz não está disponível');
        }

        // Busca as perguntas do quiz com suas respostas
        $perguntas = $quiz->perguntas()
            ->with(['respostas' => function ($query) {
                $query->select('id_resposta', 'id_pergunta', 'texto_resposta')
                      ->inRandomOrder(); // Embaralha as opções
            }])
            ->get()
            ->map(function ($pergunta) {
                return [
                    'id' => $pergunta->id_pergunta,
                    'texto_pergunta' => $pergunta->texto_pergunta,
                    'categoria' => $pergunta->categoria,
                    'points' => $pergunta->pivot->points,
                    'respostas' => $pergunta->respostas->map(function ($resposta) {
                        return [
                            'id' => $resposta->id_resposta,
                            'texto_resposta' => $resposta->texto_resposta,
                        ];
                    })->values(),
                ];
            });

        // Cria uma nova tentativa
        $attempt = QuizAttempt::create([
            'user_id' => $user->id,
            'quiz_id' => $quiz->id,
            'total_questions' => $perguntas->count(),
            'correct_answers' => 0,
            'score' => 0,
            'accuracy' => 0,
            'time_spent_seconds' => 0,
        ]);

        return Inertia::render('student/quiz/index', [
            'attempt_id' => $attempt->id,
            'quiz' => [
                'id' => $quiz->id,
                'title' => $quiz->title,
                'description' => $quiz->description,
                'theme' => $quiz->theme,
                'difficulty' => $quiz->difficulty,
                'time_limit_minutes' => $quiz->time_limit_minutes,
                'points_reward' => $quiz->points_reward,
                'total_questions' => $perguntas->count(),
            ],
            'questions' => $perguntas,
        ]);
    }

    /**
     * Valida uma resposta e salva
     */
    public function answer(Request $request, QuizAttempt $attempt)
    {
        $request->validate([
            'pergunta_id' => 'required|exists:perguntas,id_pergunta',
            'resposta_id' => 'required|exists:respostas,id_resposta',
        ]);

        $user = $request->user();

        // Verifica se a tentativa pertence ao usuário
        if ($attempt->user_id !== $user->id) {
            return response()->json(['error' => 'Não autorizado'], 403);
        }

        // Verifica se já completou o quiz
        if ($attempt->isCompleted()) {
            return response()->json(['error' => 'Quiz já finalizado'], 400);
        }

        // Verifica se já respondeu essa pergunta
        $alreadyAnswered = QuizAnswer::where('quiz_attempt_id', $attempt->id)
            ->where('pergunta_id', $request->pergunta_id)
            ->exists();

        if ($alreadyAnswered) {
            return response()->json(['error' => 'Pergunta já respondida'], 400);
        }

        // Busca a resposta correta
        $respostaCorreta = Resposta::where('id_pergunta', $request->pergunta_id)
            ->where('correta', true)
            ->first();

        $isCorrect = $respostaCorreta->id_resposta == $request->resposta_id;

        // Salva a resposta
        QuizAnswer::create([
            'quiz_attempt_id' => $attempt->id,
            'pergunta_id' => $request->pergunta_id,
            'resposta_id' => $request->resposta_id,
            'is_correct' => $isCorrect,
        ]);

        return response()->json([
            'is_correct' => $isCorrect,
            'correct_resposta_id' => $respostaCorreta->id_resposta,
        ]);
    }

    /**
     * Finaliza o quiz e calcula o score
     */
    public function finish(Request $request, QuizAttempt $attempt)
    {
        $user = $request->user();

        // Verifica se a tentativa pertence ao usuário
        if ($attempt->user_id !== $user->id) {
            return back()->with('error', 'Não autorizado');
        }

        // Verifica se já foi finalizado
        if ($attempt->isCompleted()) {
            return back()->with('error', 'Quiz já finalizado');
        }

        // Calcula estatísticas
        $totalQuestions = QuizAnswer::where('quiz_attempt_id', $attempt->id)->count();
        $correctAnswers = QuizAnswer::where('quiz_attempt_id', $attempt->id)
            ->where('is_correct', true)
            ->count();

        $accuracy = $totalQuestions > 0 ? ($correctAnswers / $totalQuestions) * 100 : 0;

        // Calcula pontuação baseada na acurácia
        $quiz = $attempt->quiz;
        $score = round(($accuracy / 100) * $quiz->points_reward);

        // Calcula tempo gasto
        $timeSpent = now()->diffInSeconds($attempt->created_at);

        // Atualiza a tentativa
        $attempt->update([
            'correct_answers' => $correctAnswers,
            'total_questions' => $totalQuestions,
            'accuracy' => $accuracy,
            'score' => $score,
            'time_spent_seconds' => $timeSpent,
            'completed_at' => now(),
        ]);

        // Retorna sucesso sem redirecionar
        return response()->json([
            'success' => true,
            'message' => 'Quiz finalizado com sucesso!',
            'score' => $score,
            'accuracy' => $accuracy,
            'correct_answers' => $correctAnswers,
            'total_questions' => $totalQuestions,
        ]);
    }
}
