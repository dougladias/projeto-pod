import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import type { QuizHeaderProps } from '@/types/quiz';

export function QuizHeader({ backUrl = '/app/myQuiz' }: QuizHeaderProps) {
    return (
        /* Botão Voltar */
        <Link
            href={backUrl}
            className="absolute top-4 left-4 flex items-center gap-2 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg shadow-lg transition-all hover:opacity-90 text-xs lg:text-base cursor-pointer"
            style={{ backgroundColor: '#091ABC', zIndex: 50 }}
        >
            <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="font-semibold">Meus Quizzes</span>
        </Link>
    );
}
