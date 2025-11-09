import { Card } from '@/components/ui/card';
import { CircleCheckBig, Trophy, TrendingUp, Zap } from 'lucide-react';
import type { StatsCardsProps } from '@/types/myQuiz';

export function StatsCards({ stats }: StatsCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Completos */}
            <Card className="p-6">
                <div className="flex items-center justify-center gap-4 h-full">
                    <CircleCheckBig className="w-12 h-12 flex-shrink-0" style={{ color: '#0A841C' }} />
                    <div className="flex flex-col">
                        <p className="text-3xl font-bold leading-tight mb-1" style={{ color: '#091ABC' }}>
                            {stats.completed_quizzes}/{stats.total_quizzes}
                        </p>
                        <p className="text-sm text-black">Completos</p>
                    </div>
                </div>
            </Card>

            {/* Card 2: Precisão Média */}
            <Card className="p-6">
                <div className="flex items-center justify-center gap-4 h-full">
                    <TrendingUp className="w-12 h-12 flex-shrink-0" style={{ color: '#0A841C' }} />
                    <div className="flex flex-col">
                        <p className="text-3xl font-bold leading-tight mb-1" style={{ color: '#091ABC' }}>
                            {stats.average_accuracy || 0}%
                        </p>
                        <p className="text-sm text-black">Média</p>
                    </div>
                </div>
            </Card>

            {/* Card 3: Pontos Totais */}
            <Card className="p-6">
                <div className="flex items-center justify-center gap-4 h-full">
                    <Trophy className="w-12 h-12 flex-shrink-0" style={{ color: '#F4D03F' }} />
                    <div className="flex flex-col">
                        <p className="text-3xl font-bold leading-tight mb-1" style={{ color: '#091ABC' }}>
                            {stats.total_score || 0}
                        </p>
                        <p className="text-sm text-black">Pontos Totais</p>
                    </div>
                </div>
            </Card>

            {/* Card 4: Tentativas */}
            <Card className="p-6">
                <div className="flex items-center justify-center gap-4 h-full">
                    <Zap className="w-12 h-12 flex-shrink-0" style={{ color: '#640ABB' }} />
                    <div className="flex flex-col">
                        <p className="text-3xl font-bold leading-tight mb-1" style={{ color: '#091ABC' }}>
                            {stats.total_attempts || 0}
                        </p>
                        <p className="text-sm text-black">Tentativas</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
