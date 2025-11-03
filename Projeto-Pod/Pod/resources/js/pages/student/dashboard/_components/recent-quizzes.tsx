import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { router } from '@inertiajs/react';
import type { RecentActivity } from '@/types/dashboard';

// Props: lista de atividades recentes
interface Props {
    activities: RecentActivity[];
}

// Componente: seção de quizzes recentes (máximo 3)
export function RecentQuizzes({ activities }: Props) {
    return (
        <Card className="p-6 min-h-[400px]">
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="w-5 h-5" style={{ color: '#091ABC' }} />
                    <h2 className="text-lg font-bold" style={{ color: '#091ABC' }}>Quizzes Recentes</h2>
                </div>
                <p className="text-xs text-black">Seus últimos resultados</p>
            </div>

            {/* Lista dos quizzes recentes */}
            <div className="space-y-3">
                {activities.length > 0 ? (
                    activities.slice(0, 3).map((activity, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-3 rounded-lg hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: '#D5DFFF' }}
                        >
                            <div className="flex-1">
                                <p className="font-semibold text-sm text-gray-900">{activity.quiz_title}</p>
                                <p className="text-xs text-gray-500">{activity.quiz_theme}</p>
                            </div>
                            <Badge
                                className="px-3 py-1 text-xs font-semibold text-white"
                                style={{ backgroundColor: '#091ABC' }}
                            >
                                {activity.accuracy}%
                            </Badge>
                        </div>
                    ))                    
                ) : (                    
                    <div className="text-center py-8 text-gray-500">
                        
                        {/* Mensagem quando não há quizzes recentes */}
                        <BookOpen className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm">Nenhum quiz completado ainda</p>
                        <Button
                            onClick={() => router.visit('/app/playQuiz')}
                            style={{ backgroundColor: '#091ABC' }}
                            className="mt-4 hover:opacity-90 text-white"
                        >
                            Começar Agora
                        </Button>
                    </div>
                )}
            </div>
        </Card>
    );
}
