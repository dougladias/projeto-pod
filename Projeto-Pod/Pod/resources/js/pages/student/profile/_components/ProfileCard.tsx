import NikoAvatar from '@/assets/Niko.webp';
import TinaAvatar from '@/assets/Tina.webp';
import AvatarM from '@/assets/avatarM.webp';
import { User } from 'lucide-react';

interface ProfileCardProps {
    name: string;
    avatar?: string | null;
    totalCompletedQuizzes: number;
    averageAccuracy: number;
    rankingPosition: number;
    totalPoints: number;
    totalAchievements: number;
}

export default function ProfileCard({
    name,
    avatar,
    totalCompletedQuizzes,
    averageAccuracy,
    rankingPosition,
    totalPoints,
    totalAchievements,
}: ProfileCardProps) {
    // Calculate level based on completed quizzes
    const level = Math.floor(totalCompletedQuizzes / 5);

    // Map avatar name to imported asset (same logic as sidebar)
    const getAvatarSrc = (avatarName?: string | null) => {
        if (!avatarName) return null;

        const avatarMap: Record<string, string> = {
            'niko': NikoAvatar,
            'niko.svg': NikoAvatar,
            'tina': TinaAvatar,
            'tina.svg': TinaAvatar,
            'avatarm': AvatarM,
            'avatarm.svg': AvatarM,
        };

        const normalized = avatarName.toLowerCase();
        return avatarMap[normalized] || null;
    };

    const avatarSrc = getAvatarSrc(avatar);

    return (
        <div className="w-full h-full flex flex-col">
            <h2 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide flex items-center gap-2">
                <div className="w-1 h-[1em] bg-blue-600 rounded-full flex-shrink-0"></div>
                Meu Perfil
            </h2>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex-1 flex flex-col -mb-10">
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                    {avatarSrc ? (
                        <img
                            src={avatarSrc}
                            alt={name}
                            className="w-24 h-24 rounded-full object-cover"
                        />
                    ) : (
                        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">
                            <User className="w-12 h-12 text-white" />
                        </div>
                    )}
                </div>

                {/* Name */}
                <h3 className="text-center text-xl font-bold text-gray-900 mb-2">
                    {name}
                </h3>

                {/* Level and Quizzes */}
                <div className="flex justify-center gap-4 mb-6 text-sm">
                    <span className="text-gray-600">
                        <span className="font-medium text-gray-900">
                            Nível {level}
                        </span>
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">
                        <span className="font-medium text-gray-900">
                            {totalCompletedQuizzes} Quizzes
                        </span>
                    </span>
                </div>

                {/* Stats */}
                <div className="space-y-3 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Pontos Totais</span>
                        <span className="text-sm font-semibold text-gray-900">
                            {totalPoints}
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Conquistas</span>
                        <span className="text-sm font-semibold text-gray-900">
                            {totalAchievements}
                        </span>
                    </div>
                </div>

                {/* Performance Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">
                            {Math.round(averageAccuracy)}%
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                            Precisão
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">
                            #{rankingPosition}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                            Ranking
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
