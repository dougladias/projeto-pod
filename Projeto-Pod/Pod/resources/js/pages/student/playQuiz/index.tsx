import { useState, useMemo, lazy, Suspense } from 'react';
import StudentLayout from '@/layouts/student/student-layout';
import { Filters } from './_components/filters';
import { QuizCard } from './_components/quiz-card';
import type { QuizData } from '@/types/quiz';

// Lazy load do modal - só carrega quando abrir (economiza ~200KB)
const QuizModal = lazy(() => import('./_components/quiz-modal').then(module => ({ default: module.QuizModal })));

interface Quiz {
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
}

interface Props {
    quizzes: Quiz[];
    quizData?: QuizData;
}

export default function QuizzesIndex({ quizzes, quizData }: Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [isQuizModalOpen, setIsQuizModalOpen] = useState(!!quizData);
    const [currentQuizData, setCurrentQuizData] = useState<QuizData | null>(quizData || null);

    // Filtra os quizzes
    const filteredQuizzes = useMemo(() => {
        return quizzes.filter((quiz) => {
            // Filtro de busca
            const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                quiz.description.toLowerCase().includes(searchQuery.toLowerCase());

            // Filtro de categoria
            const matchesCategory = selectedCategory === 'all' ||
                quiz.category.toLowerCase() === selectedCategory.toLowerCase();

            // Filtro de status
            const matchesStatus =
                selectedStatus === 'all' ||
                (selectedStatus === 'completed' && quiz.is_completed) ||
                (selectedStatus === 'incomplete' && !quiz.is_completed);

            return matchesSearch && matchesCategory && matchesStatus;
        });
    }, [quizzes, searchQuery, selectedCategory, selectedStatus]);

    return (
        <StudentLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Jogar Quiz</h1>
                    <p className="text-gray-600 mt-1">Pratique e teste seus conhecimentos</p>
                </div>

                {/* Filters */}
                <Filters
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    selectedStatus={selectedStatus}
                    onStatusChange={setSelectedStatus}
                />

                {/* Quiz Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredQuizzes.length > 0 ? (
                        filteredQuizzes.map((quiz) => (
                            <QuizCard
                                key={quiz.id}
                                quiz={quiz}
                                onStartQuiz={(quizData) => {
                                    setCurrentQuizData(quizData);
                                    setIsQuizModalOpen(true);
                                }}
                            />
                        ))
                    ) : (
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-12">
                            <p className="text-gray-500">Nenhum quiz encontrado com os filtros aplicados.</p>
                        </div>
                    )}
                </div>

                {/* Quiz Modal - Lazy loaded */}
                {isQuizModalOpen && (
                    <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex items-center justify-center"><div className="text-white">Carregando...</div></div>}>
                        <QuizModal
                            isOpen={isQuizModalOpen}
                            onClose={() => {
                                setIsQuizModalOpen(false);
                                setCurrentQuizData(null);
                            }}
                            quiz={currentQuizData?.quiz || null}
                            questions={currentQuizData?.questions || []}
                            attemptId={currentQuizData?.attempt_id || null}
                        />
                    </Suspense>
                )}
            </div>
        </StudentLayout>
    );
}
