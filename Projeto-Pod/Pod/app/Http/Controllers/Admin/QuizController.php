<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Pergunta;
use App\Models\Quiz;
use App\Services\Quiz\QuizService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class QuizController extends Controller
{
    protected QuizService $quizService;

    public function __construct(QuizService $quizService)
    {
        $this->quizService = $quizService;
    }

    /**
     * Display a listing of quizzes.
     */
    public function index(Request $request): Response
    {
        $search = $request->query('search');
        $difficulty = $request->query('difficulty');
        $theme = $request->query('theme');

        $quizzes = Quiz::query()
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                      ->orWhere('description', 'like', "%{$search}%")
                      ->orWhere('theme', 'like', "%{$search}%");
                });
            })
            ->when($difficulty, function ($query, $difficulty) {
                $query->where('difficulty', $difficulty);
            })
            ->when($theme, function ($query, $theme) {
                $query->where('theme', $theme);
            })
            ->withCount('attempts')
            ->orderBy('order')
            ->paginate(20)
            ->through(function ($quiz) {
                $stats = $this->quizService->getQuizStats($quiz);

                return [
                    'id' => $quiz->id,
                    'title' => $quiz->title,
                    'description' => $quiz->description,
                    'theme' => $quiz->theme,
                    'difficulty' => $quiz->difficulty,
                    'points_reward' => $quiz->points_reward,
                    'time_limit_minutes' => $quiz->time_limit_minutes,
                    'is_active' => $quiz->is_active,
                    'order' => $quiz->order,
                    'total_perguntas' => $quiz->total_questions,
                    'total_attempts' => $stats['total_attempts'],
                    'average_score' => $stats['average_score'],
                    'completion_rate' => $stats['completion_rate'],
                    'created_at' => $quiz->created_at->format('d/m/Y'),
                ];
            });

        // Get filter options
        $themes = Quiz::distinct()->pluck('theme')->filter();

        return Inertia::render('admin/quizzes/index', [
            'quizzes' => $quizzes,
            'filters' => [
                'search' => $search,
                'difficulty' => $difficulty,
                'theme' => $theme,
            ],
            'themes' => $themes,
        ]);
    }

    /**
     * Show the form for creating a new quiz.
     */
    public function create(): Response
    {
        $perguntas = Pergunta::orderBy('categoria')
            ->orderBy('id_pergunta')
            ->get()
            ->map(function ($pergunta) {
                return [
                    'id' => $pergunta->id_pergunta,
                    'texto_pergunta' => $pergunta->texto_pergunta,
                    'categoria' => $pergunta->categoria,
                ];
            });

        return Inertia::render('admin/quizzes/create', [
            'perguntas' => $perguntas,
        ]);
    }

    /**
     * Store a newly created quiz.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'theme' => 'required|string|max:255',
            'difficulty' => 'required|in:facil,medio,dificil',
            'points_reward' => 'required|integer|min:0',
            'time_limit_minutes' => 'required|integer|min:1',
            'is_active' => 'boolean',
            'order' => 'required|integer|min:1',
            'perguntas' => 'required|array|min:1',
            'perguntas.*.id' => 'required|exists:perguntas,id_pergunta',
            'perguntas.*.points' => 'required|integer|min:1',
            'perguntas.*.order' => 'required|integer|min:1',
        ]);

        DB::transaction(function () use ($validated) {
            // Create quiz
            $quiz = Quiz::create([
                'title' => $validated['title'],
                'description' => $validated['description'],
                'theme' => $validated['theme'],
                'difficulty' => $validated['difficulty'],
                'points_reward' => $validated['points_reward'],
                'time_limit_minutes' => $validated['time_limit_minutes'],
                'is_active' => $validated['is_active'] ?? true,
                'order' => $validated['order'],
            ]);

            // Attach perguntas
            foreach ($validated['perguntas'] as $pergunta) {
                $quiz->perguntas()->attach($pergunta['id'], [
                    'order' => $pergunta['order'],
                    'points' => $pergunta['points'],
                ]);
            }
        });

        return redirect()->route('admin.quizzes.index')
            ->with('success', 'Quiz criado com sucesso!');
    }

    /**
     * Display the specified quiz.
     */
    public function show(Quiz $quiz): Response
    {
        $stats = $this->quizService->getQuizStats($quiz);

        $perguntas = $quiz->perguntas()
            ->with('respostas')
            ->get()
            ->map(function ($pergunta) {
                return [
                    'id' => $pergunta->id_pergunta,
                    'texto_pergunta' => $pergunta->texto_pergunta,
                    'categoria' => $pergunta->categoria,
                    'order' => $pergunta->pivot->order,
                    'points' => $pergunta->pivot->points,
                    'respostas' => $pergunta->respostas->map(function ($resposta) {
                        return [
                            'id' => $resposta->id_resposta,
                            'texto_resposta' => $resposta->texto_resposta,
                            'correta' => $resposta->correta,
                        ];
                    }),
                ];
            });

        return Inertia::render('admin/quizzes/show', [
            'quiz' => [
                'id' => $quiz->id,
                'title' => $quiz->title,
                'description' => $quiz->description,
                'theme' => $quiz->theme,
                'difficulty' => $quiz->difficulty,
                'points_reward' => $quiz->points_reward,
                'time_limit_minutes' => $quiz->time_limit_minutes,
                'is_active' => $quiz->is_active,
                'order' => $quiz->order,
                'created_at' => $quiz->created_at->format('d/m/Y H:i'),
            ],
            'perguntas' => $perguntas,
            'stats' => $stats,
        ]);
    }

    /**
     * Show the form for editing the specified quiz.
     */
    public function edit(Quiz $quiz): Response
    {
        $allPerguntas = Pergunta::orderBy('categoria')
            ->orderBy('id_pergunta')
            ->get()
            ->map(function ($pergunta) {
                return [
                    'id' => $pergunta->id_pergunta,
                    'texto_pergunta' => $pergunta->texto_pergunta,
                    'categoria' => $pergunta->categoria,
                ];
            });

        $quizPerguntas = $quiz->perguntas()
            ->get()
            ->map(function ($pergunta) {
                return [
                    'id' => $pergunta->id_pergunta,
                    'order' => $pergunta->pivot->order,
                    'points' => $pergunta->pivot->points,
                ];
            });

        return Inertia::render('admin/quizzes/edit', [
            'quiz' => $quiz,
            'all_perguntas' => $allPerguntas,
            'quiz_perguntas' => $quizPerguntas,
        ]);
    }

    /**
     * Update the specified quiz.
     */
    public function update(Request $request, Quiz $quiz)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'theme' => 'sometimes|string|max:255',
            'difficulty' => 'sometimes|in:facil,medio,dificil',
            'points_reward' => 'sometimes|integer|min:0',
            'time_limit_minutes' => 'sometimes|integer|min:1',
            'is_active' => 'sometimes|boolean',
            'order' => 'sometimes|integer|min:1',
            'perguntas' => 'sometimes|array',
            'perguntas.*.id' => 'required_with:perguntas|exists:perguntas,id_pergunta',
            'perguntas.*.points' => 'required_with:perguntas|integer|min:1',
            'perguntas.*.order' => 'required_with:perguntas|integer|min:1',
        ]);

        DB::transaction(function () use ($quiz, $validated) {
            // Update quiz basic info
            $quiz->update(array_intersect_key($validated, array_flip([
                'title', 'description', 'theme', 'difficulty',
                'points_reward', 'time_limit_minutes', 'is_active', 'order'
            ])));

            // Update perguntas if provided
            if (isset($validated['perguntas'])) {
                $quiz->perguntas()->detach();

                foreach ($validated['perguntas'] as $pergunta) {
                    $quiz->perguntas()->attach($pergunta['id'], [
                        'order' => $pergunta['order'],
                        'points' => $pergunta['points'],
                    ]);
                }
            }
        });

        return back()->with('success', 'Quiz atualizado com sucesso!');
    }

    /**
     * Remove the specified quiz.
     */
    public function destroy(Quiz $quiz)
    {
        $quiz->delete();

        return redirect()->route('admin.quizzes.index')
            ->with('success', 'Quiz removido com sucesso!');
    }

    /**
     * Toggle quiz active status.
     */
    public function toggleActive(Quiz $quiz)
    {
        $quiz->update(['is_active' => !$quiz->is_active]);

        return back()->with('success', 'Status do quiz atualizado!');
    }

    /**
     * Duplicate a quiz.
     */
    public function duplicate(Quiz $quiz)
    {
        $newQuiz = $quiz->replicate();
        $newQuiz->title = $quiz->title . ' (Cópia)';
        $newQuiz->is_active = false;
        $newQuiz->order = Quiz::max('order') + 1;
        $newQuiz->save();

        // Copy perguntas relationship
        $perguntas = DB::table('quiz_perguntas')
            ->where('quiz_id', $quiz->id)
            ->get();

        foreach ($perguntas as $pergunta) {
            DB::table('quiz_perguntas')->insert([
                'quiz_id' => $newQuiz->id,
                'pergunta_id' => $pergunta->pergunta_id,
                'order' => $pergunta->order,
                'points' => $pergunta->points,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        return redirect()->route('admin.quizzes.edit', $newQuiz)
            ->with('success', 'Quiz duplicado com sucesso!');
    }
}
