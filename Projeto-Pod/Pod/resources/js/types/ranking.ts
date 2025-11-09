// Ranking User Interface
export interface RankingUser {
    position: number;
    user_id: number;
    name: string;
    avatar: string | null;
    school: string;
    school_year: string;
    total_points: number;
    completed_quizzes: number;
    average_accuracy: number;
}

// User Context Interface
export interface UserContext {
    user_position: number;
    total_students: number;
    context: RankingUser[];
}

// Current User Interface
export interface CurrentUser {
    name: string;
    avatar: string | null;
    total_points: number;
    total_completed_quizzes: number;
    average_accuracy: number;
    ranking_position: number;
}

// Ranking Stats Interface
export interface RankingStats {
    total_students: number;
    total_points_distributed: number;
    total_quizzes_completed: number;
    average_points_per_student: number;
}

// Ranking Page Props
export interface RankingPageProps {
    ranking: RankingUser[];
    user_context: UserContext;
    stats: RankingStats;
    top_three: RankingUser[];
    current_filter: string;
    available_filters: Record<string, string>;
    current_user: CurrentUser;
}

// Current User Card Props
export interface CurrentUserCardProps {
    name: string;
    avatar?: string | null;
    totalCompletedQuizzes: number;
    totalPoints: number;
    averageAccuracy: number;
    rankingPosition: number;
}

// Ranking Stats Cards Props
export interface RankingStatsCardsProps {
    totalStudents: number;
    positionChange?: number;
    averageAccuracy: number;
    topPercentage: number;
}

// Ranking List Item Props
export interface RankingListItemProps {
    position: number;
    name: string;
    avatar?: string | null;
    level: number;
    totalQuizzes: number;
    points: number;
    accuracy: number;
    sequencia: number;
    badge?: string;
}
