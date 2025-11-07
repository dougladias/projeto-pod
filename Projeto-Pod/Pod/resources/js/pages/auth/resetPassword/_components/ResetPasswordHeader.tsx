import LogoQuiz from '@/assets/LogoQuiz.webp';

export function ResetPasswordHeader() {
    return (
        <div className="text-center mb-10">
            <img
                src={LogoQuiz}
                alt="Quiz Missão"
                className="w-50 h-auto mx-auto mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
            />
            <h2 className="text-4xl font-luckiest text-white">Nova Senha</h2>
            <p className="text-gray-400 text-sm mt-2">
                Digite sua nova senha abaixo
            </p>
        </div>
    );
}
