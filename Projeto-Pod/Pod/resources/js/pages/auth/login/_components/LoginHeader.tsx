import LogoQuiz from '@/assets/LogoQuiz.svg';

export function LoginHeader() {
    return (
        <div className="text-center mb-10">
            <img
                src={LogoQuiz}
                alt="Quiz Missão"
                className="w-50 h-auto mx-auto mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
            />
            <h2 className="text-4xl font-luckiest text-white">Bem vindo!</h2>
        </div>
    );
}
