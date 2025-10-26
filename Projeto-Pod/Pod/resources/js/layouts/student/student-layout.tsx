import { Link, router, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';
import { BookOpen, User, Trophy, TrendingUp, Menu, X, LogOut } from 'lucide-react';

// Import avatars
import NikoAvatar from '@/assets/Niko.svg';
import TinaAvatar from '@/assets/Tina.svg';
import AvatarM from '@/assets/avatarM.svg';

export default function StudentLayout({ children }: PropsWithChildren) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { url, props } = usePage<{ auth: { user: { name: string; avatar?: string } } }>();

    const user = props.auth?.user;
    const firstName = user?.name?.split(' ')[0] || 'Usuário';

    // Map avatar name to imported asset
    const getAvatarSrc = (avatarName?: string) => {
        if (!avatarName) return null;

        const avatarMap: Record<string, string> = {
            'niko': NikoAvatar,
            'niko.svg': NikoAvatar,
            'tina': TinaAvatar,
            'tina.svg': TinaAvatar,
            'avatarm': AvatarM,
            'avatarm.svg': AvatarM,
        };

        const normalized = avatarName.toLowerCase();
        return avatarMap[normalized] || null;
    };

    const avatarSrc = getAvatarSrc(user?.avatar);

    const menuItems = [
        { name: 'Dashboard', icon: BookOpen, href: '/app/dashboard' },
        { name: 'Meu Perfil', icon: User, href: '/app/profile' },
        { name: 'Ranking', icon: Trophy, href: '/app/ranking' },
        { name: 'Progresso', icon: TrendingUp, href: '/app/progress' },
        { name: 'Quizzes', icon: BookOpen, href: '/app/quiz' },
    ];

    const handleLogout = () => {
        router.post('/logout');
    };

    const isActive = (href: string) => {
        return url === href || url.startsWith(href + '/');
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* Sidebar */}
            <aside
                className={`${
                    sidebarOpen ? 'w-72' : 'w-20'
                } bg-white text-gray-800 transition-all duration-300 ease-in-out flex flex-col shadow-lg overflow-hidden`}
            >
                {/* Header with User Profile */}
                <div className={`p-6 border-b border-gray-200 ${!sidebarOpen ? 'flex justify-center' : ''}`}>
                    {sidebarOpen ? (
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                                {avatarSrc ? (
                                    <img
                                        src={avatarSrc}
                                        alt={user?.name}
                                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                )}
                                <div className="transition-opacity duration-300 min-w-0">
                                    <h1 className="text-base font-bold text-gray-900 leading-tight whitespace-nowrap">Olá, {firstName}</h1>
                                    <p className="text-xs text-blue-600 whitespace-nowrap">Nível 5</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                            >
                                <X size={20} className="text-gray-600" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <Menu size={20} className="text-gray-600" />
                        </button>
                    )}
                </div>

                {/* Menu Principal */}
                <div className="flex-1 py-4">
                    <div className={`px-6 mb-3 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                        <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2 whitespace-nowrap">
                            <div className="w-1 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
                            MENU PRINCIPAL
                        </h2>
                    </div>

                    <nav className="px-3 space-y-1 flex flex-col">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center ${sidebarOpen ? 'gap-3 px-3 py-2.5' : 'justify-center py-2.5 px-2'} rounded-lg transition-all duration-300 group ${
                                        active
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-blue-600 hover:bg-blue-50'
                                    }`}
                                    title={!sidebarOpen ? item.name : undefined}
                                >
                                    <Icon className="w-5 h-5 flex-shrink-0" />
                                    <span className={`font-medium text-sm transition-all duration-300 whitespace-nowrap ${sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}`}>
                                        {item.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Logout Button */}
                <div className="mt-auto">
                    <div className="border-t border-gray-200 mb-6"></div>
                    <div className="p-6">
                        <button
                            onClick={handleLogout}
                            className={`text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300 flex items-center ${
                                sidebarOpen ? 'gap-2 py-3 px-3 w-full' : 'justify-center py-3 px-2'
                            }`}
                            title={!sidebarOpen ? 'Sair' : undefined}
                        >
                            <LogOut className="w-5 h-5 flex-shrink-0" />
                            <span className={`text-sm transition-all duration-300 whitespace-nowrap ${sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}`}>
                                Sair
                            </span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <div className="p-8">{children}</div>
            </main>
        </div>
    );
}
