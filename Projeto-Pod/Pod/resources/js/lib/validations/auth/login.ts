import { z } from 'zod';

/**
 * Schema de validação para Login
 */
export const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'CPF é obrigatório'),
    password: z
        .string()
        .min(1, 'Senha é obrigatória'),        
    user_type: z.enum(['aluno', 'administrador'], {
        message: 'Selecione o tipo de usuário',
    }),
    remember: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
