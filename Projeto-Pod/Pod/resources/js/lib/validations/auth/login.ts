import { z } from 'zod';

/**
 * Schema de validação para Login
 */
export const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'CPF é obrigatório')
        .max(14, 'CPF inválido'),
    password: z
        .string()
        .min(1, 'Senha é obrigatória')
        .max(50, 'Senha muito longa'),
    remember: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
