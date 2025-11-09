import { useState } from 'react';
import { Head } from '@inertiajs/react';
import { useQuizActions } from '@/hooks/useQuizActions';
import { PlayQuizHeader } from './_components/PlayQuizHeader';
import { ChampionCharacter } from './_components/ChampionCharacter';
import { LevelButton } from './_components/LevelButton';
import { UnlockedLevelBalloon } from './_components/UnlockedLevelBalloon';
import { LockedLevelBalloon } from './_components/LockedLevelBalloon';
import type { PlayQuizPageProps, LevelPosition } from '@/types/playQuiz';
import playQuizBackground from '@/assets/playQuiz.webp';

// Posições dos níveis no mapa
const nivelPositions: LevelPosition[] = [
    { top: '25%', left: '59%' },  // Nível 1
    { top: '27%', left: '34%' },  // Nível 2
    { top: '50%', left: '56%' },  // Nível 3
    { top: '65%', left: '30%' },  // Nível 4
    { top: '85%', left: '48%' },  // Nível 5
    { top: '70%', left: '76%' },  // Nível 6
];

export default function QuizzesIndex({ quizzes }: PlayQuizPageProps) {
    const [hoveredNivel, setHoveredNivel] = useState<number | null>(null);
    const { startQuiz, isLoading } = useQuizActions();

    const handleStartQuiz = (quizId: number) => {
        startQuiz(quizId);
    };

    return (
        <div className="relative w-screen h-screen overflow-x-hidden bg-gradient-to-b from-sky-400 to-green-400">
            <Head title="Play Quiz" />

            {/* Background com imagem */}
            <img
                src={playQuizBackground}
                alt="Play Quiz Background"
                className="absolute inset-0 w-full h-full object-fill"
                style={{ zIndex: 1 }}
            />

            {/* Overlay azul */}
            <div className="absolute inset-0 bg-blue-600/[0.35]" style={{ zIndex: 2 }}></div>

            {/* Header com botão voltar e logo */}
            <PlayQuizHeader />

            {/* Campeão no lado esquerdo */}
            <ChampionCharacter />

            {/* Mapa de níveis */}
            <div className="absolute inset-0 w-full h-full" style={{ zIndex: 30 }}>
                {quizzes.map((quiz, index) => {
                    const nivelNumber = index + 1;
                    const position = nivelPositions[index];
                    const isHovered = hoveredNivel === nivelNumber;

                    // Verifica se o nível está desbloqueado
                    const isUnlocked = index === 0 || (quizzes[index - 1]?.is_completed ?? false);
                    const isLocked = !isUnlocked;

                    return (
                        <div
                            key={quiz.id}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{
                                top: position.top,
                                left: position.left,
                            }}
                        >
                            {/* Botão do nível */}
                            <LevelButton
                                quiz={quiz}
                                index={index}
                                isHovered={isHovered}
                                isLocked={isLocked}
                                isLoading={isLoading}
                                onMouseEnter={() => setHoveredNivel(nivelNumber)}
                                onMouseLeave={() => setHoveredNivel(null)}
                                onClick={() => !isLocked && handleStartQuiz(quiz.id)}
                            />

                            {/* Balão de informações para níveis desbloqueados */}
                            {isHovered && !isLocked && (
                                <UnlockedLevelBalloon
                                    nivelNumber={nivelNumber}
                                    quiz={quiz}
                                    isLoading={isLoading}
                                    onStartQuiz={() => handleStartQuiz(quiz.id)}
                                />
                            )}

                            {/* Balão de informações para níveis bloqueados */}
                            {isHovered && isLocked && (
                                <LockedLevelBalloon nivelNumber={nivelNumber} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
