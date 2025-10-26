import { Label } from '@/components/ui/label';
import InputError from '@/components/common/input-error';
import { PasswordInput } from '@/components/common/password-input';

interface PasswordFieldsProps {
    passwordValue: string;
    passwordConfirmValue: string;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordConfirmChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    passwordError?: string;
    passwordConfirmError?: string;
}

export function PasswordFields({
    passwordValue,
    passwordConfirmValue,
    onPasswordChange,
    onPasswordConfirmChange,
    passwordError,
    passwordConfirmError,
}: PasswordFieldsProps) {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-400 text-xs font-normal">Senha</Label>
                <PasswordInput
                    id="password"
                    name="password"
                    value={passwordValue}
                    onChange={onPasswordChange}
                    placeholder="Digite sua senha"
                    className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"
                />
                <InputError message={passwordError} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password_confirmation" className="text-gray-400 text-xs font-normal">Confirmar Senha</Label>
                <PasswordInput
                    id="password_confirmation"
                    name="password_confirmation"
                    value={passwordConfirmValue}
                    onChange={onPasswordConfirmChange}
                    placeholder="Confirme sua senha"
                    className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"
                />
                <InputError message={passwordConfirmError} />
            </div>
        </div>
    );
}
