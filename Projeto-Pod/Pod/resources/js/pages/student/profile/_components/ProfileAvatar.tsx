import NikoAvatar from '@/assets/Niko.webp';
import TinaAvatar from '@/assets/Tina.webp';
import AvatarM from '@/assets/avatarM.webp';
import { User } from 'lucide-react';
import type { ProfileAvatarProps } from '@/types/profile';

export function ProfileAvatar({ name, avatar }: ProfileAvatarProps) {
    // Map avatar name to imported asset
    const getAvatarSrc = (avatarName?: string | null) => {
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

    const avatarSrc = getAvatarSrc(avatar);

    return (
        <div className="flex justify-center mb-4">
            {avatarSrc ? (
                <img
                    src={avatarSrc}
                    alt={name}
                    className="w-24 h-24 rounded-full object-cover"
                />
            ) : (
                <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                </div>
            )}
        </div>
    );
}
