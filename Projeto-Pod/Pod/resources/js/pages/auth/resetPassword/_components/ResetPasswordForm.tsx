'use client';

import InputError from '@/components/common/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store } from '@/routes/password';
import { router } from '@inertiajs/react';
import { useState, FormEvent } from 'react';
import { toast } from 'sonner';
import { ResetPasswordHeader } from './ResetPasswordHeader';
import { resetPasswordSchema } from '@/lib/validations/auth/reset-password';
import type { ZodIssue } from 'zod';
import { Eye, EyeOff } from 'lucide-react';

interface ResetPasswordFormProps {
    token: string;
    email: string;
}

export function ResetPasswordForm({ token, email }: ResetPasswordFormProps) {
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
    const [processing, setProcessing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValidationErrors({});

        const formData = new FormData(e.currentTarget);
        const data = {
            token,
            email,
            password: formData.get('password') as string,
            password_confirmation: formData.get('password_confirmation') as string,
        };

        // Validação Zod
        const result = resetPasswordSchema.safeParse(data);

        if (!result.success) {
            const errors: Record<string, string> = {};
            result.error.issues.forEach((issue: ZodIssue) => {
                if (issue.path[0]) {
                    errors[issue.path[0] as string] = issue.message;
                }
            });
            setValidationErrors(errors);
            return;
        }

        // Se passou na validação, envia para o backend
        setProcessing(true);
        router.post(store.url(), result.data, {
            onFinish: () => setProcessing(false),
            onSuccess: () => {
                toast.success('Senha redefinida com sucesso!', {
                    description: 'Você será redirecionado para o login.',
                });
            },
            onError: (errors) => {
                if (errors.email) {
                    toast.error('Erro ao redefinir senha', {
                        description: errors.email as string,
                    });
                }
            },
            preserveScroll: true,
        });
    };

    return (
        <div className="w-full lg:w-1/4 flex items-center justify-center bg-black p-6">
            <div className="w-full px-6">
                <ResetPasswordHeader />

                {/* Formulário */}
                <form
                    className="space-y-3.5"
                    onSubmit={handleSubmit}
                >
                    {/* Campo E-mail (readonly) */}
                    <div className="space-y-1">
                        <Label htmlFor="email" className="text-gray-400 text-xs font-normal">
                            E-mail
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            readOnly
                            className="bg-[#1a1a1a] border-gray-800 text-gray-500 h-9 text-sm rounded-md cursor-not-allowed"
                        />
                    </div>

                    {/* Campo Nova Senha */}
                    <div className="space-y-1">
                        <Label htmlFor="password" className="text-gray-400 text-xs font-normal">
                            Nova Senha
                        </Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                autoFocus
                                tabIndex={1}
                                autoComplete="new-password"
                                placeholder="Mínimo 8 caracteres"
                                className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
                                tabIndex={-1}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                        <InputError message={validationErrors.password} />
                    </div>

                    {/* Campo Confirmar Senha */}
                    <div className="space-y-1">
                        <Label htmlFor="password_confirmation" className="text-gray-400 text-xs font-normal">
                            Confirmar Senha
                        </Label>
                        <div className="relative">
                            <Input
                                id="password_confirmation"
                                type={showPasswordConfirmation ? 'text' : 'password'}
                                name="password_confirmation"
                                tabIndex={2}
                                autoComplete="new-password"
                                placeholder="Digite a senha novamente"
                                className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
                                tabIndex={-1}
                            >
                                {showPasswordConfirmation ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                        <InputError message={validationErrors.password_confirmation} />
                    </div>

                    {/* Botão Redefinir Senha */}
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors h-9 text-sm mt-5 cursor-pointer"
                        tabIndex={3}
                        disabled={processing}
                    >
                        {processing && <Spinner />}
                        Redefinir Senha
                    </Button>
                </form>
            </div>
        </div>
    );
}
