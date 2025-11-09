import { Card } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import type { ProgressCardProps } from '@/types/myQuiz';

export function ProgressCard({ completedQuizzes, totalQuizzes }: ProgressCardProps) {
    const progressPercentage = Math.round((completedQuizzes / totalQuizzes) * 100) || 0;

    return (
        <Card className="p-6">
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#091ABC' }}>
                        <TrendingUp className="w-3 h-3 text-white" />
                    </div>
                    <h2 className="text-lg font-bold" style={{ color: '#091ABC' }}>Progresso Geral</h2>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-black">Sua evolução nos quizzes</p>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#091ABC' }}>
                        {progressPercentage}% Completo
                    </span>
                </div>
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
            <p className="text-sm text-black mt-2">Você completou {completedQuizzes} de {totalQuizzes} quizzes</p>
        </Card>
    );
}
