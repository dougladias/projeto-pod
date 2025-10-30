import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileQuestion, Clock, CheckCircle } from 'lucide-react';
import { useQuizActions } from '@/hooks/useQuizActions';
import type { QuizData } from '@/types/quiz';

interface QuizCardProps {
    quiz: {
        id: number;
        title: string;
        description: string;
        category: string;
        time_limit: number;
        total_questions: number;
        best_score: number;
        attempts_count: number;
        is_completed: boolean;
        last_attempt: string | null;
    };
    onStartQuiz: (quizData: QuizData) => void;
}

const difficultyColors = {
    'Componentes': 'bg-blue-100 text-blue-700 border-blue-200',
    'Saúde': 'bg-red-100 text-red-700 border-red-200',
    'Iniciante': 'bg-green-100 text-green-700 border-green-200',
    'Intermediário': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'Completo': 'bg-purple-100 text-purple-700 border-purple-200',
};

const getDifficultyBadge = (category: string) => {
    const color = difficultyColors[category as keyof typeof difficultyColors] || 'bg-gray-100 text-gray-700 border-gray-200';
    return color;
};

export function QuizCard({ quiz, onStartQuiz }: QuizCardProps) {
    const { startQuiz, isLoading } = useQuizActions();

    const handleStartQuiz = () => {
        startQuiz(quiz.id, (data) => {
            onStartQuiz(data);
        });
    };

    const scoreColor = quiz.best_score >= 90 ? 'text-green-600' : quiz.best_score >= 70 ? 'text-yellow-600' : 'text-red-600';

    return (
        <Card className="p-6 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{quiz.title}</h3>
                        {quiz.is_completed && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{quiz.description}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className={`${getDifficultyBadge(quiz.category)} border`}>
                    {quiz.category}
                </Badge>
                {quiz.attempts_count > 0 && (
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Intermediário
                    </Badge>
                )}
                {quiz.is_completed && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Completo
                    </Badge>
                )}
            </div>

            <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <FileQuestion className="w-4 h-4" />
                    <span>{quiz.total_questions} questões</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{quiz.time_limit} min</span>
                </div>
            </div>

            {quiz.is_completed && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Melhor resultado:</span>
                        <span className={`font-bold ${scoreColor}`}>{quiz.best_score}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                        <span className="text-gray-600">Tentativas:</span>
                        <span className="font-medium text-gray-900">{quiz.attempts_count}</span>
                    </div>
                    {quiz.last_attempt && (
                        <div className="flex items-center justify-between text-sm mt-1">
                            <span className="text-gray-600">Último:</span>
                            <span className="font-medium text-gray-900">{quiz.last_attempt}</span>
                        </div>
                    )}
                </div>
            )}

            <Button
                onClick={handleStartQuiz}
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
            >
                {isLoading ? 'Carregando...' : quiz.attempts_count > 0 ? 'Refazer Quiz' : 'Iniciar Quiz'}
            </Button>
        </Card>
    );
}
