import { CheckCircle, XCircle } from 'lucide-react';
import type { LoadingAnimationProps } from '@/types/quiz';

export function LoadingAnimation({ show, isCorrect }: LoadingAnimationProps) {
    if (!show) return null;

    // Se ainda está carregando (isCorrect é null ou undefined)
    if (isCorrect === null || isCorrect === undefined) {
        return (
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
        );
    }

    // Mostra resultado (verde ou vermelho)
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] animate-in fade-in duration-300">
            <div className={`rounded-3xl p-12 flex flex-col items-center gap-6 animate-in zoom-in duration-300 ${
                isCorrect ? 'bg-green-500' : 'bg-red-500'
            }`}>
                {/* Círculo com ícone */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                    {isCorrect ? (
                        <CheckCircle className="w-32 h-32 text-white" strokeWidth={3} />
                    ) : (
                        <XCircle className="w-32 h-32 text-white" strokeWidth={3} />
                    )}
                </div>
                <p className="text-2xl font-bold text-white">
                    {isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta!'}
                </p>
            </div>
        </div>
    );
}
