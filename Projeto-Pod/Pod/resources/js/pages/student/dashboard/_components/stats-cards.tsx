import { Card } from '@/components/ui/card';
import { Trophy, Target, AlarmClock } from 'lucide-react';
import type { Stats } from '@/types/dashboard';

// Props: estatísticas do usuário
interface Props {
    stats: Stats;
}

// Componente: 4 cards de estatísticas (Nível, Ranking, Precisão, Sequência)
export function StatsCards({ stats }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Nível */}
            <Card className="p-6 relative overflow-hidden">
                <div className="relative z-10">
                    <p className="text-xs text-black mb-1">Nível Atual</p>
                    <p className="text-3xl font-bold" style={{ color: '#091ABC' }}>Nível {stats.level}</p>
                    <p className="text-xs text-black mt-1">{stats.total_points} pts 🔥</p>
                </div>
                {/* Barra de progresso decorativa */}
                <div className="mt-3 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                        className="h-full rounded-full transition-all"
                        style={{
                            width: `${(stats.total_points % 500) / 5}%`,
                            backgroundColor: '#091ABC'
                        }}
                    />
                </div>
            </Card>

            {/* Card 2: Ranking */}
            <Card className="p-6">
                <div className="flex items-center justify-center gap-4 h-full">
                    <Trophy className="w-20 h-20 flex-shrink-0" style={{ color: '#F4D03F' }} />
                    <div>
                        <p className="text-sm text-black mb-1">Ranking</p>
                        <p className="text-4xl font-bold leading-tight" style={{ color: '#091ABC' }}>#{stats.ranking_position}</p>
                        <p className="text-xs text-black mt-1">Entre os melhores</p>
                    </div>
                </div>
            </Card>

            {/* Card 3: Precisão */}
            <Card className="p-6">
                <div className="flex items-center justify-center gap-4 h-full">
                    <Target className="w-20 h-20 flex-shrink-0" style={{ color: '#CB1C1C' }} />
                    <div>
                        <p className="text-sm text-black mb-1">Precisão</p>
                        <p className="text-4xl font-bold leading-tight" style={{ color: '#091ABC' }}>{stats.average_accuracy}%</p>
                        <p className="text-xs text-black mt-1">{stats.total_completed_quizzes} Quizzes</p>
                    </div>
                </div>
            </Card>

            {/* Card 4: Sequência */}
            <Card className="p-6">
                <div className="flex items-center justify-center gap-4 h-full">
                    <AlarmClock className="w-20 h-20 flex-shrink-0" style={{ color: '#091ABC' }} />
                    <div>
                        <p className="text-sm text-black mb-1">Sequência</p>
                        <p className="text-4xl font-bold leading-tight" style={{ color: '#091ABC' }}>{stats.streak} dias</p>
                        <p className="text-xs text-black mt-1">Continue assim! 🔥</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
