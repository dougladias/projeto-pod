import cenarioLogin from '@/assets/cenarioLogin.svg';
import LogoQuiz from '@/assets/LogoQuiz.svg';
import avatarM from '@/assets/avatarM.svg';

export function LoginBanner() {
    return (
        <div className="hidden lg:flex lg:w-3/4 relative overflow-hidden">
            {/* Cenário de fundo */}
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src={cenarioLogin}
                    alt="Cenário Quiz Missão"
                    className="min-h-full w-auto object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
            </div>

            {/* Overlay azul */}
            <div className="absolute inset-0 bg-blue-600/[0.38]"></div>

            {/* Logo no topo esquerdo */}
            <div className="absolute top-60 left-1/2 -translate-x-1/3 z-10">
                <img
                    src={LogoQuiz}
                    alt="Quiz Missão Caça Vape"
                    className="w-125 h-auto drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
                    loading="eager"
                    fetchPriority="high"
                />
            </div>

            {/* Personagem no canto inferior esquerdo */}
            <div className="absolute bottom-0 left-0 z-10">
                <img
                    src={avatarM}
                    alt="Personagem"
                    className="h-200 w-auto"
                    loading="eager"
                />
            </div>
        </div>
    );
}
