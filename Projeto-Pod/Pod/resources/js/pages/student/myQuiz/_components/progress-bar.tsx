import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target } from 'lucide-react';

interface ProgressBarProps {
    completed: number;
    total: number;
    percentage: number;
}

export function ProgressBar({ completed, total, percentage }: ProgressBarProps) {
    return (
        <Card className="p-6 border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-gray-900">Progresso Geral</h3>
                        <p className="text-sm text-gray-600">Sua evolução nos quizzes</p>
                    </div>
                </div>
                <Badge variant="secondary" className="bg-blue-600 text-white px-3 py-1">
                    {percentage}% Completo
                </Badge>
            </div>

            <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <p className="text-sm text-gray-600 mt-3">
                {completed} de {total} quizzes completados
            </p>
        </Card>
    );
}
