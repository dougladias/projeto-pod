import { GraduationCap, TrendingUp, Target, Award } from 'lucide-react';

interface RankingStatsCardsProps {
    totalStudents: number;
    positionChange?: number;
    averageAccuracy: number;
    topPercentage: number;
}

export default function RankingStatsCards({
    totalStudents,
    positionChange = 0,
    averageAccuracy,
    topPercentage,
}: RankingStatsCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Total de Alunos */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900">{totalStudents}</div>
                        <div className="text-xs text-gray-500">Total de Alunos</div>
                    </div>
                </div>
            </div>

            {/* Posições esta semana */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-green-600">
                            {positionChange > 0 ? '+' : ''}{positionChange}
                        </div>
                        <div className="text-xs text-gray-500">Posições esta semana</div>
                    </div>
                </div>
            </div>

            {/* Precisão média */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900">{Math.round(averageAccuracy)}%</div>
                        <div className="text-xs text-gray-500">Precisão média</div>
                    </div>
                </div>
            </div>

            {/* Top % */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900">Top {topPercentage}%</div>
                        <div className="text-xs text-gray-500">Sua classificação</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
