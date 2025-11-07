import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { useQuizActions } from '@/hooks/useQuizActions';
import { Clock, BookOpen, Trophy, ArrowLeft } from 'lucide-react';

// Importar imagens
import playQuizBackground from '@/assets/playQuiz.webp';
import logoPlayQuiz from '@/assets/LogoPlayQuiz.webp';
import campeaoImage from '@/assets/campeao.webp';
import nivel1Image from '@/assets/nivel_1.webp';
import nivel2Image from '@/assets/nivel_2.webp';
import nivel3Image from '@/assets/nivel_3.webp';
import nivel4Image from '@/assets/nivel_4.webp';
import nivel5Image from '@/assets/nivel_5.webp';
import nivel6Image from '@/assets/nivel_6.webp';

interface Quiz {
    id: number;
    title: string;
    description: string;
    theme: string;
    difficulty: string;
    time_limit_minutes: number;
    total_questions: number;
    best_score: number;
    attempts_count: number;
    is_completed: boolean;
    last_attempt: string | null;
}

interface Props {
    quizzes: Quiz[];
}

const nivelImages = [nivel1Image, nivel2Image, nivel3Image, nivel4Image, nivel5Image, nivel6Image];

// Posições dos níveis no mapa (ajuste conforme necessário)
const nivelPositions = [
    { top: '25%', left: '59%' },  // Nível 1
    { top: '27%', left: '34%' },  // Nível 2
    { top: '50%', left: '56%' },  // Nível 3
    { top: '65%', left: '30%' },  // Nível 4
    { top: '85%', left: '48%' },  // Nível 5
    { top: '70%', left: '76%' },  // Nível 6
];

export default function QuizzesIndex({ quizzes }: Props) {
    const [hoveredNivel, setHoveredNivel] = useState<number | null>(null);
    const { startQuiz, isLoading } = useQuizActions();

    const handleStartQuiz = (quizId: number) => {
        startQuiz(quizId);
    };

    return (
        <div className="relative w-screen h-screen overflow-x-hidden bg-gradient-to-b from-sky-400 to-green-400">
            {/* Background com imagem - sem zoom, imagem completa */}
            <img
                src={playQuizBackground}
                alt="Play Quiz Background"
                className="absolute inset-0 w-full h-full object-fill"
                style={{ zIndex: 1 }}
            />

            {/* Overlay azul igual na tela de login */}
            <div className="absolute inset-0 bg-blue-600/[0.35]" style={{ zIndex: 2 }}></div>

            {/* Botão Voltar */}
            <Link
                href="/app/myQuiz"
                className="absolute top-4 left-4 flex items-center gap-2 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg shadow-lg transition-all hover:opacity-90 text-xs lg:text-base"
                style={{ backgroundColor: '#091ABC', zIndex: 50 }}
            >
                <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="font-semibold">Meus Quizzes</span>
            </Link>

            {/* Logo PlayQuiz Centralizada */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20 -top-32">
                <img
                    src={logoPlayQuiz}
                    alt="Logo PlayQuiz"
                    className="w-[400px] h-auto lg:w-[600px] xl:w-[800px] drop-shadow-2xl"
                />
            </div>

            {/* Campeão no lado esquerdo */}
            <div className="absolute left-24 bottom-64 z-20 hidden lg:block">
                <img
                    src={campeaoImage}
                    alt="Campeão"
                    className="w-72 h-auto xl:w-96 drop-shadow-2xl scale-[1.5]"
                />
            </div>

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
                                <div
                                    onClick={() => !isLocked && handleStartQuiz(quiz.id)}
                                    onMouseEnter={() => setHoveredNivel(nivelNumber)}
                                    onMouseLeave={() => setHoveredNivel(null)}
                                    className={`relative transition-all duration-300 ${
                                        isLocked
                                            ? 'cursor-not-allowed opacity-50 grayscale'
                                            : 'hover:scale-110 active:scale-95 cursor-pointer hover:drop-shadow-[0_0_20px_rgba(255,255,0,0.8)] hover:brightness-125'
                                    } ${isLoading ? 'pointer-events-none' : ''}`}
                                >
                                    <img
                                        src={nivelImages[index]}
                                        alt={`Nível ${nivelNumber}`}
                                        className={`object-contain drop-shadow-xl transition-all duration-300 ${
                                            nivelNumber === 3
                                                ? 'w-32 h-32 md:w-40 md:h-40'
                                                : nivelNumber === 4
                                                ? 'w-40 h-40 md:w-48 md:h-48'
                                                : nivelNumber === 5
                                                ? 'w-44 h-44 md:w-52 md:h-52'
                                                : 'w-28 h-28 md:w-36 md:h-36'
                                        }`}
                                    />

                                    {/* Badge de completado */}
                                    {quiz.is_completed && (
                                        <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1.5 border-2 border-white shadow-lg">
                                            <Trophy className="w-4 h-4 text-yellow-900" />
                                        </div>
                                    )}
                                </div>

                                {/* Balão de informações para níveis desbloqueados */}
                                {isHovered && !isLocked && (
                                    <div className={`absolute z-50 animate-in fade-in duration-200 ${
                                        nivelNumber === 2 || nivelNumber === 4
                                            ? 'right-full top-1/2 transform -translate-y-1/2 mr-4'
                                            : nivelNumber === 1 || nivelNumber === 3
                                            ? 'left-full top-1/2 transform -translate-y-1/2 ml-4'
                                            : nivelNumber === 5 || nivelNumber === 6
                                            ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-4'
                                            : 'top-full left-1/2 transform -translate-x-1/2 mt-4'
                                    }`}>
                                        <div className="bg-white rounded-xl shadow-2xl p-4 min-w-[280px] max-w-[320px] border-4 border-blue-400">
                                            {/* Seta do balão */}
                                            {nivelNumber === 2 || nivelNumber === 4 ? (
                                                <>
                                                    <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-blue-400"></div>
                                                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white"></div>
                                                </>
                                            ) : nivelNumber === 1 || nivelNumber === 3 ? (
                                                <>
                                                    <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-blue-400"></div>
                                                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-r-6 border-transparent border-r-white"></div>
                                                </>
                                            ) : nivelNumber === 5 || nivelNumber === 6 ? (
                                                <>
                                                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-400"></div>
                                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white"></div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-blue-400"></div>
                                                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-white"></div>
                                                </>
                                            )}

                                            {/* Conteúdo */}
                                            <div className="space-y-3">
                                                <div>
                                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">
                                                        {quiz.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        {quiz.description}
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-4 text-sm text-gray-700">
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4 text-blue-600" />
                                                        <span>{quiz.time_limit_minutes} min</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <BookOpen className="w-4 h-4 text-green-600" />
                                                        <span>{quiz.total_questions} perguntas</span>
                                                    </div>
                                                </div>

                                                {quiz.is_completed && (
                                                    <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                                                        <p className="text-xs text-green-800 font-medium">
                                                            ✓ Melhor pontuação: {quiz.best_score} pts
                                                        </p>
                                                        <p className="text-xs text-green-700 mt-0.5">
                                                            {quiz.attempts_count} tentativa(s)
                                                        </p>
                                                    </div>
                                                )}

                                                <button
                                                    onClick={() => handleStartQuiz(quiz.id)}
                                                    disabled={isLoading}
                                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                                                >
                                                    {isLoading ? 'Carregando...' : quiz.is_completed ? 'Jogar Novamente' : 'Iniciar Quiz'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Balão de informações para níveis bloqueados */}
                                {isHovered && isLocked && (
                                    <div className={`absolute z-50 animate-in fade-in duration-200 ${
                                        nivelNumber === 2 || nivelNumber === 4
                                            ? 'right-full top-1/2 transform -translate-y-1/2 mr-4'
                                            : nivelNumber === 1 || nivelNumber === 3
                                            ? 'left-full top-1/2 transform -translate-y-1/2 ml-4'
                                            : nivelNumber === 5 || nivelNumber === 6
                                            ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-4'
                                            : 'top-full left-1/2 transform -translate-x-1/2 mt-4'
                                    }`}>
                                        <div className="bg-red-50 rounded-xl shadow-2xl p-4 min-w-[280px] max-w-[320px] border-4 border-red-400">
                                            {/* Seta do balão */}
                                            {nivelNumber === 2 || nivelNumber === 4 ? (
                                                <>
                                                    <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-red-400"></div>
                                                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-red-50"></div>
                                                </>
                                            ) : nivelNumber === 1 || nivelNumber === 3 ? (
                                                <>
                                                    <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-red-400"></div>
                                                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-r-6 border-transparent border-r-red-50"></div>
                                                </>
                                            ) : nivelNumber === 5 || nivelNumber === 6 ? (
                                                <>
                                                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-red-400"></div>
                                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-red-50"></div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-red-400"></div>
                                                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-red-50"></div>
                                                </>
                                            )}

                                            {/* Conteúdo */}
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                    </svg>
                                                    <h3 className="font-bold text-lg text-red-900 leading-tight">
                                                        Nível Bloqueado
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-red-800">
                                                    Complete o <span className="font-bold">Nível {nivelNumber - 1}</span> para desbloquear este nível.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
