import { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';
import '../../../css/loading.css';
import LogoQuiz from '@/assets/LogoQuiz.webp';

// Lista de rotas onde o loading NÃO deve aparecer
const EXCLUDED_ROUTES = [
    '/register',
];

export function GlobalLoading() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const startLoading = (event: { detail?: { visit?: { url?: { pathname?: string } } } }) => {
            // Verifica se a URL de destino está na lista de exclusão
            const targetUrl = event.detail?.visit?.url?.pathname || '';
            const isExcluded = EXCLUDED_ROUTES.some(route => targetUrl.includes(route));

            if (isExcluded) return;

            // Sem delay - loading aparece imediatamente
            setIsLoading(true);
        };

        const finishLoading = () => {
            setIsLoading(false);
        };

        const removeStart = router.on('start', startLoading);
        const removeSuccess = router.on('success', finishLoading);
        const removeError = router.on('error', finishLoading);

        return () => {
            removeStart();
            removeSuccess();
            removeError();
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                {/* Logo animado */}
                <div className="relative">
                    {/* Círculo externo girando */}
                    <div className="absolute inset-0 animate-spin">
                        <div className="h-24 w-24 rounded-full border-4 border-transparent border-t-blue-600 border-r-blue-500"></div>
                    </div>

                    {/* Círculo do meio girando na direção oposta */}
                    <div className="absolute inset-2 animate-spin-reverse">
                        <div className="h-20 w-20 rounded-full border-4 border-transparent border-b-gray-500 border-l-gray-400"></div>
                    </div>

                    {/* Logo Quiz no centro com pulso */}
                    <div className="flex h-24 w-24 items-center justify-center">
                        <div className="animate-pulse-scale">
                            <img src={LogoQuiz} alt="Quiz Logo" className="h-10 w-auto" />
                        </div>
                    </div>
                </div>

                {/* Texto de carregamento */}
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-300">Carregando</span>
                    <div className="flex gap-1">
                        <span className="animate-bounce-dot text-blue-600" style={{ animationDelay: '0ms' }}>●</span>
                        <span className="animate-bounce-dot text-blue-500" style={{ animationDelay: '150ms' }}>●</span>
                        <span className="animate-bounce-dot text-gray-400" style={{ animationDelay: '300ms' }}>●</span>
                    </div>
                </div>

                {/* Barra de progresso */}
                <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-gray-400 animate-progress-bar"></div>
                </div>
            </div>
        </div>
    );
}
