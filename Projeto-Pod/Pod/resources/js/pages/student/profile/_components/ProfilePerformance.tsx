import type { ProfilePerformanceProps } from '@/types/profile';

export function ProfilePerformance({ averageAccuracy, rankingPosition }: ProfilePerformanceProps) {
    return (
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
    );
}
