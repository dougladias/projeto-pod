import type { ProfileStatsProps } from '@/types/profile';

export function ProfileStats({ totalPoints, totalAchievements }: ProfileStatsProps) {
    return (
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
    );
}
