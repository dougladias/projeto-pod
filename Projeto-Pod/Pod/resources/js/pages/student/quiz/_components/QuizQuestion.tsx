import { QuizTimer } from './QuizTimer';
import type { QuizQuestionProps } from '@/types/quiz';

export function QuizQuestion({ currentQuestionIndex, question, progress, timeLeft, formatTime }: QuizQuestionProps) {
    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-black text-[#1C4BCB]">
                    {currentQuestionIndex + 1}. PERGUNTA
                </h2>
                <QuizTimer timeLeft={timeLeft} formatTime={formatTime} />
            </div>

            {/* Pergunta */}
            <p className="text-xl font-medium text-gray-900 leading-relaxed mb-6">
                {question.texto_pergunta}
            </p>

            {/* Barra de progresso */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                <div
                    className="bg-[#1C4BCB] h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}
