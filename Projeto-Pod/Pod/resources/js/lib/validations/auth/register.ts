import { z } from 'zod';

/**
 * Schema de validação para Registro
 */
export const registerSchema = z.object({
    name: z
        .string()
        .min(1, 'Nome obrigatório')
        .min(3, 'Mínimo 3 letras')
        .max(130, 'Nome muito longo'),
    school: z
        .string()
        .min(1, 'Escola obrigatória')
        .max(200, 'Nome muito longo'),
    birth_date: z
        .string()
        .min(1, 'Data obrigatória'),
    cpf: z
        .string()
        .min(1, 'CPF obrigatório')
        .length(14, 'CPF inválido'),
    school_year: z.enum(['6', '7', '8', '9', '1', '2', '3'], {
        message: 'Selecione o ano',
    }),
    gender: z.enum(['male', 'female', 'other'], {
        message: 'Selecione o sexo',
    }),
    language: z.enum(['pt-BR', 'en-US', 'es-ES'], {
        message: 'Selecione o idioma',
    }),
    email: z
        .string()
        .min(1, 'E-mail obrigatório')
        .email({ message: 'E-mail inválido' })
        .max(50, 'E-mail muito longo'),
    phone: z
        .string()
        .min(1, 'Telefone obrigatório')
        .max(15, 'Telefone inválido'),
    avatar: z.string().optional(),
    password: z
        .string()
        .min(1, 'Senha obrigatória')
        .min(6, 'Mínimo 6 caracteres')
        .max(50, 'Senha muito longa'),
    password_confirmation: z
        .string()
        .min(1, 'Confirme a senha'),
    terms: z.boolean().refine((val) => val === true, {
        message: 'Aceite os termos',
    }),
}).refine((data) => data.password === data.password_confirmation, {
    message: 'Senhas não coincidem',
    path: ['password_confirmation'],
});

export type RegisterFormData = z.infer<typeof registerSchema>;
