<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Pergunta;
use App\Models\Resposta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class PerguntaController extends Controller
{
    /**
     * Display a listing of perguntas.
     */
    public function index(Request $request): Response
    {
        $search = $request->query('search');
        $categoria = $request->query('categoria');

        $perguntas = Pergunta::query()
            ->when($search, function ($query, $search) {
                $query->where('texto_pergunta', 'like', "%{$search}%");
            })
            ->when($categoria, function ($query, $categoria) {
                $query->where('categoria', $categoria);
            })
            ->withCount('respostas')
            ->orderBy('categoria')
            ->orderBy('id_pergunta')
            ->paginate(20)
            ->through(function ($pergunta) {
                return [
                    'id' => $pergunta->id_pergunta,
                    'texto_pergunta' => $pergunta->texto_pergunta,
                    'categoria' => $pergunta->categoria,
                    'total_respostas' => $pergunta->respostas_count,
                    'in_quizzes' => $pergunta->quizzes()->count(),
                ];
            });

        // Get all categories for filter
        $categorias = Pergunta::select('categoria')
            ->distinct()
            ->orderBy('categoria')
            ->pluck('categoria');

        return Inertia::render('admin/perguntas/index', [
            'perguntas' => $perguntas,
            'filters' => [
                'search' => $search,
                'categoria' => $categoria,
            ],
            'categorias' => $categorias,
        ]);
    }

    /**
     * Show the form for creating a new pergunta.
     */
    public function create(): Response
    {
        $categorias = Pergunta::select('categoria')
            ->distinct()
            ->orderBy('categoria')
            ->pluck('categoria');

        return Inertia::render('admin/perguntas/create', [
            'categorias' => $categorias,
        ]);
    }

    /**
     * Store a newly created pergunta.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'texto_pergunta' => 'required|string',
            'categoria' => 'required|string|max:255',
            'respostas' => 'required|array|min:2|max:4',
            'respostas.*.texto_resposta' => 'required|string',
            'respostas.*.correta' => 'required|boolean',
        ]);

        // Validate that exactly one answer is correct
        $correctCount = collect($validated['respostas'])
            ->where('correta', true)
            ->count();

        if ($correctCount !== 1) {
            return back()->withErrors([
                'respostas' => 'Deve haver exatamente uma resposta correta.'
            ]);
        }

        DB::transaction(function () use ($validated) {
            // Create pergunta
            $pergunta = Pergunta::create([
                'texto_pergunta' => $validated['texto_pergunta'],
                'categoria' => $validated['categoria'],
            ]);

            // Create respostas
            foreach ($validated['respostas'] as $respostaData) {
                Resposta::create([
                    'id_pergunta' => $pergunta->id_pergunta,
                    'texto_resposta' => $respostaData['texto_resposta'],
                    'correta' => $respostaData['correta'],
                ]);
            }
        });

        return redirect()->route('admin.perguntas.index')
            ->with('success', 'Pergunta criada com sucesso!');
    }

    /**
     * Display the specified pergunta.
     */
    public function show(Pergunta $pergunta): Response
    {
        $respostas = $pergunta->respostas()
            ->get()
            ->map(function ($resposta) {
                return [
                    'id' => $resposta->id_resposta,
                    'texto_resposta' => $resposta->texto_resposta,
                    'correta' => $resposta->correta,
                ];
            });

        $quizzes = $pergunta->quizzes()
            ->select('quizzes.id', 'quizzes.title', 'quizzes.theme')
            ->get()
            ->map(function ($quiz) {
                return [
                    'id' => $quiz->id,
                    'title' => $quiz->title,
                    'theme' => $quiz->theme,
                ];
            });

        // Statistics
        $totalAnswered = DB::table('quiz_answers')
            ->where('pergunta_id', $pergunta->id_pergunta)
            ->count();

        $correctAnswered = DB::table('quiz_answers')
            ->where('pergunta_id', $pergunta->id_pergunta)
            ->where('is_correct', true)
            ->count();

        $accuracy = $totalAnswered > 0
            ? round(($correctAnswered / $totalAnswered) * 100, 2)
            : 0;

        return Inertia::render('admin/perguntas/show', [
            'pergunta' => [
                'id' => $pergunta->id_pergunta,
                'texto_pergunta' => $pergunta->texto_pergunta,
                'categoria' => $pergunta->categoria,
            ],
            'respostas' => $respostas,
            'quizzes' => $quizzes,
            'stats' => [
                'total_answered' => $totalAnswered,
                'correct_answered' => $correctAnswered,
                'accuracy' => $accuracy,
            ],
        ]);
    }

    /**
     * Show the form for editing the specified pergunta.
     */
    public function edit(Pergunta $pergunta): Response
    {
        $respostas = $pergunta->respostas()
            ->get()
            ->map(function ($resposta) {
                return [
                    'id' => $resposta->id_resposta,
                    'texto_resposta' => $resposta->texto_resposta,
                    'correta' => $resposta->correta,
                ];
            });

        $categorias = Pergunta::select('categoria')
            ->distinct()
            ->orderBy('categoria')
            ->pluck('categoria');

        return Inertia::render('admin/perguntas/edit', [
            'pergunta' => [
                'id' => $pergunta->id_pergunta,
                'texto_pergunta' => $pergunta->texto_pergunta,
                'categoria' => $pergunta->categoria,
            ],
            'respostas' => $respostas,
            'categorias' => $categorias,
        ]);
    }

    /**
     * Update the specified pergunta.
     */
    public function update(Request $request, Pergunta $pergunta)
    {
        $validated = $request->validate([
            'texto_pergunta' => 'sometimes|string',
            'categoria' => 'sometimes|string|max:255',
            'respostas' => 'sometimes|array|min:2|max:4',
            'respostas.*.id' => 'nullable|exists:respostas,id_resposta',
            'respostas.*.texto_resposta' => 'required_with:respostas|string',
            'respostas.*.correta' => 'required_with:respostas|boolean',
        ]);

        // Validate that exactly one answer is correct if respostas provided
        if (isset($validated['respostas'])) {
            $correctCount = collect($validated['respostas'])
                ->where('correta', true)
                ->count();

            if ($correctCount !== 1) {
                return back()->withErrors([
                    'respostas' => 'Deve haver exatamente uma resposta correta.'
                ]);
            }
        }

        DB::transaction(function () use ($pergunta, $validated) {
            // Update pergunta
            $pergunta->update(array_intersect_key($validated, array_flip([
                'texto_pergunta', 'categoria'
            ])));

            // Update respostas if provided
            if (isset($validated['respostas'])) {
                // Delete existing respostas
                $pergunta->respostas()->delete();

                // Create new respostas
                foreach ($validated['respostas'] as $respostaData) {
                    Resposta::create([
                        'id_pergunta' => $pergunta->id_pergunta,
                        'texto_resposta' => $respostaData['texto_resposta'],
                        'correta' => $respostaData['correta'],
                    ]);
                }
            }
        });

        return back()->with('success', 'Pergunta atualizada com sucesso!');
    }

    /**
     * Remove the specified pergunta.
     */
    public function destroy(Pergunta $pergunta)
    {
        // Check if pergunta is in any quiz
        if ($pergunta->quizzes()->count() > 0) {
            return back()->withErrors([
                'pergunta' => 'Não é possível deletar uma pergunta que está em uso em quizzes.'
            ]);
        }

        $pergunta->delete();

        return redirect()->route('admin.perguntas.index')
            ->with('success', 'Pergunta removida com sucesso!');
    }

    /**
     * Get perguntas statistics.
     */
    public function statistics()
    {
        $totalPerguntas = Pergunta::count();

        $byCategoria = Pergunta::selectRaw('categoria, COUNT(*) as count')
            ->groupBy('categoria')
            ->orderBy('count', 'desc')
            ->get()
            ->mapWithKeys(fn($item) => [$item->categoria => $item->count]);

        // Most difficult perguntas (lowest accuracy)
        $mostDifficult = DB::table('perguntas')
            ->leftJoin('quiz_answers', 'perguntas.id_pergunta', '=', 'quiz_answers.pergunta_id')
            ->select('perguntas.id_pergunta', 'perguntas.texto_pergunta')
            ->selectRaw('COUNT(quiz_answers.id) as total_answered')
            ->selectRaw('SUM(CASE WHEN quiz_answers.is_correct = 1 THEN 1 ELSE 0 END) as correct')
            ->selectRaw('CASE WHEN COUNT(quiz_answers.id) > 0 THEN (SUM(CASE WHEN quiz_answers.is_correct = 1 THEN 1 ELSE 0 END) / COUNT(quiz_answers.id)) * 100 ELSE 0 END as accuracy')
            ->groupBy('perguntas.id_pergunta', 'perguntas.texto_pergunta')
            ->having('total_answered', '>', 10)
            ->orderBy('accuracy')
            ->limit(5)
            ->get();

        return response()->json([
            'total_perguntas' => $totalPerguntas,
            'by_categoria' => $byCategoria,
            'most_difficult' => $mostDifficult,
        ]);
    }
}
