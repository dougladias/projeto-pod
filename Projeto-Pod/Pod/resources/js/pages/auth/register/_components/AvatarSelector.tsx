import { Label } from '@/components/ui/label';
import InputError from '@/components/common/input-error';
import NikoAvatar from '@/assets/Niko.svg';
import TinaAvatar from '@/assets/Tina.svg';

const AVATARS = [
    { id: 'niko', src: NikoAvatar, alt: 'Niko' },
    { id: 'tina', src: TinaAvatar, alt: 'Tina' },
];

interface AvatarSelectorProps {
    selectedAvatar: string;
    onSelectAvatar: (avatarId: string) => void;
    error?: string;
}

export function AvatarSelector({ selectedAvatar, onSelectAvatar, error }: AvatarSelectorProps) {
    return (
        <div className="space-y-3 py-4">
            <Label className="text-gray-400 text-xs font-normal block">Escolha seu avatar</Label>
            <div className="flex justify-start items-center gap-4 min-h-[80px]">
                {AVATARS.map((avatar) => (
                    <button
                        key={avatar.id}
                        type="button"
                        onClick={() => onSelectAvatar(avatar.id)}
                        className={`border-4 p-1 transition-all rounded-full cursor-pointer ${
                            selectedAvatar === avatar.id
                                ? 'scale-110 border-blue-600 bg-blue-600/10'
                                : 'border-gray-600 opacity-70 hover:opacity-100 hover:border-blue-400'
                        }`}
                    >
                        <img
                            src={avatar.src}
                            alt={avatar.alt}
                            className="h-16 w-auto"
                        />
                    </button>
                ))}
            </div>
            <input type="hidden" name="avatar" value={selectedAvatar} />
            <InputError message={error} />
        </div>
    );
}
