import StudentLayout from '@/layouts/student/student-layout';
import { StatsCard } from './_components/stats-card';
import { ProgressBar } from './_components/progress-bar';

interface Stats {
    completed_quizzes: number;
    total_quizzes: number;
    total_attempts: number;
    average_score: number;
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
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Meus Quizzes</h1>
                    <p className="text-gray-600 mt-1">Pratique e teste seus conhecimentos</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <StatsCard
                        type="completed"
                        value={`${stats.completed_quizzes}/${stats.total_quizzes}`}
                        label="Completos"
                    />
                    <StatsCard
                        type="average"
                        value={`${stats.average_score}%`}
                        label="Média"
                    />
                    <StatsCard
                        type="best"
                        value={`${stats.best_score}%`}
                        label="Melhor Score"
                    />
                    <StatsCard
                        type="rank"
                        value="Top 5%"
                        label="Tentativas"
                    />
                </div>

                {/* Progress Bar */}
                <ProgressBar
                    completed={stats.completed_quizzes}
                    total={stats.total_quizzes}
                    percentage={progressPercentage}
                />
            </div>
        </StudentLayout>
    );
}
