'use client';

import InputError from '@/components/common/input-error';
import TextLink from '@/components/common/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { email } from '@/routes/password';
import { router } from '@inertiajs/react';
import { useState, FormEvent } from 'react';
import { toast } from 'sonner';
import { ForgotPasswordHeader } from './ForgotPasswordHeader';
import { forgotPasswordSchema } from '@/lib/validations/auth/forgot-password';
import type { ZodIssue } from 'zod';

interface ForgotPasswordFormProps {
    status?: string;
}

export function ForgotPasswordForm({ status }: ForgotPasswordFormProps) {
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
    const [processing, setProcessing] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValidationErrors({});

        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get('email') as string,
        };

        // Validação Zod
        const result = forgotPasswordSchema.safeParse(data);

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
        router.post(email.url(), result.data, {
            onFinish: () => setProcessing(false),
            onSuccess: () => {
                toast.success('Link enviado!', {
                    description: 'Verifique seu e-mail para redefinir sua senha.',
                });
            },
            onError: (errors) => {
                if (errors.email) {
                    toast.error('Erro ao enviar link', {
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
                <ForgotPasswordHeader />

                {/* Formulário */}
                <form
                    className="space-y-3.5"
                    onSubmit={handleSubmit}
                >
                    {/* Campo E-mail */}
                    <div className="space-y-1">
                        <Label htmlFor="email" className="text-gray-400 text-xs font-normal">
                            E-mail
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            placeholder="seu@email.com"
                            className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"
                        />
                        <InputError message={validationErrors.email} />
                    </div>

                    {/* Botão Enviar Link */}
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors h-9 text-sm mt-5 cursor-pointer"
                        tabIndex={2}
                        disabled={processing}
                    >
                        {processing && <Spinner />}
                        Enviar link de recuperação
                    </Button>

                    {/* Link de Voltar ao Login */}
                    <div className="text-center text-xs text-gray-400 pt-3">
                        Lembrou a senha?{' '}
                        <TextLink href={login()} className="text-blue-400 hover:text-blue-300 no-underline" tabIndex={3}>
                            Voltar ao login
                        </TextLink>
                    </div>
                </form>
            </div>
        </div>
    );
}
