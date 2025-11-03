import StudentLayout from '@/layouts/student/student-layout';
import { StatsCards } from './_components/stats-cards';
import { RecentQuizzes } from './_components/recent-quizzes';
import { RankingSection } from './_components/ranking-section';
import { QuickActions } from './_components/quick-actions';
import type { DashboardProps } from '@/types/dashboard';

// Student Dashboard Page Component
export default function StudentDashboard({
    stats,
    recent_activities,
    top_ranking
}: DashboardProps) {
    return (
        <StudentLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3">
                    <div className="w-1 rounded-full" style={{ backgroundColor: '#091ABC', height: '1em' }}></div>
                    <h1 className="text-sm font-semibold text-black uppercase tracking-wider">DASHBOARD</h1>
                </div>

                {/* Stats Cards */}
                <StatsCards stats={stats} />

                {/* Grid Principal: Quizzes Recentes + Rankings */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <RecentQuizzes activities={recent_activities} />
                    <RankingSection topRanking={top_ranking} />
                </div>

                {/* Ações Rápidas */}
                <QuickActions />
            </div>
        </StudentLayout>
    );
}
