import { z } from 'zod';

/**
 * Schema de validação para Resetar Senha
 */
export const resetPasswordSchema = z
    .object({
        token: z.string().min(1, 'Token inválido'),
        email: z
            .string()
            .min(1, 'E-mail é obrigatório')
            .email({ message: 'E-mail inválido' }),
        password: z
            .string()
            .min(1, 'Senha é obrigatória')
            .min(8, 'Senha deve ter no mínimo 8 caracteres'),
        password_confirmation: z
            .string()
            .min(1, 'Confirmação de senha é obrigatória'),
    })
    .refine((data) => data.password === data.password_confirmation, {
        message: 'As senhas não coincidem',
        path: ['password_confirmation'],
    });

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
