<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\Student\ProgressService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StudentController extends Controller
{
    protected ProgressService $progressService;

    public function __construct(ProgressService $progressService)
    {
        $this->progressService = $progressService;
    }

    /**
     * Display a listing of students.
     */
    public function index(Request $request): Response
    {
        $search = $request->query('search');
        $school = $request->query('school');
        $schoolYear = $request->query('school_year');

        $students = User::where('role', User::ROLE_STUDENT)
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                      ->orWhere('email', 'like', "%{$search}%")
                      ->orWhere('cpf', 'like', "%{$search}%");
                });
            })
            ->when($school, function ($query, $school) {
                $query->where('school', $school);
            })
            ->when($schoolYear, function ($query, $schoolYear) {
                $query->where('school_year', $schoolYear);
            })
            ->orderBy('name')
            ->paginate(20)
            ->through(function ($student) {
                return [
                    'id' => $student->id,
                    'name' => $student->name,
                    'email' => $student->email,
                    'avatar' => $student->avatar,
                    'school' => $student->school,
                    'school_year' => $student->school_year,
                    'total_points' => $student->total_points,
                    'completed_quizzes' => $student->total_completed_quizzes,
                    'average_accuracy' => round($student->average_accuracy, 2),
                    'created_at' => $student->created_at->format('d/m/Y'),
                ];
            });

        // Get filter options
        $schools = User::where('role', User::ROLE_STUDENT)
            ->distinct()
            ->pluck('school')
            ->filter();

        return Inertia::render('admin/students/index', [
            'students' => $students,
            'filters' => [
                'search' => $search,
                'school' => $school,
                'school_year' => $schoolYear,
            ],
            'schools' => $schools,
        ]);
    }

    /**
     * Display the specified student.
     */
    public function show(User $student): Response
    {
        // Ensure it's a student
        if (!$student->isStudent()) {
            abort(404);
        }

        // Get student's comprehensive progress
        $progress = $this->progressService->getStudentProgress($student);

        // Get recent activity
        $recentActivity = $student->quizAttempts()
            ->with('quiz:id,title,theme,difficulty')
            ->whereNotNull('completed_at')
            ->orderBy('completed_at', 'desc')
            ->limit(10)
            ->get()
            ->map(function ($attempt) {
                return [
                    'quiz_title' => $attempt->quiz->title,
                    'theme' => $attempt->quiz->theme,
                    'difficulty' => $attempt->quiz->difficulty,
                    'score' => $attempt->score,
                    'accuracy' => round($attempt->accuracy, 2),
                    'time_spent' => $attempt->time_spent_minutes,
                    'passed' => $attempt->isPassed(),
                    'completed_at' => $attempt->completed_at->format('d/m/Y H:i'),
                ];
            });

        // Get achievements
        $achievements = $student->achievements()
            ->orderByDesc('user_achievements.unlocked_at')
            ->get()
            ->map(function ($achievement) {
                return [
                    'name' => $achievement->name,
                    'description' => $achievement->description,
                    'icon' => $achievement->icon,
                    'points_reward' => $achievement->points_reward,
                    'unlocked_at' => $achievement->pivot->unlocked_at->format('d/m/Y H:i'),
                ];
            });

        return Inertia::render('admin/students/show', [
            'student' => [
                'id' => $student->id,
                'name' => $student->name,
                'email' => $student->email,
                'avatar' => $student->avatar,
                'school' => $student->school,
                'school_year' => $student->school_year,
                'gender' => $student->gender,
                'birth_date' => $student->birth_date?->format('d/m/Y'),
                'cpf' => $student->cpf,
                'phone' => $student->phone,
                'created_at' => $student->created_at->format('d/m/Y H:i'),
            ],
            'progress' => $progress,
            'recent_activity' => $recentActivity,
            'achievements' => $achievements,
        ]);
    }

    /**
     * Update the specified student.
     */
    public function update(Request $request, User $student)
    {
        // Ensure it's a student
        if (!$student->isStudent()) {
            abort(404);
        }

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email,' . $student->id,
            'school' => 'sometimes|string|max:255',
            'school_year' => 'sometimes|in:6,7,8,9,1,2,3',
            'gender' => 'sometimes|in:male,female,other',
            'phone' => 'sometimes|string|max:20',
        ]);

        $student->update($validated);

        return back()->with('success', 'Estudante atualizado com sucesso!');
    }

    /**
     * Remove the specified student.
     */
    public function destroy(User $student)
    {
        // Ensure it's a student
        if (!$student->isStudent()) {
            abort(404);
        }

        $student->delete();

        return redirect()->route('admin.students.index')
            ->with('success', 'Estudante removido com sucesso!');
    }

    /**
     * Get student statistics.
     */
    public function statistics()
    {
        $totalStudents = User::where('role', User::ROLE_STUDENT)->count();

        $bySchoolYear = User::where('role', User::ROLE_STUDENT)
            ->selectRaw('school_year, COUNT(*) as count')
            ->groupBy('school_year')
            ->pluck('count', 'school_year');

        $bySchool = User::where('role', User::ROLE_STUDENT)
            ->selectRaw('school, COUNT(*) as count')
            ->groupBy('school')
            ->orderByDesc('count')
            ->limit(10)
            ->pluck('count', 'school');

        $byGender = User::where('role', User::ROLE_STUDENT)
            ->selectRaw('gender, COUNT(*) as count')
            ->groupBy('gender')
            ->pluck('count', 'gender');

        return response()->json([
            'total_students' => $totalStudents,
            'by_school_year' => $bySchoolYear,
            'by_school' => $bySchool,
            'by_gender' => $byGender,
        ]);
    }
}
