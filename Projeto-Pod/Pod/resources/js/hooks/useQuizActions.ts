import { useState } from 'react';

interface StartQuizResponse {
    quiz: {
        id: number;
        title: string;
        description: string;
        time_limit: number;
        total_questions: number;
    };
    questions: any[];
    attempt_id: number;
}

interface AnswerResponse {
    is_correct: boolean;
    correct_option_id: number;
    explanation: string;
}

interface FinishQuizResponse {
    correct_answers: number;
    total_questions: number;
    score: number;
}

// Helper para fazer requisições com CSRF token
async function fetchWithCsrf(url: string, options: RequestInit = {}) {
    const csrfToken = document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    return fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken || '',
            'X-Requested-With': 'XMLHttpRequest',
            ...options.headers,
        },
    });
}

export function useQuizActions() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    /**
     * Inicia um quiz
     */
    const startQuiz = async (
        quizId: number,
        onSuccess: (data: StartQuizResponse) => void,
        onError?: (error: string) => void
    ) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetchWithCsrf(`/app/quiz/${quizId}/start`, {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const props = data.props;

            setIsLoading(false);
            onSuccess({
                quiz: props.quiz,
                questions: props.questions,
                attempt_id: props.attempt_id,
            });
        } catch (err: any) {
            setIsLoading(false);
            const errorMessage = err.message || 'Erro ao iniciar quiz';
            setError(errorMessage);
            if (onError) onError(errorMessage);
            console.error('Erro ao iniciar quiz:', err);
        }
    };

    /**
     * Responde uma pergunta do quiz
     */
    const answerQuestion = async (
        attemptId: number,
        questionId: number,
        selectedOptionId: number,
        onSuccess: (data: AnswerResponse) => void,
        onError?: (error: string) => void
    ) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetchWithCsrf(`/app/quiz/attempts/${attemptId}/answer`, {
                method: 'POST',
                body: JSON.stringify({
                    question_id: questionId,
                    selected_option_id: selectedOptionId,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            setIsLoading(false);
            onSuccess(data);
        } catch (err: any) {
            setIsLoading(false);
            const errorMessage = err.message || 'Erro ao enviar resposta';
            setError(errorMessage);
            if (onError) onError(errorMessage);
            console.error('Erro ao enviar resposta:', err);
        }
    };

    /**
     * Finaliza um quiz
     */
    const finishQuiz = async (
        attemptId: number,
        onSuccess: (data: FinishQuizResponse) => void,
        onError?: (error: string) => void
    ) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetchWithCsrf(`/app/quiz/attempts/${attemptId}/finish`, {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            setIsLoading(false);
            onSuccess(data);
        } catch (err: any) {
            setIsLoading(false);
            const errorMessage = err.message || 'Erro ao finalizar quiz';
            setError(errorMessage);
            if (onError) onError(errorMessage);
            console.error('Erro ao finalizar quiz:', err);
        }
    };

    return {
        startQuiz,
        answerQuestion,
        finishQuiz,
        isLoading,
        error,
    };
}
