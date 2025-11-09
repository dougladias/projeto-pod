import { Clock, BookOpen } from 'lucide-react';
import type { UnlockedBalloonProps } from '@/types/playQuiz';

export function UnlockedLevelBalloon({ nivelNumber, quiz, isLoading, onStartQuiz }: UnlockedBalloonProps) {
    return (
        <div className={`absolute z-50 animate-in fade-in duration-200 ${
            nivelNumber === 2 || nivelNumber === 4
                ? 'right-full top-1/2 transform -translate-y-1/2 mr-4'
                : nivelNumber === 1 || nivelNumber === 3
                ? 'left-full top-1/2 transform -translate-y-1/2 ml-4'
                : nivelNumber === 5 || nivelNumber === 6
                ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-4'
                : 'top-full left-1/2 transform -translate-x-1/2 mt-4'
        }`}>
            <div className="bg-white rounded-xl shadow-2xl p-4 min-w-[280px] max-w-[320px] border-4 border-blue-400">
                {/* Seta do balão */}
                {nivelNumber === 2 || nivelNumber === 4 ? (
                    <>
                        <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-blue-400"></div>
                        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white"></div>
                    </>
                ) : nivelNumber === 1 || nivelNumber === 3 ? (
                    <>
                        <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-blue-400"></div>
                        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-r-6 border-transparent border-r-white"></div>
                    </>
                ) : nivelNumber === 5 || nivelNumber === 6 ? (
                    <>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-400"></div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white"></div>
                    </>
                ) : (
                    <>
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-blue-400"></div>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-white"></div>
                    </>
                )}

                {/* Conteúdo */}
                <div className="space-y-3">
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 leading-tight">
                            {quiz.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                            {quiz.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-700">
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span>{quiz.time_limit_minutes} min</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4 text-green-600" />
                            <span>{quiz.total_questions} perguntas</span>
                        </div>
                    </div>

                    {quiz.is_completed && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                            <p className="text-xs text-green-800 font-medium">
                                ✓ Melhor pontuação: {quiz.best_score} pts
                            </p>
                            <p className="text-xs text-green-700 mt-0.5">
                                {quiz.attempts_count} tentativa(s)
                            </p>
                        </div>
                    )}

                    <button
                        onClick={onStartQuiz}
                        disabled={isLoading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                    >
                        {isLoading ? 'Carregando...' : quiz.is_completed ? 'Jogar Novamente' : 'Iniciar Quiz'}
                    </button>
                </div>
            </div>
        </div>
    );
}
