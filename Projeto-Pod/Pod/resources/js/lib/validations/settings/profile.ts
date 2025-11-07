import { z } from 'zod';

export const profileUpdateSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório').max(255, 'Nome muito longo'),

    email: z
        .string()
        .min(1, 'E-mail é obrigatório')
        .email('E-mail inválido')
        .max(255, 'E-mail muito longo'),

    phone: z
        .string()
        .max(20, 'Telefone muito longo')
        .optional()
        .nullable(),

    city: z
        .string()
        .max(255, 'Cidade muito longa')
        .optional()
        .nullable(),

    vape_usage: z
        .string()
        .max(255, 'Valor muito longo')
        .optional()
        .nullable(),

    bio: z
        .string()
        .max(1000, 'Bio muito longa (máximo 1000 caracteres)')
        .optional()
        .nullable(),
});

export type ProfileUpdateForm = z.infer<typeof profileUpdateSchema>;
