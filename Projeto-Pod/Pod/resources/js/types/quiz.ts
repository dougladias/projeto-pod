export interface QuizQuestion {
    id: number;
    question_text: string;
    options: {
        id: number;
        option_text: string;
        order: number;
    }[];
}

export interface QuizData {
    quiz: {
        id: number;
        title: string;
        description: string;
        time_limit: number;
        total_questions: number;
    };
    questions: QuizQuestion[];
    attempt_id: number;
}
