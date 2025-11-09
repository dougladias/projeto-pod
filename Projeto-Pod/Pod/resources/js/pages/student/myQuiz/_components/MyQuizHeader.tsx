export function MyQuizHeader() {
    return (
        <div>
            <div className="flex items-center gap-3">
                <div className="w-1 rounded-full" style={{ backgroundColor: '#091ABC', height: '1em' }}></div>
                <h1 className="text-sm font-semibold text-black uppercase tracking-wider">MEUS QUIZZES</h1>
            </div>
            <p className="text-sm text-gray-600 mt-2">Pratique e teste seus conhecimentos</p>
        </div>
    );
}
