import { Clock } from 'lucide-react';
import type { QuizTimerProps } from '@/types/quiz';

export function QuizTimer({ timeLeft, formatTime }: QuizTimerProps) {
    return (
        <div className="flex items-center gap-2 text-gray-700">
            <Clock className="w-6 h-6" />
            <span className={`font-bold text-xl ${
                timeLeft < 60 ? 'text-red-600' : 'text-gray-900'
            }`}>
                {formatTime(timeLeft)}
            </span>
        </div>
    );
}
