// Dashboard Types

export interface Stats {
    total_points: number;
    total_completed_quizzes: number;
    average_accuracy: number;
    ranking_position: number;
    level: number;
    streak: number;
}

export interface RecentActivity {
    quiz_title: string;
    quiz_theme: string;
    score: number;
    accuracy: number;
    completed_at: string;
    passed: boolean;
}

export interface RecommendedQuiz {
    id: number;
    title: string;
    description: string;
    theme: string;
    difficulty: string;
    points_reward: number;
}

export interface TopRankingUser {
    position: number;
    name: string;
    avatar: string | null;
    total_points: number;
    completed_quizzes: number;
}

export interface DashboardProps {
    stats: Stats;
    recent_activities: RecentActivity[];
    recommended_quizzes: RecommendedQuiz[];
    top_ranking: TopRankingUser[];
}
