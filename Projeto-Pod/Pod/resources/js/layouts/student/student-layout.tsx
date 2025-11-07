import { Link, router, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';
import { BookOpen, User, Menu, X, LogOut, Play, UserCircle, LayoutDashboard, Trophy, Crown } from 'lucide-react';

// Import avatars
import NikoAvatar from '@/assets/Niko.webp';
import TinaAvatar from '@/assets/Tina.webp';
import AvatarM from '@/assets/avatarM.webp';

export default function StudentLayout({ children }: PropsWithChildren) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { url, props } = usePage<{ auth: { user: { name: string; avatar?: string; total_completed_quizzes?: number } } }>();

    const user = props.auth?.user;
    const firstName = user?.name?.split(' ')[0] || 'Usuário';
    const userLevel = Math.min(user?.total_completed_quizzes || 0, 6);

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
        { name: 'Dashboard', icon: LayoutDashboard, href: '/app/dashboard' },
        { name: 'Meu Perfil', icon: UserCircle, href: '/settings/profile' },
        { name: 'Ranking', icon: Trophy, href: '/app/ranking' },
        { name: 'Jogar Quiz', icon: Play, href: '/app/playQuiz' },
        { name: 'Meus Quizzes', icon: BookOpen, href: '/app/myQuiz' },
    ];

    const handleLogout = () => {
        router.post('/logout');
    };

    const isActive = (href: string) => {
        return url === href || url.startsWith(href + '/');
    };

    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar */}
            <aside
                className={`${
                    sidebarOpen ? 'w-72' : 'w-20'
                } bg-white text-gray-800 transition-all duration-300 ease-in-out flex flex-col shadow-lg h-screen sticky top-0 overflow-y-auto overflow-x-hidden`}
            >
                {/* Header with User Profile */}
                <div className={`p-6 ${!sidebarOpen ? 'flex justify-center' : ''}`}>
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
                                    <p className="text-xs text-black whitespace-nowrap flex items-center gap-1">
                                        <Crown className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                        Nível {userLevel}
                                    </p>
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
                            <Menu size={20} className="text-black" />
                        </button>
                    )}
                </div>

                {/* Separator */}
                <div className="border-t mx-6" style={{ borderColor: '#BECFFF' }}></div>

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
                                    className={`flex items-center rounded-lg transition-all duration-300 group ${
                                        sidebarOpen ? 'gap-3 px-3 py-2.5' : 'justify-center py-2.5 px-2'
                                    } ${
                                        active
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'hover:bg-blue-50'
                                    } ${!sidebarOpen && active ? 'w-12 mx-auto' : ''}`}
                                    title={!sidebarOpen ? item.name : undefined}
                                >
                                    <Icon className={`w-5 h-5 flex-shrink-0 ${!sidebarOpen ? 'mx-auto' : ''}`} style={active ? {} : { color: '#091ABC' }} />
                                    <span className={`font-medium text-sm transition-opacity duration-300 whitespace-nowrap ${sidebarOpen ? 'opacity-100' : 'opacity-0 absolute'} ${active ? 'text-white' : 'text-black'}`}>
                                        {item.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Logout Button */}
                <div className="mt-auto">
                    <div className="border-t mb-1 mx-6 mt-16" style={{ borderColor: '#BECFFF' }}></div>
                    <div className="p-6">
                        <button
                            onClick={handleLogout}
                            className={`hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300 flex items-center cursor-pointer ${
                                sidebarOpen ? 'gap-2 py-3 px-3 w-full' : 'justify-center py-3 px-2'
                            }`}
                            title={!sidebarOpen ? 'Sair' : undefined}
                        >
                            <LogOut className={`w-5 h-5 flex-shrink-0 ${!sidebarOpen ? 'mx-auto' : ''}`} style={{ color: '#091ABC' }} />
                            <span className={`text-sm transition-opacity duration-300 whitespace-nowrap ${sidebarOpen ? 'opacity-100' : 'opacity-0 absolute'} text-black`}>
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
