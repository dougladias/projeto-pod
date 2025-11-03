import { useState } from 'react';
import { router } from '@inertiajs/react';
import StudentLayout from '@/layouts/student/student-layout';

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
}

export default function RankingIndex({
    ranking,
    user_context,
    stats,
    top_three,
    current_filter,
    available_filters
}: Props) {
    const [filter, setFilter] = useState(current_filter);

    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
        router.get('/student/ranking', { filter: newFilter }, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const getMedalIcon = (position: number) => {
        switch (position) {
            case 1: return '🥇';
            case 2: return '🥈';
            case 3: return '🥉';
            default: return null;
        }
    };

    return (
        <StudentLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">🏆 Ranking</h1>
                    <p className="text-gray-600 mt-2">Veja sua posição e compare com outros estudantes</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500">
                        <h3 className="text-gray-500 text-sm font-medium">Total de Estudantes</h3>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total_students}</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
                        <h3 className="text-gray-500 text-sm font-medium">Sua Posição</h3>
                        <p className="text-2xl font-bold text-gray-900 mt-1">#{user_context.user_position}</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-purple-500">
                        <h3 className="text-gray-500 text-sm font-medium">Pontos Distribuídos</h3>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total_points_distributed.toLocaleString()}</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-orange-500">
                        <h3 className="text-gray-500 text-sm font-medium">Média de Pontos</h3>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{Math.round(stats.average_points_per_student)}</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-md p-4">
                    <div className="flex flex-wrap gap-2">
                        {Object.entries(available_filters).map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => handleFilterChange(key)}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                    filter === key
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Top 3 Podium */}
                {top_three.length >= 3 && (
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🏆 Top 3</h2>
                        <div className="flex justify-center items-end gap-4">
                            {/* 2nd Place */}
                            <div className="flex flex-col items-center">
                                <div className="text-4xl mb-2">{getMedalIcon(2)}</div>
                                <div className="bg-white rounded-xl shadow-md p-4 w-32 text-center">
                                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl">
                                        {top_three[1].avatar || '👤'}
                                    </div>
                                    <p className="font-bold text-sm truncate">{top_three[1].name}</p>
                                    <p className="text-primary font-bold text-lg">{top_three[1].total_points}</p>
                                    <p className="text-xs text-gray-500">pontos</p>
                                </div>
                            </div>

                            {/* 1st Place */}
                            <div className="flex flex-col items-center -mt-8">
                                <div className="text-5xl mb-2">{getMedalIcon(1)}</div>
                                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-lg p-4 w-36 text-center">
                                    <div className="w-20 h-20 bg-white rounded-full mx-auto mb-2 flex items-center justify-center text-3xl">
                                        {top_three[0].avatar || '👤'}
                                    </div>
                                    <p className="font-bold text-white truncate">{top_three[0].name}</p>
                                    <p className="text-white font-bold text-xl">{top_three[0].total_points}</p>
                                    <p className="text-xs text-yellow-100">pontos</p>
                                </div>
                            </div>

                            {/* 3rd Place */}
                            <div className="flex flex-col items-center">
                                <div className="text-4xl mb-2">{getMedalIcon(3)}</div>
                                <div className="bg-white rounded-xl shadow-md p-4 w-32 text-center">
                                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl">
                                        {top_three[2].avatar || '👤'}
                                    </div>
                                    <p className="font-bold text-sm truncate">{top_three[2].name}</p>
                                    <p className="text-primary font-bold text-lg">{top_three[2].total_points}</p>
                                    <p className="text-xs text-gray-500">pontos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ranking Table */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Posição
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Estudante
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Escola
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Ano
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Pontos
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Quizzes
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Precisão
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {ranking.map((user) => {
                                    const isCurrentUser = user.position === user_context.user_position;
                                    return (
                                        <tr
                                            key={user.user_id}
                                            className={isCurrentUser ? 'bg-blue-50 border-l-4 border-blue-500' : ''}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <span className="text-2xl mr-2">{getMedalIcon(user.position)}</span>
                                                    <span className="text-sm font-bold text-gray-900">
                                                        #{user.position}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl mr-3">
                                                        {user.avatar || '👤'}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {user.name}
                                                            {isCurrentUser && (
                                                                <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded">
                                                                    Você
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {user.school}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {user.school_year}º ano
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-bold text-primary">
                                                    {user.total_points.toLocaleString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {user.completed_quizzes}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <span className="text-sm font-medium text-gray-900">
                                                        {user.average_accuracy.toFixed(1)}%
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Empty State */}
                {ranking.length === 0 && (
                    <div className="bg-white rounded-xl shadow-md p-12 text-center">
                        <div className="text-6xl mb-4">📊</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum estudante encontrado</h3>
                        <p className="text-gray-600">Tente mudar o filtro ou seja o primeiro a completar um quiz!</p>
                    </div>
                )}
            </div>
        </StudentLayout>
    );
}
