import { z } from 'zod';

/**
 * Schema de validação para Esqueceu a Senha
 */
export const forgotPasswordSchema = z.object({
    email: z
        .string()
        .min(1, 'E-mail é obrigatório')
        .email({ message: 'E-mail inválido' }),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
