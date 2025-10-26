'use client';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { register, login } from '@/routes';
import { request } from '@/routes/password';
import { router } from '@inertiajs/react';
import { useState, FormEvent } from 'react';
import { loginSchema } from '@/lib/validations/auth/login';
import type { ZodIssue } from 'zod';
import { PasswordField } from './PasswordField';
import { LoginHeader } from './LoginHeader';
import { formatCPF } from '@/lib/masks';
import { toast } from 'sonner';

interface LoginFormProps {
    status?: string;
    canResetPassword: boolean;
}

export function LoginForm({ status, canResetPassword }: LoginFormProps) {
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
    const [processing, setProcessing] = useState(false);
    const [cpfValue, setCpfValue] = useState('');

    const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatCPF(e.target.value);
        setCpfValue(formatted);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValidationErrors({});

        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            remember: formData.get('remember') === 'on',
        };

        // Validação Zod
        const result = loginSchema.safeParse(data);

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
        router.post(login.url(), result.data, {
            onFinish: () => setProcessing(false),
            onSuccess: () => {
                // Mostra toast de sucesso
                toast.success('Login realizado com sucesso!', {
                    description: 'Redirecionando...',
                });
            },
            onError: (errors) => {
                // Não mostra erros inline, apenas toast
                // Mostra toast de erro
                if (errors.email) {
                    toast.error('Erro ao fazer login', {
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
                <LoginHeader />

                {/* Status Message */}
                {status && (
                    <div className="mb-4 p-3 rounded-md bg-green-500/10 border border-green-500/20">
                        <p className="text-sm text-green-400">{status}</p>
                    </div>
                )}

                {/* Formulário */}
                <form
                    className="space-y-3.5"
                    onSubmit={handleSubmit}
                >
                    {/* Campo CPF */}
                    <div className="space-y-1">
                        <Label htmlFor="cpf" className="text-gray-400 text-xs font-normal">
                            CPF
                        </Label>
                        <Input
                            id="cpf"
                            type="text"
                            name="email"
                            value={cpfValue}
                            onChange={handleCPFChange}
                            autoFocus
                            tabIndex={1}
                            autoComplete="username"
                            placeholder="000.000.000-00"
                            maxLength={14}
                            className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"
                        />
                        <InputError message={validationErrors.email} />
                    </div>

                    {/* Campo Senha */}
                    <PasswordField error={validationErrors.password} />

                    {/* Lembrar-me e Esqueceu a senha */}
                    <div className="flex items-center justify-between text-xs pt-1">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remember"
                                name="remember"
                                tabIndex={3}
                                className="border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 h-3.5 w-3.5"
                            />
                            <Label htmlFor="remember" className="text-gray-400 cursor-pointer font-normal text-xs">
                                Lembrar-me
                            </Label>
                        </div>
                        {canResetPassword && (
                            <TextLink
                                href={request()}
                                className="text-blue-400 hover:text-blue-300 text-xs no-underline"
                                tabIndex={5}
                            >
                                Esqueceu a sua senha?
                            </TextLink>
                        )}
                    </div>

                    {/* Botão Entrar */}
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors h-9 text-sm mt-5 cursor-pointer"
                        tabIndex={4}
                        disabled={processing}
                    >
                        {processing && <Spinner />}
                        Entrar
                    </Button>

                    {/* Link de Cadastro */}
                    <div className="text-center text-xs text-gray-400 pt-3">
                        Não tem uma conta?{' '}
                        <TextLink href={register()} className="text-blue-400 hover:text-blue-300 no-underline" tabIndex={6}>
                            Cadastre-se
                        </TextLink>
                    </div>
                </form>
            </div>
        </div>
    );
}
