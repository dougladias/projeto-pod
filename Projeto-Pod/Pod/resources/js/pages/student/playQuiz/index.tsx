import { useState } from 'react';
import StudentLayout from '@/layouts/student/student-layout';
import { useQuizActions } from '@/hooks/useQuizActions';
import { Clock, BookOpen, Trophy } from 'lucide-react';

// Importar imagens
import cenarioBackground from '@/assets/cenarioLogin.webp';
import titleImage from '@/assets/playQuiz.webp';
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
    { top: '15%', left: '10%' },  // Nível 1
    { top: '30%', left: '60%' },  // Nível 2
    { top: '45%', left: '15%' },  // Nível 3
    { top: '60%', left: '65%' },  // Nível 4
    { top: '75%', left: '20%' },  // Nível 5
    { top: '88%', left: '55%' },  // Nível 6
];

export default function QuizzesIndex({ quizzes }: Props) {
    const [hoveredNivel, setHoveredNivel] = useState<number | null>(null);
    const { startQuiz, isLoading } = useQuizActions();

    const handleStartQuiz = (quizId: number) => {
        startQuiz(quizId);
    };

    return (
        <StudentLayout>
            <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
                {/* Background com imagem */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url(${cenarioBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                {/* Título no topo */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <img
                        src={titleImage}
                        alt="Quiz Missão Caça Vape"
                        className="h-16 md:h-20 object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Linhas conectando os níveis - caminho sinuoso com SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }} preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#FFF9E6', stopOpacity: 0.9 }} />
                            <stop offset="50%" style={{ stopColor: '#FFE55C', stopOpacity: 0.9 }} />
                            <stop offset="100%" style={{ stopColor: '#FFF9E6', stopOpacity: 0.9 }} />
                        </linearGradient>
                        <filter id="pathShadow">
                            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                        </filter>
                    </defs>

                    {/* Caminho contínuo conectando todos os níveis */}
                    <path
                        d="M 10,15
                           C 20,17 50,22 60,30
                           S 40,40 15,45
                           S 30,55 65,60
                           S 45,68 20,75
                           S 35,82 55,88"
                        stroke="url(#pathGradient)"
                        strokeWidth="14"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#pathShadow)"
                        style={{
                            vectorEffect: 'non-scaling-stroke'
                        }}
                    />

                    {/* Borda branca para dar destaque */}
                    <path
                        d="M 10,15
                           C 20,17 50,22 60,30
                           S 40,40 15,45
                           S 30,55 65,60
                           S 45,68 20,75
                           S 35,82 55,88"
                        stroke="rgba(255, 255, 255, 0.4)"
                        strokeWidth="18"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            vectorEffect: 'non-scaling-stroke'
                        }}
                    />
                </svg>

                {/* Mapa de níveis */}
                <div className="relative w-full h-full" style={{ zIndex: 10 }}>
                    {quizzes.map((quiz, index) => {
                        const nivelNumber = index + 1;
                        const position = nivelPositions[index];
                        const isHovered = hoveredNivel === nivelNumber;

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
                                <button
                                    onClick={() => handleStartQuiz(quiz.id)}
                                    onMouseEnter={() => setHoveredNivel(nivelNumber)}
                                    onMouseLeave={() => setHoveredNivel(null)}
                                    className="relative transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                                    disabled={isLoading}
                                >
                                    <img
                                        src={nivelImages[index]}
                                        alt={`Nível ${nivelNumber}`}
                                        className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-xl"
                                    />

                                    {/* Badge de completado */}
                                    {quiz.is_completed && (
                                        <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1.5 border-2 border-white shadow-lg">
                                            <Trophy className="w-4 h-4 text-yellow-900" />
                                        </div>
                                    )}
                                </button>

                                {/* Balão de informações */}
                                {isHovered && (
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                        <div className="bg-white rounded-xl shadow-2xl p-4 min-w-[280px] max-w-[320px] border-4 border-blue-400">
                                            {/* Seta do balão */}
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-blue-400"></div>
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-white"></div>

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
                            </div>
                        );
                    })}
                </div>
            </div>
            </div>
        </StudentLayout>
    );
}
