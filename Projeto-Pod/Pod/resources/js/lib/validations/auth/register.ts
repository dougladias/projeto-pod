import { z } from 'zod';

/**
 * Schema de validação para Registro
 */
export const registerSchema = z.object({
    name: z
        .string()
        .min(1, 'Nome completo é obrigatório')
        .min(3, 'Nome deve ter no mínimo 3 caracteres')
        .max(255, 'Nome muito longo'),
    school: z
        .string()
        .min(1, 'Nome da escola é obrigatório')
        .max(255, 'Nome da escola muito longo'),
    birth_date: z
        .string()
        .min(1, 'Data de nascimento é obrigatória')
        .refine((date) => {
            const birthDate = new Date(date);
            const today = new Date();
            return birthDate < today;
        }, 'Data de nascimento deve ser anterior à data atual'),
    cpf: z
        .string()
        .min(1, 'CPF é obrigatório')
        .length(14, 'CPF deve ter 11 dígitos (formato: 000.000.000-00)'),
    school_year: z.enum(['6', '7', '8', '9', '1', '2', '3'], {
        message: 'Selecione o ano escolar',
    }),
    gender: z.enum(['male', 'female'], {
        message: 'Selecione o sexo',
    }),
    language: z.enum(['pt-BR', 'en-US', 'es-ES'], {
        message: 'Selecione o idioma',
    }),
    email: z
        .string()
        .min(1, 'E-mail é obrigatório')
        .email({ message: 'E-mail inválido' })
        .max(255, 'E-mail muito longo'),
    phone: z
        .string()
        .min(1, 'Telefone é obrigatório')
        .max(15, 'Telefone inválido'),
    avatar: z.string().optional(),
    password: z
        .string()
        .min(1, 'Senha é obrigatória')
        .min(6, 'Senha deve ter no mínimo 6 caracteres'),
    terms: z.literal(true, {
        message: 'Você deve aceitar os termos e condições',
    }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
