import { Head } from '@inertiajs/react';
import StudentLayout from '@/layouts/student/student-layout';
import CurrentUserCard from './_components/CurrentUserCard';
import RankingStatsCards from './_components/RankingStatsCards';
import RankingListItem from './_components/RankingListItem';

interface RankingUser {
    position: number;
    user_id: number;
    name: string;
    avatar: string | null;
    school: string;
    school_year: string;
    total_points: number;
    completed_quizzes: number;
    average_accuracy: number;
}

interface UserContext {
    user_position: number;
    total_students: number;
    context: RankingUser[];
}

interface CurrentUser {
    name: string;
    avatar: string | null;
    total_points: number;
    total_completed_quizzes: number;
    average_accuracy: number;
    ranking_position: number;
}

interface Props {
    ranking: RankingUser[];
    user_context: UserContext;
    stats: {
        total_students: number;
        total_points_distributed: number;
        total_quizzes_completed: number;
        average_points_per_student: number;
    };
    top_three: RankingUser[];
    current_filter: string;
    available_filters: Record<string, string>;
    current_user: CurrentUser;
}

export default function RankingIndex({
    ranking,
    user_context,
    stats,
    current_user,
}: Props) {
    // Calculate top percentage
    const topPercentage = user_context.total_students > 0
        ? Math.round((user_context.user_position / user_context.total_students) * 100)
        : 0;

    return (
        <StudentLayout>
            <Head title="Ranking" />
            <div className="space-y-6">
                {/* Header with blue bar */}
                <div className="mb-6">
                    <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide flex items-center gap-2">
                        <div className="w-1 h-[1em] bg-blue-600 rounded-full flex-shrink-0"></div>
                        Ranking Geral
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Veja sua posição entre todos os alunos
                    </p>
                </div>

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
                <div className="mt-8">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide flex items-center gap-2">
                        <div className="w-1 h-[1em] bg-blue-600 rounded-full flex-shrink-0"></div>
                        Classificação Geral
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                        Ranking baseado em pontos, precisão e consistência
                    </p>

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
                            <div className="p-12 text-center">
                                <div className="text-6xl mb-4">📊</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Nenhum estudante encontrado
                                </h3>
                                <p className="text-gray-600">
                                    Seja o primeiro a completar um quiz!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </StudentLayout>
    );
}
