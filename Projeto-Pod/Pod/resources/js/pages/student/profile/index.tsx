import { useState } from 'react';
import StudentLayout from '@/layouts/student/student-layout';

interface User {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
    school: string;
    school_year: string;
    gender: string;
    birth_date: string | null;
}

interface ProgressData {
    overall: {
        total_points: number;
        total_quizzes: number;
        completed_quizzes: number;
        completion_rate: number;
        average_accuracy: number;
        ranking_position: number;
        total_attempts: number;
    };
    by_difficulty: Array<{
        difficulty: string;
        total_quizzes: number;
        completed_quizzes: number;
        completion_rate: number;
        average_accuracy: number;
        average_score: number;
    }>;
    by_category: Array<{
        categoria: string;
        total_answered: number;
        correct_answers: number;
        accuracy: number;
    }>;
    recent_activity: Array<{
        quiz_title: string;
        theme: string;
        difficulty: string;
        score: number;
        accuracy: number;
        time_spent: number;
        passed: boolean;
        completed_at: string;
    }>;
    learning_curve: Array<{
        attempt_number: number;
        accuracy: number;
        score: number;
        date: string;
    }>;
}

interface Achievement {
    id: number;
    name: string;
    description: string;
    icon: string;
    type: string;
    requirement_value: number;
    points_reward: number;
    is_unlocked: boolean;
    unlocked_at: string | null;
    progress: {
        current: number;
        required: number;
        percentage: number;
    };
}

interface NextAchievement {
    id: number;
    name: string;
    description: string;
    icon: string;
    type: string;
    points_reward: number;
    progress: {
        current: number;
        required: number;
        percentage: number;
    };
}

interface Recommendation {
    type: string;
    title: string;
    description: string;
    priority: string;
}

interface Comparison {
    user: {
        total_points: number;
        average_accuracy: number;
        completed_quizzes: number;
    };
    class_average: {
        total_points: number;
        average_accuracy: number;
        completed_quizzes: number;
    };
    comparison: {
        points_diff: number;
        accuracy_diff: number;
        quizzes_diff: number;
    };
    performance: string;
}

interface WeakArea {
    categoria: string;
    accuracy: number;
    total_answered: number;
    needs_improvement: boolean;
}

interface StrongArea {
    categoria: string;
    accuracy: number;
    total_answered: number;
}

interface Props {
    user: User;
    progress: ProgressData;
    achievements: Achievement[];
    next_achievements: NextAchievement[];
    recommendations: Recommendation[];
    comparison: Comparison;
    ranking_position: number;
    weak_areas: WeakArea[];
    strong_areas: StrongArea[];
}

export default function ProfileIndex({
    user,
    progress,
    achievements,
    next_achievements,
    recommendations,
    comparison,
    ranking_position,
    weak_areas,
    strong_areas
}: Props) {
    const [activeTab, setActiveTab] = useState<'overview' | 'achievements' | 'progress'>('overview');

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case 'facil': return 'text-green-600 bg-green-100';
            case 'medio': return 'text-yellow-600 bg-yellow-100';
            case 'dificil': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high': return 'bg-red-100 text-red-800 border-red-300';
            case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'low': return 'bg-blue-100 text-blue-800 border-blue-300';
            default: return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    const unlockedAchievements = achievements.filter(a => a.is_unlocked);
    const lockedAchievements = achievements.filter(a => !a.is_unlocked);

    return (
        <StudentLayout>
            <div className="space-y-6">
                {/* Header com Perfil */}
                <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl shadow-lg p-8 text-white">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl">
                            {user.avatar || '👤'}
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl font-bold">{user.name}</h1>
                            <p className="text-blue-100 mt-1">{user.email}</p>
                            <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
                                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                    📚 {user.school}
                                </span>
                                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                    🎓 {user.school_year}º ano
                                </span>
                                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                    🏆 #{ranking_position}º no ranking
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500">
                        <h3 className="text-gray-500 text-sm font-medium">Pontos Totais</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{progress.overall.total_points}</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
                        <h3 className="text-gray-500 text-sm font-medium">Quizzes Completos</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-1">
                            {progress.overall.completed_quizzes}/{progress.overall.total_quizzes}
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-purple-500">
                        <h3 className="text-gray-500 text-sm font-medium">Precisão Média</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-1">
                            {progress.overall.average_accuracy.toFixed(1)}%
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-orange-500">
                        <h3 className="text-gray-500 text-sm font-medium">Conquistas</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-1">
                            {unlockedAchievements.length}/{achievements.length}
                        </p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-md">
                    <div className="border-b border-gray-200">
                        <div className="flex">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`px-6 py-4 font-medium ${
                                    activeTab === 'overview'
                                        ? 'text-primary border-b-2 border-primary'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Visão Geral
                            </button>
                            <button
                                onClick={() => setActiveTab('achievements')}
                                className={`px-6 py-4 font-medium ${
                                    activeTab === 'achievements'
                                        ? 'text-primary border-b-2 border-primary'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Conquistas
                            </button>
                            <button
                                onClick={() => setActiveTab('progress')}
                                className={`px-6 py-4 font-medium ${
                                    activeTab === 'progress'
                                        ? 'text-primary border-b-2 border-primary'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Progresso
                            </button>
                        </div>
                    </div>

                    <div className="p-6">
                        {/* Tab: Overview */}
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                {/* Comparação com a Média */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Comparação com a Turma</h3>
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div>
                                                <p className="text-sm text-gray-600">Seus Pontos</p>
                                                <p className="text-2xl font-bold text-gray-900">{comparison.user.total_points}</p>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Média: {comparison.class_average.total_points.toFixed(0)}
                                                    {comparison.comparison.points_diff > 0 ? (
                                                        <span className="text-green-600 ml-2">
                                                            +{comparison.comparison.points_diff.toFixed(0)}
                                                        </span>
                                                    ) : (
                                                        <span className="text-red-600 ml-2">
                                                            {comparison.comparison.points_diff.toFixed(0)}
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Sua Precisão</p>
                                                <p className="text-2xl font-bold text-gray-900">
                                                    {comparison.user.average_accuracy.toFixed(1)}%
                                                </p>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Média: {comparison.class_average.average_accuracy.toFixed(1)}%
                                                    {comparison.comparison.accuracy_diff > 0 ? (
                                                        <span className="text-green-600 ml-2">
                                                            +{comparison.comparison.accuracy_diff.toFixed(1)}%
                                                        </span>
                                                    ) : (
                                                        <span className="text-red-600 ml-2">
                                                            {comparison.comparison.accuracy_diff.toFixed(1)}%
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Desempenho</p>
                                                <p className="text-lg font-bold text-primary">{comparison.performance}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Recomendações */}
                                {recommendations.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Recomendações</h3>
                                        <div className="space-y-3">
                                            {recommendations.map((rec, index) => (
                                                <div
                                                    key={index}
                                                    className={`border-l-4 p-4 rounded-r-lg ${getPriorityColor(rec.priority)}`}
                                                >
                                                    <h4 className="font-bold">{rec.title}</h4>
                                                    <p className="text-sm mt-1">{rec.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Áreas Fortes e Fracas */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">💪 Áreas Fortes</h3>
                                        <div className="space-y-2">
                                            {strong_areas.map((area, index) => (
                                                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-3">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-medium text-gray-900">{area.categoria}</span>
                                                        <span className="text-green-600 font-bold">{area.accuracy.toFixed(1)}%</span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        {area.total_answered} perguntas respondidas
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Precisa Melhorar</h3>
                                        <div className="space-y-2">
                                            {weak_areas.map((area, index) => (
                                                <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-medium text-gray-900">{area.categoria}</span>
                                                        <span className="text-red-600 font-bold">{area.accuracy.toFixed(1)}%</span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        {area.total_answered} perguntas respondidas
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tab: Achievements */}
                        {activeTab === 'achievements' && (
                            <div className="space-y-6">
                                {/* Próximas Conquistas */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Próximas Conquistas</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {next_achievements.map((achievement) => (
                                            <div key={achievement.id} className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-4">
                                                <div className="text-4xl text-center mb-2">{achievement.icon}</div>
                                                <h4 className="font-bold text-center mb-1">{achievement.name}</h4>
                                                <p className="text-xs text-gray-600 text-center mb-3">{achievement.description}</p>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-yellow-500 h-2 rounded-full transition-all"
                                                        style={{ width: `${achievement.progress.percentage}%` }}
                                                    />
                                                </div>
                                                <p className="text-xs text-center mt-2 text-gray-600">
                                                    {achievement.progress.current} / {achievement.progress.required} ({achievement.progress.percentage}%)
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Conquistas Desbloqueadas */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Conquistas Desbloqueadas ({unlockedAchievements.length})</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        {unlockedAchievements.map((achievement) => (
                                            <div key={achievement.id} className="bg-green-50 border border-green-300 rounded-lg p-4 text-center">
                                                <div className="text-4xl mb-2">{achievement.icon}</div>
                                                <h4 className="font-bold text-sm">{achievement.name}</h4>
                                                <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
                                                <p className="text-xs text-green-600 font-medium mt-2">+{achievement.points_reward} pts</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Conquistas Bloqueadas */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">🔒 Conquistas Bloqueadas ({lockedAchievements.length})</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        {lockedAchievements.map((achievement) => (
                                            <div key={achievement.id} className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center opacity-60">
                                                <div className="text-4xl mb-2 grayscale">{achievement.icon}</div>
                                                <h4 className="font-bold text-sm">{achievement.name}</h4>
                                                <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                                                    <div
                                                        className="bg-gray-400 h-1.5 rounded-full"
                                                        style={{ width: `${achievement.progress.percentage}%` }}
                                                    />
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {achievement.progress.current} / {achievement.progress.required}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tab: Progress */}
                        {activeTab === 'progress' && (
                            <div className="space-y-6">
                                {/* Progresso por Dificuldade */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Progresso por Dificuldade</h3>
                                    <div className="space-y-3">
                                        {progress.by_difficulty.map((diff, index) => (
                                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(diff.difficulty)}`}>
                                                        {diff.difficulty}
                                                    </span>
                                                    <span className="text-sm text-gray-600">
                                                        {diff.completed_quizzes}/{diff.total_quizzes} quizzes
                                                    </span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                                    <div
                                                        className="bg-primary h-2 rounded-full"
                                                        style={{ width: `${diff.completion_rate}%` }}
                                                    />
                                                </div>
                                                <div className="flex justify-between text-xs text-gray-500">
                                                    <span>Precisão: {diff.average_accuracy.toFixed(1)}%</span>
                                                    <span>Pontos médios: {diff.average_score.toFixed(0)}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Atividades Recentes */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">📅 Atividades Recentes</h3>
                                    <div className="space-y-2">
                                        {progress.recent_activity.map((activity, index) => (
                                            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-gray-900">{activity.quiz_title}</h4>
                                                        <div className="flex gap-2 mt-1">
                                                            <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(activity.difficulty)}`}>
                                                                {activity.difficulty}
                                                            </span>
                                                            <span className="text-xs text-gray-500">{activity.theme}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-primary">{activity.score} pts</p>
                                                        <p className="text-sm text-gray-600">{activity.accuracy.toFixed(1)}%</p>
                                                        <p className="text-xs text-gray-500">{activity.completed_at}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </StudentLayout>
    );
}
