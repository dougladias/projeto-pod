import { Card } from '@/components/ui/card';
import { Trophy } from 'lucide-react';
import type { TopRankingUser } from '@/types/dashboard';

// Props: top 3 usuários do ranking
interface Props {
    topRanking: TopRankingUser[];
}

// Componente: seção de rankings com top 3 jogadores
export function RankingSection({ topRanking }: Props) {
    return (
        <Card className="p-6 min-h-[400px]">
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                    <Trophy className="w-5 h-5" style={{ color: '#091ABC' }} />
                    <h2 className="text-lg font-bold" style={{ color: '#091ABC' }}>Rankings</h2>
                </div>
                <p className="text-xs text-black">Top 3 melhores jogadores</p>
            </div>

            {/* Lista dos top 3 usuários */}
            <div className="space-y-3">
                {topRanking.map((user) => {
                    const crownColors = [
                        '#F4D03F', // 1º lugar - Dourado
                        '#C0C0C0', // 2º lugar - Prata
                        '#CD7F32', // 3º lugar - Bronze
                    ];

                    {/* Item do usuário no ranking */}
                    return (
                        <div
                            key={user.position}
                            className="flex items-center gap-3 p-3 rounded-lg hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: '#D5DFFF' }}
                        >
                            <div className="flex items-center justify-center text-4xl flex-shrink-0 w-12">
                                <span style={{ color: crownColors[user.position - 1] }}>👑</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm text-gray-900 truncate">
                                    {user.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {user.total_points} pontos • {user.completed_quizzes} quizzes
                                </p>
                            </div>
                            <div className="text-right flex-shrink-0">
                                <p className="text-lg font-bold" style={{ color: '#091ABC' }}>#{user.position}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}
