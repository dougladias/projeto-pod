import { Card } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/components/ui/pagination";
import { useState } from 'react';
import type { QuizHistoryTableProps } from '@/types/myQuiz';
import { EmptyQuizState } from './EmptyQuizState';

export function QuizHistoryTable({ attempts }: QuizHistoryTableProps) {
    // Paginação
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil((attempts?.length || 0) / itemsPerPage);

    // Dados paginados
    const paginatedAttempts = attempts?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    ) || [];

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Card className="p-6">
            <div className="mb-4">
                <h2 className="text-lg font-bold mb-1" style={{ color: '#091ABC' }}>Histórico de Quizzes</h2>
                <p className="text-sm text-gray-600">Seus quizzes completados recentemente</p>
            </div>

            {attempts && attempts.length > 0 ? (
                <>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Quiz</TableHead>
                                <TableHead>Tema</TableHead>
                                <TableHead>Dificuldade</TableHead>
                                <TableHead className="text-center">Acertos</TableHead>
                                <TableHead className="text-center">Precisão</TableHead>
                                <TableHead className="text-center">Pontos</TableHead>
                                <TableHead>Tempo</TableHead>
                                <TableHead>Data</TableHead>
                                <TableHead className="text-center">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedAttempts.map((attempt) => (
                                <TableRow key={attempt.id}>
                                    <TableCell className="font-medium">{attempt.quiz_title}</TableCell>
                                    <TableCell>{attempt.quiz_theme}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            attempt.quiz_difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                                            attempt.quiz_difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {attempt.quiz_difficulty === 'easy' ? 'Fácil' :
                                             attempt.quiz_difficulty === 'medium' ? 'Médio' : 'Difícil'}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-center">{attempt.correct_answers}/{attempt.total_questions}</TableCell>
                                    <TableCell className="text-center">{attempt.accuracy}%</TableCell>
                                    <TableCell className="text-center font-bold" style={{ color: '#091ABC' }}>{attempt.score}</TableCell>
                                    <TableCell>{attempt.time_spent}</TableCell>
                                    <TableCell className="text-sm text-gray-600">{attempt.completed_at}</TableCell>
                                    <TableCell className="text-center">
                                        {attempt.passed ? (
                                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                                Aprovado
                                            </span>
                                        ) : (
                                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                                                Reprovado
                                            </span>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* Paginação */}
                    {totalPages > 1 && (
                        <div className="mt-4">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (currentPage > 1) handlePageChange(currentPage - 1);
                                            }}
                                            className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                        />
                                    </PaginationItem>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                        // Mostrar apenas algumas páginas
                                        if (
                                            page === 1 ||
                                            page === totalPages ||
                                            (page >= currentPage - 1 && page <= currentPage + 1)
                                        ) {
                                            return (
                                                <PaginationItem key={page}>
                                                    <PaginationLink
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handlePageChange(page);
                                                        }}
                                                        isActive={currentPage === page}
                                                        className="cursor-pointer"
                                                    >
                                                        {page}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            );
                                        } else if (
                                            page === currentPage - 2 ||
                                            page === currentPage + 2
                                        ) {
                                            return <PaginationEllipsis key={page} />;
                                        }
                                        return null;
                                    })}

                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (currentPage < totalPages) handlePageChange(currentPage + 1);
                                            }}
                                            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    )}
                </>
            ) : (
                <EmptyQuizState />
            )}
        </Card>
    );
}
