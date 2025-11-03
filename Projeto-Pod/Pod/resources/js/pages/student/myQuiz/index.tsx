import StudentLayout from '@/layouts/student/student-layout';
import { Card } from '@/components/ui/card';
import { BookOpen, Target, Trophy, TrendingUp } from 'lucide-react';

interface Stats {
    completed_quizzes: number;
    total_quizzes: number;
    total_attempts: number;
    total_score: number;
    average_accuracy: number;
    best_score: number;
}

interface Props {
    stats: Stats;
}

export default function QuizzesIndex({ stats }: Props) {
    // Calcula a porcentagem de progresso
    const progressPercentage = Math.round((stats.completed_quizzes / stats.total_quizzes) * 100) || 0;

    return (
        <StudentLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3">
                    <div className="w-1 rounded-full" style={{ backgroundColor: '#091ABC', height: '1em' }}></div>
                    <h1 className="text-sm font-semibold text-black uppercase tracking-wider">MEUS QUIZZES</h1>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Card 1: Completos */}
                    <Card className="p-6">
                        <div className="flex items-center justify-center gap-4 h-full">
                            <BookOpen className="w-12 h-12 flex-shrink-0" style={{ color: '#091ABC' }} />
                            <div>
                                <p className="text-sm text-black mb-1">Completos</p>
                                <p className="text-3xl font-bold leading-tight" style={{ color: '#091ABC' }}>{stats.completed_quizzes}/{stats.total_quizzes}</p>
                            </div>
                        </div>
                    </Card>

                    {/* Card 2: Precisão Média */}
                    <Card className="p-6">
                        <div className="flex items-center justify-center gap-4 h-full">
                            <Target className="w-12 h-12 flex-shrink-0" style={{ color: '#CB1C1C' }} />
                            <div>
                                <p className="text-sm text-black mb-1">Precisão Média</p>
                                <p className="text-3xl font-bold leading-tight" style={{ color: '#091ABC' }}>{stats.average_accuracy || 0}%</p>
                            </div>
                        </div>
                    </Card>

                    {/* Card 3: Pontos Totais */}
                    <Card className="p-6">
                        <div className="flex items-center justify-center gap-4 h-full">
                            <Trophy className="w-12 h-12 flex-shrink-0" style={{ color: '#F4D03F' }} />
                            <div>
                                <p className="text-sm text-black mb-1">Pontos Totais</p>
                                <p className="text-3xl font-bold leading-tight" style={{ color: '#091ABC' }}>{stats.total_score || 0}</p>
                            </div>
                        </div>
                    </Card>

                    {/* Card 4: Tentativas */}
                    <Card className="p-6">
                        <div className="flex items-center justify-center gap-4 h-full">
                            <TrendingUp className="w-12 h-12 flex-shrink-0" style={{ color: '#091ABC' }} />
                            <div>
                                <p className="text-sm text-black mb-1">Tentativas</p>
                                <p className="text-3xl font-bold leading-tight" style={{ color: '#091ABC' }}>{stats.total_attempts || 0}</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Progress Bar Card */}
                <Card className="p-6">
                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-2" style={{ color: '#091ABC' }}>Progresso Geral</h2>
                        <p className="text-xs text-black">Você completou {stats.completed_quizzes} de {stats.total_quizzes} quizzes</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div
                            className="h-full rounded-full transition-all"
                            style={{
                                width: `${progressPercentage}%`,
                                backgroundColor: '#091ABC'
                            }}
                        />
                    </div>
                    <p className="text-right text-sm font-bold mt-2" style={{ color: '#091ABC' }}>{progressPercentage}%</p>
                </Card>
            </div>
        </StudentLayout>
    );
}
