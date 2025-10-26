/**
 * Funções de máscaras para formatação de campos de formulário
 */

/**
 * Formata CPF: 000.000.000-00
 * @param value - Valor a ser formatado
 * @returns Valor formatado
 */
export const formatCPF = (value: string): string => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');

    // Aplica a máscara: 000.000.000-00
    return numbers
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
};

/**
 * Formata telefone: (00) 00000-0000 ou (00) 0000-0000
 * @param value - Valor a ser formatado
 * @returns Valor formatado
 */
export const formatPhone = (value: string): string => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');

    // Aplica a máscara
    if (numbers.length <= 10) {
        // Formato: (00) 0000-0000
        return numbers
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
    } else {
        // Formato: (00) 00000-0000
        return numbers
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
    }
};

/**
 * Formata data: DD/MM/AAAA
 * @param value - Valor a ser formatado
 * @returns Valor formatado
 */
export const formatDate = (value: string): string => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');

    // Aplica a máscara: DD/MM/AAAA
    return numbers
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{4})\d+?$/, '$1');
};

/**
 * Formata CEP: 00000-000
 * @param value - Valor a ser formatado
 * @returns Valor formatado
 */
export const formatCEP = (value: string): string => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');

    // Aplica a máscara: 00000-000
    return numbers
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');
};

/**
 * Remove a formatação de um valor, mantendo apenas números
 * @param value - Valor formatado
 * @returns Apenas números
 */
export const removeFormat = (value: string): string => {
    return value.replace(/\D/g, '');
};

/**
 * Formata valor monetário: R$ 0.000,00
 * @param value - Valor a ser formatado
 * @returns Valor formatado
 */
export const formatCurrency = (value: string | number): string => {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(numValue)) return 'R$ 0,00';

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(numValue);
};
