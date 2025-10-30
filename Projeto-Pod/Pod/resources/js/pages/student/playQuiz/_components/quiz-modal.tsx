import { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, CheckCircle, XCircle, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useQuizActions } from '@/hooks/useQuizActions';
import { router } from '@inertiajs/react';

interface QuizQuestion {
    id: number;
    question_text: string;
    options: {
        id: number;
        option_text: string;
        order: number;
    }[];
}

interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
    quiz: {
        id: number;
        title: string;
        description: string;
        time_limit: number;
        total_questions: number;
    } | null;
    questions: QuizQuestion[];
    attemptId: number | null;
}

export function QuizModal({ isOpen, onClose, quiz, questions, attemptId }: QuizModalProps) {
    const { answerQuestion, finishQuiz, isLoading } = useQuizActions();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [feedback, setFeedback] = useState<{
        is_correct: boolean;
        correct_option_id: number;
        explanation: string;
    } | null>(null);
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [timeLeft, setTimeLeft] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    // Declarar handleFinishQuiz antes dos useEffects
    const handleFinishQuiz = useCallback(() => {
        if (!attemptId) return;

        finishQuiz(
            attemptId,
            (data) => {
                setScore({
                    correct: data.correct_answers,
                    total: data.total_questions,
                });
                setIsFinished(true);
            },
            (error) => {
                console.error('Erro ao finalizar quiz:', error);
            }
        );
    }, [attemptId, finishQuiz]);

    // Inicializa o timer
    useEffect(() => {
        if (isOpen && quiz) {
            setTimeLeft(quiz.time_limit * 60); // Converte minutos para segundos
        }
    }, [isOpen, quiz]);

    // Countdown do timer
    useEffect(() => {
        if (timeLeft <= 0 || !isOpen || isFinished) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    handleFinishQuiz();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, isOpen, isFinished, handleFinishQuiz]);

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleSelectOption = (optionId: number) => {
        if (isAnswered) return;
        setSelectedOption(optionId);
    };

    const handleConfirmAnswer = () => {
        if (!selectedOption || !attemptId || isAnswered) return;

        answerQuestion(
            attemptId,
            currentQuestion.id,
            selectedOption,
            (data) => {
                setIsAnswered(true);
                setFeedback(data);
                setScore((prev) => ({
                    correct: prev.correct + (data.is_correct ? 1 : 0),
                    total: prev.total + 1,
                }));
            },
            (error) => {
                console.error('Erro ao enviar resposta:', error);
            }
        );
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setFeedback(null);
        } else {
            handleFinishQuiz();
        }
    };

    const handleClose = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setFeedback(null);
        setScore({ correct: 0, total: 0 });
        setIsFinished(false);
        onClose();
        router.reload({ only: ['quizzes'] });
    };

    if (!quiz || questions.length === 0) return null;

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
                {!isFinished ? (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">{quiz.title}</DialogTitle>
                            <DialogDescription className="sr-only">
                                Quiz interativo com {quiz.total_questions} perguntas sobre {quiz.title}
                            </DialogDescription>
                        </DialogHeader>

                        {/* Header com progresso e timer */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">
                                    Pergunta {currentQuestionIndex + 1} de {questions.length}
                                </span>
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <Clock className="w-4 h-4" />
                                    <span className={cn(
                                        timeLeft < 60 ? 'text-red-600' : 'text-gray-900'
                                    )}>
                                        {formatTime(timeLeft)}
                                    </span>
                                </div>
                            </div>
                            <Progress value={progress} className="h-2" />
                        </div>

                        {/* Pergunta */}
                        <div className="py-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                {currentQuestion.question_text}
                            </h3>

                            {/* Opções */}
                            <div className="space-y-3">
                                {currentQuestion.options.map((option) => {
                                    const isSelected = selectedOption === option.id;
                                    const isCorrect = feedback?.correct_option_id === option.id;
                                    const isWrong = isAnswered && isSelected && !feedback?.is_correct;

                                    return (
                                        <button
                                            key={option.id}
                                            onClick={() => handleSelectOption(option.id)}
                                            disabled={isAnswered}
                                            className={cn(
                                                'w-full p-4 text-left rounded-lg border-2 transition-all',
                                                'hover:border-blue-500 hover:bg-blue-50',
                                                isSelected && !isAnswered && 'border-blue-600 bg-blue-50',
                                                isCorrect && isAnswered && 'border-green-600 bg-green-50',
                                                isWrong && 'border-red-600 bg-red-50',
                                                !isSelected && !isCorrect && isAnswered && 'opacity-50',
                                                isAnswered && 'cursor-not-allowed'
                                            )}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">{option.option_text}</span>
                                                {isAnswered && isCorrect && (
                                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                                )}
                                                {isWrong && (
                                                    <XCircle className="w-5 h-5 text-red-600" />
                                                )}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Feedback */}
                            {feedback && (
                                <div className={cn(
                                    'mt-6 p-4 rounded-lg',
                                    feedback.is_correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                                )}>
                                    <p className={cn(
                                        'font-semibold mb-2',
                                        feedback.is_correct ? 'text-green-900' : 'text-red-900'
                                    )}>
                                        {feedback.is_correct ? '✓ Correto!' : '✗ Incorreto'}
                                    </p>
                                    {feedback.explanation && (
                                        <p className="text-sm text-gray-700">{feedback.explanation}</p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Botões */}
                        <div className="flex gap-3">
                            {!isAnswered ? (
                                <Button
                                    onClick={handleConfirmAnswer}
                                    disabled={!selectedOption || isLoading}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                                >
                                    {isLoading ? 'Processando...' : 'Confirmar Resposta'}
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleNextQuestion}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                                >
                                    {currentQuestionIndex < questions.length - 1 ? 'Próxima Pergunta' : 'Finalizar Quiz'}
                                </Button>
                            )}
                        </div>
                    </>
                ) : (
                    /* Tela de Resultado */
                    <div className="py-8 text-center">
                        <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                        <h2 className="text-3xl font-bold mb-2">Quiz Finalizado!</h2>
                        <p className="text-gray-600 mb-6">Confira seu desempenho</p>

                        <div className="bg-gray-50 rounded-lg p-6 mb-6">
                            <div className="text-5xl font-bold text-blue-600 mb-2">
                                {Math.round((score.correct / score.total) * 100)}%
                            </div>
                            <p className="text-gray-600">
                                {score.correct} de {score.total} questões corretas
                            </p>
                        </div>

                        <Button onClick={handleClose} className="bg-blue-600 hover:bg-blue-700">
                            Fechar
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
