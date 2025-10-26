'use client';

import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import { router } from '@inertiajs/react';
import { useState, FormEvent } from 'react';
import { registerSchema } from '@/lib/validations/auth/register';
import type { ZodIssue } from 'zod';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/common/input-error';
import { formatCPF, formatPhone } from '@/lib/masks/masks';
import BR from 'country-flag-icons/react/3x2/BR';
import US from 'country-flag-icons/react/3x2/US';
import ES from 'country-flag-icons/react/3x2/ES';
import { FormField, SelectField } from '@/components/form';
import { RegisterHeader } from './RegisterHeader';
import { AvatarSelector } from './AvatarSelector';
import { TermsCheckbox } from './TermsCheckbox';
import { PasswordFields } from './PasswordFields';
import { SuccessModal } from './SuccessModal';

export function RegisterForm() {
    const [selectedAvatar, setSelectedAvatar] = useState<string>('');
    const [selectedGender, setSelectedGender] = useState<string>('');
    const [selectedSchoolYear, setSelectedSchoolYear] = useState<string>('');
    const [selectedLanguage, setSelectedLanguage] = useState<string>('pt-BR');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [cpfValue, setCpfValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [passwordConfirmValue, setPasswordConfirmValue] = useState('');
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
    const [processing, setProcessing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatCPF(e.target.value);
        setCpfValue(formatted);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(e.target.value);
        setPhoneValue(formatted);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPasswordValue(value);

        // Valida em tempo real se a confirmação já foi preenchida
        if (passwordConfirmValue && value !== passwordConfirmValue) {
            setValidationErrors(prev => ({
                ...prev,
                password_confirmation: 'Senhas não coincidem'
            }));
        } else {
            setValidationErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.password_confirmation;
                return newErrors;
            });
        }
    };

    const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPasswordConfirmValue(value);

        // Valida em tempo real
        if (passwordValue && value !== passwordValue) {
            setValidationErrors(prev => ({
                ...prev,
                password_confirmation: 'Senhas não coincidem'
            }));
        } else {
            setValidationErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.password_confirmation;
                return newErrors;
            });
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValidationErrors({});

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            school: formData.get('school') as string,
            birth_date: formData.get('birth_date') as string,
            cpf: formData.get('cpf') as string,
            school_year: formData.get('school_year') as string,
            gender: formData.get('gender') as string,
            language: formData.get('language') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            password: formData.get('password') as string,
            password_confirmation: formData.get('password_confirmation') as string,
            avatar: formData.get('avatar') as string,
            terms: formData.get('terms') === '1',
        };

        // Validação Zod
        const result = registerSchema.safeParse(data);

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
        router.post(RegisteredUserController.store.url(), result.data, {
            onFinish: () => setProcessing(false),
            onSuccess: () => {
                // Mostra o modal de sucesso
                setShowSuccess(true);
            },
            onError: (errors) => {
                // Mostra erros do servidor
                setValidationErrors(errors as Record<string, string>);
            },
            preserveScroll: true,
        });
    };

    const schoolYearOptions = [
        { value: '6', label: '6º Ano' },
        { value: '7', label: '7º Ano' },
        { value: '8', label: '8º Ano' },
        { value: '9', label: '9º Ano' },
        { value: '1', label: '1º Médio' },
        { value: '2', label: '2º Médio' },
        { value: '3', label: '3º Médio' },
    ];

    const genderOptions = [
        { value: 'male', label: 'Masculino' },
        { value: 'female', label: 'Feminino' },
        { value: 'other', label: 'Prefiro não dizer' },
    ];

    const languageOptions = [
        {
            value: 'pt-BR',
            label: (
                <div className="flex items-center gap-2">
                    <BR className="w-5 h-4" />
                    <span>Português (Brasil)</span>
                </div>
            )
        },
        {
            value: 'en-US',
            label: (
                <div className="flex items-center gap-2">
                    <US className="w-5 h-4" />
                    <span>English (United States)</span>
                </div>
            )
        },
        {
            value: 'es-ES',
            label: (
                <div className="flex items-center gap-2">
                    <ES className="w-5 h-4" />
                    <span>Español (España)</span>
                </div>
            )
        },
    ];

    return (
        <div className="flex w-full items-center justify-center bg-black p-8 lg:w-1/2">
            <div className="w-full max-w-2xl space-y-6">
                <RegisterHeader />

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name - Full Width */}
                    <FormField
                        id="name"
                        name="name"
                        label="Nome Completo"
                        type="text"
                        autoFocus
                        autoComplete="name"
                        placeholder="Digite seu nome completo"
                        error={validationErrors.name}
                    />

                    {/* School and Birth Date */}
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            id="school"
                            name="school"
                            label="Escola"
                            type="text"
                            autoComplete="organization"
                            placeholder="Nome da escola"
                            error={validationErrors.school}
                        />

                        <div className="space-y-2">
                            <Label htmlFor="birth_date" className="text-gray-400 text-xs font-normal">
                                Data de Nasc.
                            </Label>
                            <div className="relative">
                                <Input
                                    id="birth_date"
                                    name="birth_date"
                                    type="date"
                                    autoComplete="bday"
                                    className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:left-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer pl-8"
                                />
                            </div>
                            <InputError message={validationErrors.birth_date} />
                        </div>
                    </div>

                    {/* CPF and School Year */}
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            id="cpf"
                            name="cpf"
                            label="CPF"
                            type="text"
                            autoComplete="off"
                            placeholder="000.000.000-00"
                            maxLength={14}
                            value={cpfValue}
                            onChange={handleCPFChange}
                            error={validationErrors.cpf}
                        />

                        <SelectField
                            id="school_year"
                            name="school_year"
                            label="Ano Escolar"
                            placeholder="Selecione"
                            options={schoolYearOptions}
                            value={selectedSchoolYear}
                            onValueChange={setSelectedSchoolYear}
                            error={validationErrors.school_year}
                        />
                    </div>

                    {/* Gender and Phone */}
                    <div className="grid grid-cols-2 gap-4">
                        <SelectField
                            id="gender"
                            name="gender"
                            label="Sexo"
                            placeholder="Selecione"
                            options={genderOptions}
                            value={selectedGender}
                            onValueChange={setSelectedGender}
                            error={validationErrors.gender}
                        />

                        <FormField
                            id="phone"
                            name="phone"
                            label="Telefone com DDD"
                            type="tel"
                            autoComplete="tel"
                            placeholder="(00) 00000-0000"
                            maxLength={15}
                            value={phoneValue}
                            onChange={handlePhoneChange}
                            error={validationErrors.phone}
                        />
                    </div>

                    {/* Email and Language */}
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            id="email"
                            name="email"
                            label="E-mail"
                            type="email"
                            autoComplete="email"
                            placeholder="email@exemplo.com"
                            error={validationErrors.email}
                        />

                        <SelectField
                            id="language"
                            name="language"
                            label="Idioma"
                            placeholder="Selecione o idioma"
                            options={languageOptions}
                            value={selectedLanguage}
                            onValueChange={setSelectedLanguage}
                            error={validationErrors.language}
                        />
                    </div>

                    {/* Password and Password Confirmation */}
                    <PasswordFields
                        passwordValue={passwordValue}
                        passwordConfirmValue={passwordConfirmValue}
                        onPasswordChange={handlePasswordChange}
                        onPasswordConfirmChange={handlePasswordConfirmChange}
                        passwordError={validationErrors.password}
                        passwordConfirmError={validationErrors.password_confirmation}
                    />

                    {/* Avatar Selection */}
                    <AvatarSelector
                        selectedAvatar={selectedAvatar}
                        onSelectAvatar={setSelectedAvatar}
                        error={validationErrors.avatar}
                    />

                    {/* Terms and Conditions */}
                    <TermsCheckbox
                        checked={acceptedTerms}
                        onCheckedChange={setAcceptedTerms}
                        error={validationErrors.terms}
                    />

                    {/* Register Button */}
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors h-12 text-base mt-5 cursor-pointer"
                        disabled={processing || !acceptedTerms}
                    >
                        {processing && <Spinner />}
                        Cadastrar
                    </Button>
                </form>
            </div>

            {/* Modal de Sucesso */}
            <SuccessModal show={showSuccess} />
        </div>
    );
}
