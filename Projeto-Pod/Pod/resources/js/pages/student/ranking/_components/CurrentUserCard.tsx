import NikoAvatar from '@/assets/Niko.webp';
import TinaAvatar from '@/assets/Tina.webp';
import AvatarM from '@/assets/avatarM.webp';
import { User, Crown } from 'lucide-react';

interface CurrentUserCardProps {
    name: string;
    avatar?: string | null;
    totalCompletedQuizzes: number;
    totalPoints: number;
    averageAccuracy: number;
    rankingPosition: number;
}

export default function CurrentUserCard({
    name,
    avatar,
    totalCompletedQuizzes,
    totalPoints,
    averageAccuracy,
    rankingPosition,
}: CurrentUserCardProps) {
    // Calculate level based on completed quizzes
    const level = Math.floor(totalCompletedQuizzes / 5);

    // Map avatar name to imported asset
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
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                    {avatarSrc ? (
                        <img
                            src={avatarSrc}
                            alt={name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                    ) : (
                        <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center border-4 border-white shadow-lg">
                            <User className="w-10 h-10 text-white" />
                        </div>
                    )}
                </div>

                {/* User Info */}
                <div className="flex-1">
                    <h3 className="text-sm text-gray-600 mb-1">Olá, {name.split(' ')[0]}</h3>
                    <div className="flex items-center gap-2">
                        <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                            <Crown className="w-3 h-3 fill-yellow-600 text-yellow-600" />
                            Nível {level}
                        </span>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4">
                    <div className="rounded-lg px-4 py-3 flex flex-col items-center justify-center min-w-[80px]" style={{ backgroundColor: '#E9EFFF' }}>
                        <div className="text-2xl font-bold text-blue-600">{totalPoints}</div>
                        <div className="text-xs text-gray-600">Pontos</div>
                    </div>
                    <div className="rounded-lg px-4 py-3 flex flex-col items-center justify-center min-w-[80px]" style={{ backgroundColor: '#E9EFFF' }}>
                        <div className="text-2xl font-bold text-blue-600">{Math.round(averageAccuracy)}%</div>
                        <div className="text-xs text-gray-600">Precisão</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
