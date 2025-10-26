import StudentLayout from '@/layouts/student/student-layout';

export default function StudentDashboard() {
    return (
        <StudentLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Bem-vindo ao Quiz Caça Vape!</h1>
                    <p className="text-gray-600 mt-2">Aprenda sobre os riscos do vaping de forma divertida</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                        <h3 className="text-gray-500 text-sm font-medium">Quiz Completos</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                        <h3 className="text-gray-500 text-sm font-medium">Pontuação Total</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                        <h3 className="text-gray-500 text-sm font-medium">Conquistas</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl shadow-lg p-8 text-white">
                    <h2 className="text-2xl font-bold mb-4">Começar Novo Quiz</h2>
                    <p className="mb-6">Teste seus conhecimentos sobre os riscos do vaping!</p>
                    <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Iniciar Agora
                    </button>
                </div>
            </div>
        </StudentLayout>
    );
}
