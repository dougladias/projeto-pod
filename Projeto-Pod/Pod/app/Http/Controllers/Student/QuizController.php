<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\QuizAttemptAnswer;
use App\Models\QuizCorrectAnswer;
use App\Models\QuizQuestion;
use App\Models\UserAnsweredQuestion;
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

        // Busca todas as tentativas do usuário de uma vez (1 query)
        $userAttempts = QuizAttempt::where('user_id', $user->id)
            ->where('status', 'completed')
            ->select('quiz_id', 'score', 'completed_at')
            ->get()
            ->groupBy('quiz_id');

        // Busca quizzes com categoria (1 query)
        $quizzes = Quiz::with('category')
            ->select('id', 'title', 'description', 'category_id', 'time_limit', 'total_questions')
            ->get()
            ->map(function ($quiz) use ($userAttempts) {
                // Pega tentativas deste quiz (já em memória)
                $attempts = $userAttempts->get($quiz->id, collect());

                // Calcula estatísticas
                $bestScore = $attempts->max('score') ?? 0;
                $attemptsCount = $attempts->count();
                $lastAttempt = $attempts->sortByDesc('completed_at')->first();

                return [
                    'id' => $quiz->id,
                    'title' => $quiz->title,
                    'description' => $quiz->description,
                    'category' => $quiz->category->name,
                    'time_limit' => $quiz->time_limit,
                    'total_questions' => $quiz->total_questions,
                    'best_score' => round($bestScore, 2),
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

        // Busca estatísticas em uma única query otimizada
        $stats = QuizAttempt::where('user_id', $user->id)
            ->where('status', 'completed')
            ->selectRaw('
                COUNT(DISTINCT quiz_id) as completed_quizzes,
                COUNT(*) as total_attempts,
                AVG(score) as average_score,
                MAX(score) as best_score
            ')
            ->first();

        return Inertia::render('student/myQuiz/index', [
            'stats' => [
                'completed_quizzes' => $stats->completed_quizzes ?? 0,
                'total_quizzes' => Quiz::count(),
                'total_attempts' => $stats->total_attempts ?? 0,
                'average_score' => round($stats->average_score ?? 0, 2),
                'best_score' => round($stats->best_score ?? 0, 2),
            ],
        ]);
    }

    /**
     * Inicia um quiz - seleciona 20 perguntas não respondidas
     */
    public function start(Request $request, Quiz $quiz)
    {
        $user = $request->user();

        // Otimizado: Busca perguntas já respondidas em uma única query
        $answeredQuestionIds = UserAnsweredQuestion::where('user_id', $user->id)
            ->where('quiz_id', $quiz->id)
            ->pluck('question_id');

        // Conta perguntas disponíveis de forma eficiente
        $totalQuestions = QuizQuestion::where('quiz_id', $quiz->id)->count();
        $availableCount = $totalQuestions - $answeredQuestionIds->count();

        // Reseta o pool se necessário
        if ($availableCount < $quiz->total_questions) {
            UserAnsweredQuestion::where('user_id', $user->id)
                ->where('quiz_id', $quiz->id)
                ->delete();
            $answeredQuestionIds = collect([]);
        }

        // Otimizado: Seleciona perguntas aleatórias com options em uma query
        $questions = QuizQuestion::where('quiz_id', $quiz->id)
            ->when($answeredQuestionIds->isNotEmpty(), function ($query) use ($answeredQuestionIds) {
                $query->whereNotIn('id', $answeredQuestionIds);
            })
            ->with(['options' => function ($query) {
                $query->select('id', 'question_id', 'option_text', 'order')
                    ->orderBy('order');
            }])
            ->select('id', 'quiz_id', 'question_text')
            ->inRandomOrder()
            ->limit($quiz->total_questions)
            ->get()
            ->map(function ($question) {
                return [
                    'id' => $question->id,
                    'question_text' => $question->question_text,
                    'options' => $question->options->map(function ($option) {
                        return [
                            'id' => $option->id,
                            'option_text' => $option->option_text,
                            'order' => $option->order,
                        ];
                    })->values(),
                ];
            });

        // Cria uma nova tentativa
        $attempt = QuizAttempt::create([
            'user_id' => $user->id,
            'quiz_id' => $quiz->id,
            'status' => 'in_progress',
            'started_at' => now(),
        ]);

        return response()->json([
            'props' => [
                'quiz' => [
                    'id' => $quiz->id,
                    'title' => $quiz->title,
                    'description' => $quiz->description,
                    'time_limit' => $quiz->time_limit,
                    'total_questions' => $quiz->total_questions,
                ],
                'attempt_id' => $attempt->id,
                'questions' => $questions,
            ],
        ]);
    }

    /**
     * Valida uma resposta e retorna feedback imediato
     */
    public function answer(Request $request, QuizAttempt $attempt)
    {
        $request->validate([
            'question_id' => 'required|exists:quiz_questions,id',
            'selected_option_id' => 'required|exists:quiz_question_options,id',
        ]);

        $user = $request->user();

        // Verifica se a tentativa pertence ao usuário
        if ($attempt->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Verifica se a tentativa está ativa
        if ($attempt->status !== 'in_progress') {
            return response()->json(['error' => 'Quiz already completed'], 400);
        }

        // Verifica se já respondeu essa pergunta nesta tentativa
        $alreadyAnswered = QuizAttemptAnswer::where('attempt_id', $attempt->id)
            ->where('question_id', $request->question_id)
            ->exists();

        if ($alreadyAnswered) {
            return response()->json(['error' => 'Question already answered'], 400);
        }

        // Busca a resposta correta
        $correctAnswer = QuizCorrectAnswer::where('question_id', $request->question_id)->first();

        $isCorrect = $correctAnswer->correct_option_id == $request->selected_option_id;

        // Salva a resposta
        QuizAttemptAnswer::create([
            'attempt_id' => $attempt->id,
            'question_id' => $request->question_id,
            'selected_option_id' => $request->selected_option_id,
            'is_correct' => $isCorrect,
            'answered_at' => now(),
        ]);

        // Marca a pergunta como respondida
        UserAnsweredQuestion::create([
            'user_id' => $user->id,
            'quiz_id' => $attempt->quiz_id,
            'question_id' => $request->question_id,
            'answered_at' => now(),
        ]);

        // Retorna feedback
        return response()->json([
            'is_correct' => $isCorrect,
            'correct_option_id' => $correctAnswer->correct_option_id,
            'explanation' => $correctAnswer->explanation,
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
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Verifica se a tentativa está ativa
        if ($attempt->status !== 'in_progress') {
            return response()->json(['error' => 'Quiz already completed'], 400);
        }

        // Calcula o score
        $totalQuestions = QuizAttemptAnswer::where('attempt_id', $attempt->id)->count();
        $correctAnswers = QuizAttemptAnswer::where('attempt_id', $attempt->id)
            ->where('is_correct', true)
            ->count();

        $score = $totalQuestions > 0 ? ($correctAnswers / $totalQuestions) * 100 : 0;

        // Calcula tempo gasto
        $timeTaken = now()->diffInSeconds($attempt->started_at);

        // Atualiza a tentativa
        $attempt->update([
            'status' => 'completed',
            'completed_at' => now(),
            'score' => $score,
            'time_taken' => $timeTaken,
        ]);

        return response()->json([
            'score' => round($score, 2),
            'correct_answers' => $correctAnswers,
            'total_questions' => $totalQuestions,
            'time_taken' => $timeTaken,
        ]);
    }
}
