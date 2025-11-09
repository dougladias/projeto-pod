// Stats Interface
export interface QuizStats {
    completed_quizzes: number;
    total_quizzes: number;
    total_attempts: number;
    total_score: number;
    average_accuracy: number;
    best_score: number;
}

// Recent Attempt Interface
export interface RecentAttempt {
    id: number;
    quiz_title: string;
    quiz_theme: string;
    quiz_difficulty: string;
    score: number;
    accuracy: number;
    correct_answers: number;
    total_questions: number;
    time_spent: string;
    completed_at: string;
    passed: boolean;
}

// MyQuiz Page Props
export interface MyQuizPageProps {
    stats: QuizStats;
    recent_attempts: RecentAttempt[];
}

// Stats Cards Props
export interface StatsCardsProps {
    stats: QuizStats;
}

// Progress Card Props
export interface ProgressCardProps {
    completedQuizzes: number;
    totalQuizzes: number;
}

// Quiz History Table Props
export interface QuizHistoryTableProps {
    attempts: RecentAttempt[];
}
