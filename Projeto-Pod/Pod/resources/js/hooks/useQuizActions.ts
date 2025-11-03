import { useState } from 'react';
import { router } from '@inertiajs/react';

export function useQuizActions() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    /**
     * Inicia um quiz - redireciona para a página do quiz
     */
    const startQuiz = (quizId: number) => {
        setIsLoading(true);
        setError(null);

        router.post(`/app/quiz/${quizId}/start`, {}, {
            onStart: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
            },
            onError: (errors) => {
                const errorMessage = Object.values(errors)[0] as string || 'Erro ao iniciar quiz';
                setError(errorMessage);
                console.error('Erro ao iniciar quiz:', errors);
            }
        });
    };

    return {
        startQuiz,
        isLoading,
        error,
    };
}
