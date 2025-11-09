import { Head } from '@inertiajs/react';
import StudentLayout from '@/layouts/student/student-layout';
import { RankingHeader } from './_components/RankingHeader';
import CurrentUserCard from './_components/CurrentUserCard';
import RankingStatsCards from './_components/RankingStatsCards';
import { RankingClassificationHeader } from './_components/RankingClassificationHeader';
import RankingListItem from './_components/RankingListItem';
import { EmptyRankingState } from './_components/EmptyRankingState';
import type { RankingPageProps } from '@/types/ranking';

export default function RankingIndex({
    ranking,
    user_context,
    stats,
    current_user,
}: RankingPageProps) {
    // Calculate top percentage
    const topPercentage = user_context.total_students > 0
        ? Math.round((user_context.user_position / user_context.total_students) * 100)
        : 0;

    return (
        <StudentLayout>
            <Head title="Ranking" />
            <div className="space-y-6">
                {/* Header */}
                <RankingHeader />

                {/* Current User Card */}
                <CurrentUserCard
                    name={current_user.name}
                    avatar={current_user.avatar}
                    totalCompletedQuizzes={current_user.total_completed_quizzes}
                    totalPoints={current_user.total_points}
                    averageAccuracy={current_user.average_accuracy}
                    rankingPosition={current_user.ranking_position}
                />

                {/* Stats Cards */}
                <RankingStatsCards
                    totalStudents={stats.total_students}
                    positionChange={0}
                    averageAccuracy={current_user.average_accuracy}
                    topPercentage={topPercentage}
                />

                {/* Classificação Geral Section */}
                <RankingClassificationHeader />

                {/* Ranking List */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
                    {ranking.length > 0 ? (
                        ranking.map((user) => (
                            <RankingListItem
                                key={user.user_id}
                                position={user.position}
                                name={user.name}
                                avatar={user.avatar}
                                level={Math.floor(user.completed_quizzes / 5)}
                                totalQuizzes={user.completed_quizzes}
                                points={user.total_points}
                                accuracy={user.average_accuracy}
                                sequencia={user.completed_quizzes}
                                badge={user.position <= 3 ? undefined : undefined}
                            />
                        ))
                    ) : (
                        <EmptyRankingState />
                    )}
                </div>
            </div>
        </StudentLayout>
    );
}
