import { useState, useEffect, useCallback } from 'react';
import { router } from '@inertiajs/react';
import StudentLayout from '@/layouts/student/student-layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

interface Question {
    id: number;
    texto_pergunta: string;
    categoria: string;
    points: number;
    respostas: {
        id: number;
        texto_resposta: string;
    }[];
}

interface Quiz {
    id: number;
    title: string;
    description: string;
    theme: string;
    difficulty: string;
    time_limit_minutes: number;
    points_reward: number;
    total_questions: number;
}

interface Props {
    quiz: Quiz;
    questions: Question[];
    attempt_id: number;
}

export default function QuizPage({ quiz, questions, attempt_id }: Props) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [timeLeft, setTimeLeft] = useState(quiz.time_limit_minutes * 60);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [feedback, setFeedback] = useState<{
        is_correct: boolean;
        correct_resposta_id: number;
    } | null>(null);

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const handleFinish = useCallback(() => {
        if (isSubmitting) return;

        setIsSubmitting(true);

        router.post(
            `/app/quiz/attempts/${attempt_id}/finish`,
            {
                time_spent_seconds: quiz.time_limit_minutes * 60 - timeLeft,
            },
            {
                onError: (errors) => {
                    console.error('Erro ao finalizar quiz:', errors);
                    setIsSubmitting(false);
                },
            }
        );
    }, [attempt_id, isSubmitting, timeLeft, quiz.time_limit_minutes]);

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

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleSelectOption = (optionId: number) => {
        if (isAnswered) return;
        setSelectedOption(optionId);
    };

    const handleConfirm = async () => {
        if (selectedOption === null || isAnswered) return;

        setIsSubmitting(true);

        try {
            const response = await axios.post(
                `/app/quiz/attempts/${attempt_id}/answer`,
                {
                    pergunta_id: currentQuestion.id,
                    resposta_id: selectedOption,
                }
            );

            // Mostra feedback
            setFeedback(response.data);
            setIsAnswered(true);
        } catch (error) {
            console.error('Erro ao enviar resposta:', error);
            alert('Erro ao enviar resposta. Tente novamente.');
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

    const difficultyColors = {
        facil: 'bg-green-100 text-green-700 border-green-200',
        medio: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        dificil: 'bg-red-100 text-red-700 border-red-200',
    };

    return (
        <StudentLayout>
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header */}
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-gray-900">{quiz.title}</h1>
                            <p className="text-sm text-gray-600">{quiz.theme}</p>
                        </div>
                        <Badge
                            variant="outline"
                            className={`${
                                difficultyColors[quiz.difficulty as keyof typeof difficultyColors]
                            } border`}
                        >
                            {quiz.difficulty}
                        </Badge>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span
                                className={`font-medium ${
                                    timeLeft < 60 ? 'text-red-600 font-bold' : ''
                                }`}
                            >
                                {formatTime(timeLeft)}
                            </span>
                        </div>
                        <div>
                            Pergunta {currentQuestionIndex + 1} de {questions.length}
                        </div>
                    </div>

                    <Progress value={progress} className="mt-4" />
                </Card>

                {/* Question Card */}
                <Card className="p-8">
                    <div className="mb-6">
                        <Badge variant="outline" className="mb-4">
                            {currentQuestion.categoria}
                        </Badge>
                        <h2 className="text-xl font-semibold text-gray-900 leading-relaxed">
                            {currentQuestion.texto_pergunta}
                        </h2>
                        <p className="text-sm text-gray-500 mt-2">
                            {currentQuestion.points} pontos
                        </p>
                    </div>

                    {/* Options */}
                    <div className="space-y-3">
                        {currentQuestion.respostas.map((resposta, index) => {
                            const isSelected = selectedOption === resposta.id;
                            const isCorrectAnswer = feedback && resposta.id === feedback.correct_resposta_id;
                            const isWrongAnswer = feedback && isSelected && !feedback.is_correct;
                            const letter = String.fromCharCode(65 + index); // A, B, C, D

                            let buttonClass = 'border-gray-200 hover:border-gray-300 hover:bg-gray-50';
                            let badgeClass = 'bg-gray-100 text-gray-600';
                            let icon = null;

                            if (isAnswered) {
                                if (isCorrectAnswer) {
                                    buttonClass = 'border-green-500 bg-green-50';
                                    badgeClass = 'bg-green-500 text-white';
                                    icon = <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />;
                                } else if (isWrongAnswer) {
                                    buttonClass = 'border-red-500 bg-red-50';
                                    badgeClass = 'bg-red-500 text-white';
                                    icon = <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />;
                                }
                            } else if (isSelected) {
                                buttonClass = 'border-blue-500 bg-blue-50';
                                badgeClass = 'bg-blue-500 text-white';
                                icon = <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />;
                            }

                            return (
                                <button
                                    key={resposta.id}
                                    onClick={() => handleSelectOption(resposta.id)}
                                    disabled={isAnswered}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${buttonClass} ${
                                        isAnswered ? 'cursor-not-allowed' : ''
                                    }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div
                                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold ${badgeClass}`}
                                        >
                                            {letter}
                                        </div>
                                        <span className="text-gray-900 flex-1">
                                            {resposta.texto_resposta}
                                        </span>
                                        {icon}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Feedback */}
                    {feedback && (
                        <div
                            className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
                                feedback.is_correct
                                    ? 'bg-green-50 border-2 border-green-200'
                                    : 'bg-red-50 border-2 border-red-200'
                            }`}
                        >
                            {feedback.is_correct ? (
                                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                            ) : (
                                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                            )}
                            <div className="flex-1">
                                <p
                                    className={`font-semibold ${
                                        feedback.is_correct ? 'text-green-900' : 'text-red-900'
                                    }`}
                                >
                                    {feedback.is_correct ? 'Correto! 🎉' : 'Incorreto 😔'}
                                </p>
                                <p
                                    className={`text-sm mt-1 ${
                                        feedback.is_correct ? 'text-green-700' : 'text-red-700'
                                    }`}
                                >
                                    {feedback.is_correct
                                        ? 'Parabéns! Você acertou a resposta.'
                                        : 'Não foi dessa vez. A resposta correta está destacada em verde.'}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex justify-between items-center mt-8 pt-6 border-t">
                        <Button
                            variant="outline"
                            onClick={() => {
                                if (
                                    confirm(
                                        'Tem certeza que deseja sair? Seu progresso será perdido.'
                                    )
                                ) {
                                    router.visit('/app/playQuiz');
                                }
                            }}
                        >
                            Sair
                        </Button>

                        {!isAnswered ? (
                            <Button
                                onClick={handleConfirm}
                                disabled={selectedOption === null || isSubmitting}
                                className="px-8"
                            >
                                {isSubmitting ? 'Enviando...' : 'Confirmar Resposta'}
                            </Button>
                        ) : (
                            <Button onClick={handleNext} className="px-8">
                                {currentQuestionIndex === questions.length - 1
                                    ? 'Finalizar Quiz'
                                    : 'Próxima Pergunta'}
                            </Button>
                        )}
                    </div>
                </Card>
            </div>
        </StudentLayout>
    );
}
