import { Card } from '@/components/ui/card';
import { CheckCircle2, TrendingUp, Trophy, Target } from 'lucide-react';

interface StatsCardProps {
    type: 'completed' | 'average' | 'best' | 'rank';
    value: string;
    label: string;
}

export function StatsCard({ type, value, label }: StatsCardProps) {
    const icons = {
        completed: CheckCircle2,
        average: TrendingUp,
        best: Trophy,
        rank: Target,
    };

    const colors = {
        completed: 'bg-green-50 text-green-600',
        average: 'bg-blue-50 text-blue-600',
        best: 'bg-yellow-50 text-yellow-600',
        rank: 'bg-purple-50 text-purple-600',
    };

    const Icon = icons[type];

    return (
        <Card className="p-6 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${colors[type]} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                    <p className="text-sm text-gray-600">{label}</p>
                </div>
            </div>
        </Card>
    );
}
