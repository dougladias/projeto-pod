import type { LockedBalloonProps } from '@/types/playQuiz';

export function LockedLevelBalloon({ nivelNumber }: LockedBalloonProps) {
    return (
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
    );
}
