import LogoQuiz from '@/assets/LogoQuiz.svg';
import TextLink from '@/components/common/text-link';
import { login } from '@/routes';

export function RegisterBanner() {
    return (
        <div className="hidden w-1/2 items-center justify-center bg-primary lg:flex">
            <div className="text-center space-y-8">
                <img
                    src={LogoQuiz}
                    alt="Quiz Missão Caça Vape"
                    className="w-auto h-auto max-w-md drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                />

                {/* Login Link */}
                <div className="text-white text-lg">
                    Já tem uma conta?{' '}
                    <TextLink href={login()} className="text-yellow-400 hover:text-yellow-300 no-underline font-semibold">
                        Fazer login
                    </TextLink>
                </div>
            </div>
        </div>
    );
}
