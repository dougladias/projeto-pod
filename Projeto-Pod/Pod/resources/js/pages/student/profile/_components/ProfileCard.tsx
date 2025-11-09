import { ProfileHeader } from './ProfileHeader';
import { ProfileAvatar } from './ProfileAvatar';
import { ProfileStats } from './ProfileStats';
import { ProfilePerformance } from './ProfilePerformance';
import type { ProfileCardProps } from '@/types/profile';

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

    return (
        <div className="w-full h-full flex flex-col">
            <ProfileHeader />

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex-1 flex flex-col -mb-10">
                {/* Avatar */}
                <ProfileAvatar name={name} avatar={avatar} />

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
                <ProfileStats
                    totalPoints={totalPoints}
                    totalAchievements={totalAchievements}
                />

                {/* Performance Stats */}
                <ProfilePerformance
                    averageAccuracy={averageAccuracy}
                    rankingPosition={rankingPosition}
                />
            </div>
        </div>
    );
}
