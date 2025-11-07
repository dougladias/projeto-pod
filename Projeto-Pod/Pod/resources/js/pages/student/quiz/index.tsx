import { useState, useEffect, useCallback } from 'react';
import { router, Link } from '@inertiajs/react';
import { Clock, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import axios from 'axios';
import logoQuiz from '@/assets/LogoQuiz.webp';

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
    const [isFinished, setIsFinished] = useState(false);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [showAnimation, setShowAnimation] = useState(false);
    const [feedback, setFeedback] = useState<{
        is_correct: boolean;
        correct_resposta_id: number;
    } | null>(null);

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const handleFinish = useCallback(() => {
        if (isSubmitting || isFinished) return;

        setIsSubmitting(true);

        // Envia para o backend de forma assíncrona
        router.post(
            `/app/quiz/attempts/${attempt_id}/finish`,
            {
                time_spent_seconds: quiz.time_limit_minutes * 60 - timeLeft,
            },
            {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    setIsSubmitting(false);
                    setIsFinished(true);
                },
                onError: (errors) => {
                    console.error('Erro ao finalizar quiz:', errors);
                    // Mesmo com erro, mostra a tela de resultado
                    setIsSubmitting(false);
                    setIsFinished(true);
                },
            }
        );
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
        setShowAnimation(true);

        try {
            const response = await axios.post(
                `/app/quiz/attempts/${attempt_id}/answer`,
                {
                    pergunta_id: currentQuestion.id,
                    resposta_id: selectedOption,
                }
            );

            // Aguarda 1.5s para mostrar a animação
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Mostra feedback
            setFeedback(response.data);
            setIsAnswered(true);
            setShowAnimation(false);

            // Atualiza contador de acertos
            if (response.data.is_correct) {
                setCorrectAnswersCount(prev => prev + 1);
            }
        } catch (error) {
            console.error('Erro ao enviar resposta:', error);
            setShowAnimation(false);
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

    // Se o quiz terminou, mostra tela de resultado
    if (isFinished) {
        const scorePercentage = Math.round((correctAnswersCount / questions.length) * 100);

        return (
            <div className="relative w-screen h-screen overflow-hidden" style={{
                background: 'linear-gradient(180deg, #1C4BCB 0%, #142E73 100%)'
            }}>
                {/* Tela de Resultado */}
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

                        {/* Card de resultado */}
                        <div className="bg-white rounded-3xl shadow-2xl w-full p-12 pt-16 text-center relative z-10">
                        <h1 className="text-4xl font-black text-[#1C4BCB] mb-4">
                            QUIZ FINALIZADO!
                        </h1>

                        <div className="my-8">
                            <div className="text-7xl font-black text-gray-900 mb-2">
                                {scorePercentage}%
                            </div>
                            <p className="text-xl text-gray-600">
                                Você acertou <span className="font-bold text-green-600">{correctAnswersCount}</span> de {questions.length} perguntas
                            </p>
                        </div>

                        {/* Mensagem baseada na pontuação */}
                        <div className="mb-8">
                            {scorePercentage >= 80 ? (
                                <p className="text-lg text-green-600 font-semibold">
                                    🎉 Excelente! Você mandou muito bem!
                                </p>
                            ) : scorePercentage >= 60 ? (
                                <p className="text-lg text-yellow-600 font-semibold">
                                    👍 Bom trabalho! Continue estudando!
                                </p>
                            ) : (
                                <p className="text-lg text-orange-600 font-semibold">
                                    💪 Não desista! Tente novamente!
                                </p>
                            )}
                        </div>

                        <button
                            onClick={() => router.visit('/app/myQuiz')}
                            className="w-full bg-[#1C4BCB] hover:bg-[#1640a8] text-white font-black text-xl py-4 px-8 rounded-xl transition-colors shadow-lg"
                        >
                            VER MEUS QUIZZES
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-screen h-screen overflow-hidden" style={{
            background: 'linear-gradient(180deg, #1C4BCB 0%, #142E73 100%)'
        }}>
            {/* Botão Voltar */}
            <Link
                href="/app/myQuiz"
                className="absolute top-4 left-4 flex items-center gap-2 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg shadow-lg transition-all hover:opacity-90 text-xs lg:text-base cursor-pointer"
                style={{ backgroundColor: '#091ABC', zIndex: 50 }}
            >
                <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="font-semibold">Meus Quizzes</span>
            </Link>

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

                    {/* Animação de feedback */}
                    {showAnimation && (
                        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] animate-in fade-in duration-300">
                            <div className="bg-white rounded-3xl p-12 flex flex-col items-center gap-6 animate-in zoom-in duration-300">
                                {/* Círculo girando */}
                                <div className="relative w-32 h-32">
                                    <div className="absolute inset-0 border-8 border-gray-200 rounded-full"></div>
                                    <div className="absolute inset-0 border-8 border-t-[#1C4BCB] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                                </div>
                                <p className="text-2xl font-bold text-gray-700">Verificando resposta...</p>
                            </div>
                        </div>
                    )}

                    {/* Card do quiz */}
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-h-[calc(100vh-100px)] overflow-y-auto px-12 py-8 pt-16 relative z-10">

                        {/* Header da Pergunta */}
                        <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-black text-[#1C4BCB]">
                                {currentQuestionIndex + 1}. PERGUNTA
                            </h2>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-6 h-6" />
                                <span className={`font-bold text-xl ${
                                    timeLeft < 60 ? 'text-red-600' : 'text-gray-900'
                                }`}>
                                    {formatTime(timeLeft)}
                                </span>
                            </div>
                        </div>

                        {/* Pergunta */}
                        <p className="text-xl font-medium text-gray-900 leading-relaxed mb-6">
                            {currentQuestion.texto_pergunta}
                        </p>

                        {/* Barra de progresso */}
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                            <div
                                className="bg-[#1C4BCB] h-3 rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    {/* Alternativas */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 lg:grid-rows-2">
                        {currentQuestion.respostas.map((resposta, index) => {
                            const isSelected = selectedOption === resposta.id;
                            const isCorrectAnswer = feedback && resposta.id === feedback.correct_resposta_id;
                            const isWrongAnswer = feedback && isSelected && !feedback.is_correct;
                            const letter = String.fromCharCode(65 + index); // A, B, C, D

                            let buttonStyle = 'bg-[#1C4BCB] hover:bg-[#1640a8]';
                            let borderColor = 'border-transparent';

                            if (isAnswered) {
                                if (isCorrectAnswer) {
                                    buttonStyle = 'bg-green-500';
                                    borderColor = 'border-green-400';
                                } else if (isWrongAnswer) {
                                    buttonStyle = 'bg-red-500';
                                    borderColor = 'border-red-400';
                                } else {
                                    buttonStyle = 'bg-gray-300';
                                }
                            } else if (isSelected) {
                                buttonStyle = 'bg-[#1C4BCB]';
                                borderColor = 'border-green-400 shadow-xl shadow-green-400/50';
                            }

                            return (
                                <button
                                    key={resposta.id}
                                    onClick={() => handleSelectOption(resposta.id)}
                                    disabled={isAnswered}
                                    className={`w-full h-full flex items-center text-left px-6 py-6 rounded-2xl text-white font-bold text-lg transition-all border-2 ${buttonStyle} ${borderColor} ${
                                        isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'
                                    }`}
                                >
                                    <div className="flex items-center gap-4 w-full">
                                        <span className="text-xl font-black">{letter})</span>
                                        <span className="flex-1 leading-relaxed">{resposta.texto_resposta}</span>
                                        {isAnswered && isCorrectAnswer && (
                                            <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                        )}
                                        {isWrongAnswer && (
                                            <XCircle className="w-5 h-5 flex-shrink-0" />
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Feedback após responder */}
                    {feedback && (
                        <div
                            className={`mb-8 p-5 rounded-2xl text-center font-semibold text-xl ${
                                feedback.is_correct
                                    ? 'bg-green-50 text-green-700 border-2 border-green-300'
                                    : 'bg-red-50 text-red-700 border-2 border-red-300'
                            }`}
                        >
                            {feedback.is_correct ? '✓ Resposta Correta!' : '✗ Resposta Incorreta'}
                        </div>
                    )}

                    {/* Botão de ação */}
                    {!isAnswered ? (
                        <button
                            onClick={handleConfirm}
                            disabled={selectedOption === null || isSubmitting}
                            className="w-full bg-[#1C4BCB] hover:bg-[#1640a8] text-white font-black text-xl py-5 px-8 rounded-2xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-lg"
                        >
                            {isSubmitting ? 'ENVIANDO...' : 'CONFIRMAR'}
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-xl py-5 px-8 rounded-2xl transition-colors cursor-pointer shadow-lg"
                        >
                            {currentQuestionIndex === questions.length - 1
                                ? 'FINALIZAR QUIZ'
                                : 'PRÓXIMA PERGUNTA'}
                        </button>
                    )}

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
