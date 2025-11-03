<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Services\Achievement\AchievementService;
use App\Services\Ranking\RankingService;
use App\Services\Student\ProgressService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    protected ProgressService $progressService;
    protected AchievementService $achievementService;
    protected RankingService $rankingService;

    public function __construct(
        ProgressService $progressService,
        AchievementService $achievementService,
        RankingService $rankingService
    ) {
        $this->progressService = $progressService;
        $this->achievementService = $achievementService;
        $this->rankingService = $rankingService;
    }

    /**
     * Show the student profile page.
     */
    public function index(Request $request): Response
    {
        $user = $request->user();

        // Get comprehensive progress data
        $progress = $this->progressService->getStudentProgress($user);

        // Get achievements with status
        $achievements = $this->achievementService->getAchievementsWithStatus($user);

        // Get next achievements to unlock
        $nextAchievements = $this->achievementService->getNextAchievements($user, 3);

        // Get study recommendations
        $recommendations = $this->progressService->getStudyRecommendations($user);

        // Get comparison with class average
        $comparison = $this->progressService->compareWithAverage($user);

        // Get user's ranking position
        $rankingPosition = $this->rankingService->getUserPosition($user);

        // Get weak and strong areas
        $weakAreas = $this->progressService->getWeakAreas($user, 3);
        $strongAreas = $this->progressService->getStrongAreas($user, 3);

        return Inertia::render('student/profile/index', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'avatar' => $user->avatar,
                'school' => $user->school,
                'school_year' => $user->school_year,
                'gender' => $user->gender,
                'birth_date' => $user->birth_date?->format('d/m/Y'),
            ],
            'progress' => $progress,
            'achievements' => $achievements,
            'next_achievements' => $nextAchievements,
            'recommendations' => $recommendations,
            'comparison' => $comparison,
            'ranking_position' => $rankingPosition,
            'weak_areas' => $weakAreas,
            'strong_areas' => $strongAreas,
        ]);
    }

    /**
     * Get progress data as JSON.
     */
    public function getProgress(Request $request)
    {
        $user = $request->user();
        $progress = $this->progressService->getStudentProgress($user);

        return response()->json($progress);
    }

    /**
     * Get achievements data as JSON.
     */
    public function getAchievements(Request $request)
    {
        $user = $request->user();
        $achievements = $this->achievementService->getAchievementsWithStatus($user);

        return response()->json([
            'achievements' => $achievements,
            'total' => $achievements->count(),
            'unlocked' => $achievements->where('is_unlocked', true)->count(),
        ]);
    }

    /**
     * Get study recommendations as JSON.
     */
    public function getRecommendations(Request $request)
    {
        $user = $request->user();
        $recommendations = $this->progressService->getStudyRecommendations($user);

        return response()->json($recommendations);
    }
}
