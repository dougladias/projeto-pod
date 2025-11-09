import NikoAvatar from '@/assets/Niko.webp';
import TinaAvatar from '@/assets/Tina.webp';
import AvatarM from '@/assets/avatarM.webp';
import { User, Crown } from 'lucide-react';
import type { RankingListItemProps } from '@/types/ranking';

export default function RankingListItem({
    position,
    name,
    avatar,
    level,
    totalQuizzes,
    points,
    accuracy,    
    badge,
}: RankingListItemProps) {
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

    // Get badge styles based on position
    const getBadgeConfig = () => {
        if (position === 1) {
            return {
                text: '1º Lugar',
                className: 'bg-blue-600 text-white',
            };
        }
        if (position === 2) {
            return {
                text: '2º Lugar',
                className: 'bg-gray-400 text-white',
            };
        }
        if (position === 3) {
            return {
                text: '3º Lugar',
                className: 'bg-orange-400 text-white',
            };
        }
        if (badge) {
            return {
                text: badge,
                className: 'bg-purple-600 text-white',
            };
        }
        return null;
    };

    const badgeConfig = getBadgeConfig();

    return (
        <div className="bg-white hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4 p-4">
                {/* Position Badge */}
                <div className="flex-shrink-0 w-12 text-center">
                    {position <= 3 ? (
                        <Crown
                            className={`w-6 h-6 mx-auto ${
                                position === 1
                                    ? 'text-yellow-500'
                                    : position === 2
                                    ? 'text-gray-400'
                                    : 'text-orange-400'
                            }`}
                        />
                    ) : (
                        <span className="text-lg font-bold text-gray-600">#{position}</span>
                    )}
                </div>

                {/* Avatar and Name */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    {avatarSrc ? (
                        <img
                            src={avatarSrc}
                            alt={name}
                            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                        />
                    ) : (
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                            <User className="w-6 h-6 text-white" />
                        </div>
                    )}
                    <div className="min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate">{name}</h4>
                        <p className="text-xs text-gray-500">
                            Nível {level} • {totalQuizzes} {totalQuizzes === 1 ? 'quiz' : 'quizzes'}
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 flex-shrink-0">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{points}</div>
                        <div className="text-xs text-gray-500">Pontos</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{Math.round(accuracy)}%</div>
                        <div className="text-xs text-gray-500">Precisão</div>
                    </div>
                </div>

                {/* Badge */}
                {badgeConfig && (
                    <div className="flex-shrink-0">
                        <div className={`px-4 py-2 rounded-lg text-xs font-semibold ${badgeConfig.className}`}>
                            {badgeConfig.text}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
