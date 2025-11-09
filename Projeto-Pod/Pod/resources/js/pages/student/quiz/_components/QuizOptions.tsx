import { CheckCircle, XCircle } from 'lucide-react';
import type { QuizOptionsProps } from '@/types/quiz';

export function QuizOptions({ answers, selectedOption, isAnswered, feedback, onSelectOption }: QuizOptionsProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 lg:grid-rows-2">
            {answers.map((resposta, index) => {
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
                        onClick={() => onSelectOption(resposta.id)}
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
    );
}
