<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Services\Ranking\RankingService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RankingController extends Controller
{
    protected RankingService $rankingService;

    public function __construct(RankingService $rankingService)
    {
        $this->rankingService = $rankingService;
    }

    /**
     * Show the ranking page.
     */
    public function index(Request $request): Response
    {
        $user = $request->user();
        $filter = $request->query('filter', 'global'); // global, monthly, weekly, school, year

        // Get ranking based on filter
        $ranking = match($filter) {
            'monthly' => $this->rankingService->getMonthlyRanking(50),
            'weekly' => $this->rankingService->getWeeklyRanking(50),
            'school' => $this->rankingService->getRankingBySchool($user->school, 50),
            'year' => $this->rankingService->getRankingBySchoolYear($user->school_year, 50),
            default => $this->rankingService->getGlobalRanking(50),
        };

        // Get user's context (users around their position)
        $userContext = $this->rankingService->getUserRankingContext($user, 5);

        // Get ranking stats
        $stats = $this->rankingService->getRankingStats();

        // Get top 3 for podium
        $topThree = $this->rankingService->getTopStudents(3);

        return Inertia::render('student/ranking/index', [
            'ranking' => $ranking,
            'user_context' => $userContext,
            'stats' => $stats,
            'top_three' => $topThree,
            'current_filter' => $filter,
            'available_filters' => [
                'global' => 'Ranking Global',
                'monthly' => 'Ranking Mensal',
                'weekly' => 'Ranking Semanal',
                'school' => 'Minha Escola',
                'year' => 'Meu Ano',
            ],
            'current_user' => [
                'name' => $user->name,
                'avatar' => $user->avatar,
                'total_points' => $user->total_points,
                'total_completed_quizzes' => $user->total_completed_quizzes,
                'average_accuracy' => $user->average_accuracy,
                'ranking_position' => $user->ranking_position,
            ],
        ]);
    }

    /**
     * Get ranking data as JSON (for AJAX requests).
     */
    public function getRanking(Request $request)
    {
        $user = $request->user();
        $filter = $request->query('filter', 'global');

        $ranking = match($filter) {
            'monthly' => $this->rankingService->getMonthlyRanking(50),
            'weekly' => $this->rankingService->getWeeklyRanking(50),
            'school' => $this->rankingService->getRankingBySchool($user->school, 50),
            'year' => $this->rankingService->getRankingBySchoolYear($user->school_year, 50),
            default => $this->rankingService->getGlobalRanking(50),
        };

        return response()->json([
            'ranking' => $ranking,
            'user_position' => $this->rankingService->getUserPosition($user),
        ]);
    }
}
