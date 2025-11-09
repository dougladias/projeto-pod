import { Trophy } from 'lucide-react';
import type { LevelButtonProps } from '@/types/playQuiz';
import nivel1Image from '@/assets/nivel_1.webp';
import nivel2Image from '@/assets/nivel_2.webp';
import nivel3Image from '@/assets/nivel_3.webp';
import nivel4Image from '@/assets/nivel_4.webp';
import nivel5Image from '@/assets/nivel_5.webp';
import nivel6Image from '@/assets/nivel_6.webp';

const nivelImages = [nivel1Image, nivel2Image, nivel3Image, nivel4Image, nivel5Image, nivel6Image];

export function LevelButton({
    quiz,
    index,
    isLocked,
    isLoading,
    onMouseEnter,
    onMouseLeave,
    onClick,
}: LevelButtonProps) {
    const nivelNumber = index + 1;

    return (
        <div
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`relative transition-all duration-300 ${
                isLocked
                    ? 'cursor-not-allowed opacity-50 grayscale'
                    : 'hover:scale-110 active:scale-95 cursor-pointer hover:drop-shadow-[0_0_20px_rgba(255,255,0,0.8)] hover:brightness-125'
            } ${isLoading ? 'pointer-events-none' : ''}`}
        >
            <img
                src={nivelImages[index]}
                alt={`Nível ${nivelNumber}`}
                className={`object-contain drop-shadow-xl transition-all duration-300 ${
                    nivelNumber === 3
                        ? 'w-32 h-32 md:w-40 md:h-40'
                        : nivelNumber === 4
                        ? 'w-40 h-40 md:w-48 md:h-48'
                        : nivelNumber === 5
                        ? 'w-44 h-44 md:w-52 md:h-52'
                        : 'w-28 h-28 md:w-36 md:h-36'
                }`}
            />

            {/* Badge de completado */}
            {quiz.is_completed && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1.5 border-2 border-white shadow-lg">
                    <Trophy className="w-4 h-4 text-yellow-900" />
                </div>
            )}
        </div>
    );
}
