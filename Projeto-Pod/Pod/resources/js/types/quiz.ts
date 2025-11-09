export interface Question {
    id: number;
    texto_pergunta: string;
    categoria: string;
    points: number;
    respostas: {
        id: number;
        texto_resposta: string;
    }[];
}

export interface Quiz {
    id: number;
    title: string;
    description: string;
    theme: string;
    difficulty: string;
    time_limit_minutes: number;
    points_reward: number;
    total_questions: number;
}

export interface QuizPageProps {
    quiz: Quiz;
    questions: Question[];
    attempt_id: number;
}

export interface QuizHeaderProps {
    backUrl?: string;
}

export interface QuizTimerProps {
    timeLeft: number;
    formatTime: (seconds: number) => string;
}

export interface QuizQuestionProps {
    currentQuestionIndex: number;
    question: Question;
    progress: number;
    timeLeft: number;
    formatTime: (seconds: number) => string;
}

export interface QuizOptionsProps {
    answers: Question['respostas'];
    selectedOption: number | null;
    isAnswered: boolean;
    feedback: {
        is_correct: boolean;
        correct_resposta_id: number;
    } | null;
    onSelectOption: (optionId: number) => void;
}

export interface QuizFeedbackProps {
    feedback: {
        is_correct: boolean;
        correct_resposta_id: number;
    };
}

export interface QuizActionButtonProps {
    isAnswered: boolean;
    isSubmitting: boolean;
    selectedOption: number | null;
    currentQuestionIndex: number;
    totalQuestions: number;
    onConfirm: () => void;
    onNext: () => void;
}

export interface QuizResultProps {
    correctAnswersCount: number;
    totalQuestions: number;
}

export interface LoadingAnimationProps {
    show: boolean;
    isCorrect?: boolean | null;
}
