import { Head } from '@inertiajs/react';
import StudentLayout from '@/layouts/student/student-layout';
import { MyQuizHeader } from './_components/MyQuizHeader';
import { StatsCards } from './_components/StatsCards';
import { ProgressCard } from './_components/ProgressCard';
import { QuizHistoryTable } from './_components/QuizHistoryTable';
import type { MyQuizPageProps } from '@/types/myQuiz';

export default function QuizzesIndex({ stats, recent_attempts }: MyQuizPageProps) {
    return (
        <StudentLayout>
            <Head title="Meus Quizzes" />
            <div className="space-y-6">
                {/* Header */}
                <MyQuizHeader />

                {/* Stats Cards */}
                <StatsCards stats={stats} />

                {/* Progress Bar Card */}
                <ProgressCard
                    completedQuizzes={stats.completed_quizzes}
                    totalQuizzes={stats.total_quizzes}
                />

                {/* Quiz History Table */}
                <QuizHistoryTable attempts={recent_attempts} />
            </div>
        </StudentLayout>
    );
}
