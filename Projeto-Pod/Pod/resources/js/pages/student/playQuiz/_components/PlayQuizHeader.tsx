import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import logoPlayQuiz from '@/assets/LogoPlayQuiz.webp';

export function PlayQuizHeader() {
    return (
        <>
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
        </>
    );
}
