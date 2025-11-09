export function RankingClassificationHeader() {
    return (
        <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide flex items-center gap-2">
                <div className="w-1 h-[1em] bg-blue-600 rounded-full flex-shrink-0"></div>
                Classificação Geral
            </h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">
                Ranking baseado em pontos, precisão e consistência
            </p>
        </div>
    );
}
