import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Head } from '@inertiajs/react';
import { QuizHeader } from './_components/QuizHeader';
import { QuizQuestion } from './_components/QuizQuestion';
import { QuizOptions } from './_components/QuizOptions';
import { QuizActionButton } from './_components/QuizActionButton';
import { QuizResult } from './_components/QuizResult';
import { LoadingAnimation } from './_components/LoadingAnimation';
import type { QuizPageProps } from '@/types/quiz';
import logoQuiz from '@/assets/LogoQuiz.webp';

export default function QuizPage({ quiz, questions, attempt_id }: QuizPageProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [timeLeft, setTimeLeft] = useState(quiz.time_limit_minutes * 60);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [showAnimation, setShowAnimation] = useState(false);
    const [animationResult, setAnimationResult] = useState<boolean | null>(null);
    const [feedback, setFeedback] = useState<{
        is_correct: boolean;
        correct_resposta_id: number;
    } | null>(null);

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleFinish = useCallback(async () => {
        if (isSubmitting || isFinished) return;

        setIsSubmitting(true);

        try {
            // Envia para o backend de forma assíncrona
            await axios.post(
                `/app/quiz/attempts/${attempt_id}/finish`,
                {
                    time_spent_seconds: quiz.time_limit_minutes * 60 - timeLeft,
                }
            );

            setIsSubmitting(false);
            setIsFinished(true);
        } catch (error) {
            console.error('Erro ao finalizar quiz:', error);
            // Mesmo com erro, mostra a tela de resultado
            setIsSubmitting(false);
            setIsFinished(true);
        }
    }, [attempt_id, isSubmitting, isFinished, timeLeft, quiz.time_limit_minutes]);

    // Timer
    useEffect(() => {
        if (timeLeft <= 0) {
            handleFinish();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, handleFinish]);

    const handleSelectOption = (optionId: number) => {
        if (isAnswered) return;
        setSelectedOption(optionId);
    };

    const handleConfirm = async () => {
        if (selectedOption === null || isAnswered || isSubmitting) return;

        setIsSubmitting(true);
        setShowAnimation(true);
        setAnimationResult(null);

        try {
            const response = await axios.post(
                `/app/quiz/attempts/${attempt_id}/answer`,
                {
                    pergunta_id: currentQuestion.id,
                    resposta_id: selectedOption,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );

            // Aguarda 1s para mostrar a animação de loading
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mostra resultado (verde ou vermelho)
            setAnimationResult(response.data.is_correct);

            // Aguarda 1.5s para mostrar o resultado
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Fecha animação e mostra feedback
            setShowAnimation(false);
            setFeedback(response.data);
            setIsAnswered(true);

            // Atualiza contador de acertos
            if (response.data.is_correct) {
                setCorrectAnswersCount(prev => prev + 1);
            }
        } catch (error) {
            console.error('Erro completo:', error);

            const axiosError = error as { response?: { data?: { message?: string; error?: string } } };
            console.error('Resposta do servidor:', axiosError.response?.data);

            setShowAnimation(false);
            setAnimationResult(null);

            const errorMessage = axiosError.response?.data?.message || axiosError.response?.data?.error || 'Erro ao enviar resposta. Tente novamente.';

            // Se a pergunta já foi respondida, apenas fecha a animação e continua
            if (errorMessage.includes('já respondida')) {
                console.warn('Pergunta já foi respondida anteriormente');
                // Não mostra alert, apenas continua o fluxo normal
            } else {
                alert(errorMessage);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNext = () => {
        // Avança para próxima pergunta
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setFeedback(null);
        } else {
            // Última pergunta, finalizar
            handleFinish();
        }
    };

    // Se o quiz terminou, mostra tela de resultado
    if (isFinished) {
        return <QuizResult correctAnswersCount={correctAnswersCount} totalQuestions={questions.length} />;
    }

    return (
        <div className="relative w-screen h-screen overflow-hidden" style={{
            background: 'linear-gradient(180deg, #1C4BCB 0%, #142E73 100%)'
        }}>
            <Head title="Quiz" />

            {/* Botão Voltar */}
            <QuizHeader />

            {/* Animação de feedback */}
            <LoadingAnimation show={showAnimation} isCorrect={animationResult} />

            {/* Container centralizado */}
            <div className="flex items-center justify-center w-full h-full px-4 py-8">
                <div className="relative w-full max-w-5xl">
                    {/* Logo encostada no topo do card */}
                    <div className="flex justify-center mb-[-70px] relative z-20">
                        <img
                            src={logoQuiz}
                            alt="Quiz Missão Caça Vape"
                            className="h-40 w-auto drop-shadow-2xl"
                        />
                    </div>

                    {/* Card do quiz */}
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-h-[calc(100vh-100px)] overflow-y-auto px-12 py-8 pt-16 relative z-10">
                        {/* Header da Pergunta */}
                        <QuizQuestion
                            currentQuestionIndex={currentQuestionIndex}
                            question={currentQuestion}
                            progress={progress}
                            timeLeft={timeLeft}
                            formatTime={formatTime}
                        />

                        {/* Alternativas */}
                        <QuizOptions
                            answers={currentQuestion.respostas}
                            selectedOption={selectedOption}
                            isAnswered={isAnswered}
                            feedback={feedback}
                            onSelectOption={handleSelectOption}
                        />

                        {/* Botão de ação */}
                        <QuizActionButton
                            isAnswered={isAnswered}
                            isSubmitting={isSubmitting}
                            selectedOption={selectedOption}
                            currentQuestionIndex={currentQuestionIndex}
                            totalQuestions={questions.length}
                            onConfirm={handleConfirm}
                            onNext={handleNext}
                        />

                        {/* Info do progresso */}
                        <p className="text-center text-gray-500 text-base mt-6 font-medium">
                            Pergunta {currentQuestionIndex + 1} de {questions.length}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
