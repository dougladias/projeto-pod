// Profile User Interface
export interface ProfileUser {
    name: string;
    email: string;
    birth_date?: string;
    phone?: string;
    city?: string;
    vape_usage?: string;
    bio?: string;
    avatar?: string;
    total_points: number;
    total_completed_quizzes: number;
    average_accuracy: number;
    ranking_position: number;
    total_achievements: number;
}

// Profile Card Props
export interface ProfileCardProps {
    name: string;
    avatar?: string | null;
    totalCompletedQuizzes: number;
    averageAccuracy: number;
    rankingPosition: number;
    totalPoints: number;
    totalAchievements: number;
}

// Profile Avatar Props
export interface ProfileAvatarProps {
    name: string;
    avatar?: string | null;
}

// Profile Stats Props
export interface ProfileStatsProps {
    totalPoints: number;
    totalAchievements: number;
}

// Profile Performance Props
export interface ProfilePerformanceProps {
    averageAccuracy: number;
    rankingPosition: number;
}

// Profile Form User (subset for form)
export interface ProfileFormUser {
    name: string;
    email: string;
    birth_date?: string;
    phone?: string;
    city?: string;
    vape_usage?: string;
    bio?: string;
}

// Profile Form Props
export interface ProfileFormProps {
    user: ProfileFormUser;
    status?: string;
}

// Profile Page Props
export interface ProfilePageProps {
    user: ProfileUser;
    status?: string;
}
