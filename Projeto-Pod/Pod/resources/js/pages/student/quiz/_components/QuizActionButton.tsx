import type { QuizActionButtonProps } from '@/types/quiz';

export function QuizActionButton({
    isAnswered,
    isSubmitting,
    selectedOption,
    currentQuestionIndex,
    totalQuestions,
    onConfirm,
    onNext,
}: QuizActionButtonProps) {
    if (!isAnswered) {
        return (
            <button
                onClick={onConfirm}
                disabled={selectedOption === null || isSubmitting}
                className="w-full bg-[#1C4BCB] hover:bg-[#1640a8] text-white font-black text-xl py-5 px-8 rounded-2xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-lg"
            >
                {isSubmitting ? 'ENVIANDO...' : 'CONFIRMAR'}
            </button>
        );
    }

    return (
        <button
            onClick={onNext}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-xl py-5 px-8 rounded-2xl transition-colors cursor-pointer shadow-lg"
        >
            {currentQuestionIndex === totalQuestions - 1
                ? 'FINALIZAR QUIZ'
                : 'PRÓXIMA PERGUNTA'}
        </button>
    );
}
