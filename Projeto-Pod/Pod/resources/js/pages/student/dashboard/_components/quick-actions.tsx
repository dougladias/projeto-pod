import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Trophy, Zap } from 'lucide-react';
import { router } from '@inertiajs/react';

// Componente: seção de ações rápidas com botões de navegação
export function QuickActions() {
    return (
        <Card className="p-6">
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-5 h-5" style={{ color: '#091ABC' }} />
                    <h2 className="text-lg font-bold" style={{ color: '#091ABC' }}>Ações Rápidas</h2>
                </div>
                <p className="text-xs text-black">Continue seu aprendizado</p>
            </div>

            {/* Lista de ações rápidas */}
            <div className="flex gap-3">
                <Button
                    onClick={() => router.visit('/app/playQuiz')}
                    style={{ backgroundColor: '#091ABC' }}
                    className="hover:opacity-90 text-white px-6 py-2 flex items-center gap-2 cursor-pointer"
                >
                    <BookOpen className="w-4 h-4" />
                    Fazer Novo Quiz
                </Button>
                <Button
                    onClick={() => router.visit('/app/ranking')}
                    style={{ borderColor: '#091ABC', color: '#091ABC', backgroundColor: 'transparent' }}
                    className="border-2 hover:bg-blue-50 px-6 py-2 flex items-center gap-2 cursor-pointer"
                >
                    <Trophy className="w-4 h-4" />
                    Ver Ranking
                </Button>
            </div>
        </Card>
    );
}
