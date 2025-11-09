export interface Quiz {
    id: number;
    title: string;
    description: string;
    theme: string;
    difficulty: string;
    time_limit_minutes: number;
    total_questions: number;
    best_score: number;
    attempts_count: number;
    is_completed: boolean;
    last_attempt: string | null;
}

export interface PlayQuizPageProps {
    quizzes: Quiz[];
}

export interface LevelPosition {
    top: string;
    left: string;
}

export interface LevelButtonProps {
    quiz: Quiz;
    index: number;
    isHovered: boolean;
    isLocked: boolean;
    isLoading: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClick: () => void;
}

export interface BalloonProps {
    nivelNumber: number;
}

export interface UnlockedBalloonProps extends BalloonProps {
    quiz: Quiz;
    isLoading: boolean;
    onStartQuiz: () => void;
}

export interface LockedBalloonProps extends BalloonProps {}
