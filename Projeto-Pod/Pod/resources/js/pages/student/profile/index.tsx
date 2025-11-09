import { Head } from '@inertiajs/react';
import StudentLayout from '@/layouts/student/student-layout';
import ProfileCard from './_components/ProfileCard';
import ProfileForm from './_components/ProfileForm';
import type { ProfilePageProps } from '@/types/profile';

export default function ProfileEdit({ user, status }: ProfilePageProps) {
    return (
        <StudentLayout>
            <Head title="Meu Perfil" />

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Profile Card - Lateral esquerdo */}
                <aside className="lg:w-80 flex-shrink-0">
                    <ProfileCard
                        name={user.name}
                        avatar={user.avatar}
                        totalCompletedQuizzes={user.total_completed_quizzes}
                        averageAccuracy={user.average_accuracy}
                        rankingPosition={user.ranking_position}
                        totalPoints={user.total_points}
                        totalAchievements={user.total_achievements}
                    />
                </aside>

                {/* Profile Form - Direita */}
                <main className="flex-1">
                    <ProfileForm user={user} status={status} />
                </main>
            </div>
        </StudentLayout>
    );
}
