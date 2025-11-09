import { router } from '@inertiajs/react';
import logoQuiz from '@/assets/LogoQuiz.webp';
import type { QuizResultProps } from '@/types/quiz';

export function QuizResult({ correctAnswersCount, totalQuestions }: QuizResultProps) {
    const scorePercentage = Math.round((correctAnswersCount / totalQuestions) * 100);

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
                                Você acertou <span className="font-bold text-green-600">{correctAnswersCount}</span> de {totalQuestions} perguntas
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
                            className="w-full bg-[#1C4BCB] hover:bg-[#1640a8] text-white font-black text-xl py-4 px-8 rounded-xl transition-colors shadow-lg cursor-pointer"
                        >
                            VER MEUS QUIZZES
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
