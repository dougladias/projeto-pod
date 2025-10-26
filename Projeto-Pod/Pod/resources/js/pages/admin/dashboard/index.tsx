import AdminLayout from '@/layouts/admin/admin-layout';

export default function AdminDashboard() {
    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
                    <p className="text-gray-600 mt-2">Gerencie usuários, questões e acompanhe estatísticas</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500 text-sm font-medium">Total de Usuários</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                        <p className="text-sm text-gray-500 mt-1">Alunos cadastrados</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500 text-sm font-medium">Questões</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                        <p className="text-sm text-gray-500 mt-1">No banco de dados</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500 text-sm font-medium">Quiz Realizados</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                        <p className="text-sm text-gray-500 mt-1">Total de tentativas</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500 text-sm font-medium">Taxa de Acerto</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">0%</p>
                        <p className="text-sm text-gray-500 mt-1">Média geral</p>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Atividades Recentes</h2>
                    <div className="text-center py-8 text-gray-500">
                        <p>Nenhuma atividade registrada ainda</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 rounded-lg shadow-lg p-6 text-white">
                        <h3 className="text-lg font-bold mb-2">Gerenciar Usuários</h3>
                        <p className="text-gray-300 text-sm mb-4">Visualize e gerencie todos os alunos cadastrados</p>
                        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                            Acessar
                        </button>
                    </div>

                    <div className="bg-gray-900 rounded-lg shadow-lg p-6 text-white">
                        <h3 className="text-lg font-bold mb-2">Criar Questões</h3>
                        <p className="text-gray-300 text-sm mb-4">Adicione novas questões ao banco de dados</p>
                        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                            Criar Nova
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
