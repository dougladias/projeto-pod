import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import { useState, useRef } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// Import avatar images
import NikoAvatar from '@/assets/Niko.svg';
import TinaAvatar from '@/assets/Tina.svg';
import LogoQuiz from '@/assets/LogoQuiz.svg';

// Available avatars
const AVATARS = [
    { id: 'niko', src: NikoAvatar, alt: 'Niko' },
    { id: 'tina', src: TinaAvatar, alt: 'Tina' },
];

export default function Register() {
    const [selectedAvatar, setSelectedAvatar] = useState<string>('');
    const [selectedGender, setSelectedGender] = useState<string>('');
    const [selectedSchoolYear, setSelectedSchoolYear] = useState<string>('');
    const [selectedLanguage, setSelectedLanguage] = useState<string>('pt-BR');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const loadedCountRef = useRef(0);

    const handleImageLoad = () => {
        loadedCountRef.current += 1;
        if (loadedCountRef.current === 3) {
            setImagesLoaded(true);
        }
    };

    if (!imagesLoaded) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="hidden">
                    <img src={NikoAvatar} onLoad={handleImageLoad} alt="" />
                    <img src={TinaAvatar} onLoad={handleImageLoad} alt="" />
                    <img src={LogoQuiz} onLoad={handleImageLoad} alt="" />
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen">
            <Head title="Quiz Missão - Register" />

            {/* Left Side - Logo */}
            <div className="hidden w-1/2 items-center justify-center bg-primary lg:flex">
                <div className="text-center space-y-8">
                    <img
                        src={LogoQuiz}
                        alt="Quiz Missão Caça Vape"
                        className="w-auto h-auto max-w-md drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                    />

                    {/* Login Link */}
                    <div className="text-white text-lg">
                        Já tem uma conta?{' '}
                        <TextLink href={login()} className="text-yellow-400 hover:text-yellow-300 no-underline font-semibold">
                            Fazer login
                        </TextLink>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex w-full items-center justify-center bg-black p-8 lg:w-1/2">
                <div className="w-full max-w-2xl space-y-6">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="w-1.5 h-5 bg-blue-600 rounded-sm"></span>
                            CADASTRE-SE
                        </h2>
                    </div>

                    <Form
                        {...RegisteredUserController.store.form()}
                        resetOnSuccess={['password']}
                        disableWhileProcessing
                        className="space-y-4"
                    >
                        {({ processing, errors }) => (
                            <>
                                {/* Full Name and School */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-white text-base font-normal">Nome Completo</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            autoFocus
                                            autoComplete="name"
                                            placeholder="Digite seu nome completo"
                                            className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"
                                        />
                                        <InputError message={errors.name} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="school" className="text-white text-base font-normal">Escola</Label>
                                        <Input
                                            id="school"
                                            name="school"
                                            type="text"
                                            required
                                            autoComplete="organization"
                                            placeholder="Nome da escola"
                                            className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"
                                        />
                                        <InputError message={errors.school} />
                                    </div>
                                </div>

                                {/* Birth Date and CPF */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="birth_date" className="text-white text-base font-normal">
                                            Data de Nasc.
                                        </Label>
                                        <Input
                                            id="birth_date"
                                            name="birth_date"
                                            type="date"
                                            required
                                            autoComplete="bday"
                                            className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"
                                        />
                                        <InputError
                                            message={errors.birth_date}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="cpf" className="text-white text-base font-normal">CPF</Label>
                                        <Input
                                            id="cpf"
                                            name="cpf"
                                            type="text"
                                            required
                                            autoComplete="off"
                                            placeholder="000.000.000-00"
                                            maxLength={14}
                                            className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"
                                        />
                                        <InputError message={errors.cpf} />
                                    </div>
                                </div>

                                {/* School Year and Gender */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="school_year" className="text-white text-base font-normal">
                                            Ano Escolar
                                        </Label>
                                        <Select
                                            required
                                            value={selectedSchoolYear}
                                            onValueChange={setSelectedSchoolYear}
                                        >
                                            <SelectTrigger className="bg-[#1a1a1a] border-gray-800 text-white h-9 text-sm rounded-md">
                                                <SelectValue placeholder="Selecione" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1a1a1a] border-gray-800">
                                                <SelectItem value="6" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    6º Ano
                                                </SelectItem>
                                                <SelectItem value="7" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    7º Ano
                                                </SelectItem>
                                                <SelectItem value="8" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    8º Ano
                                                </SelectItem>
                                                <SelectItem value="9" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    9º Ano
                                                </SelectItem>
                                                <SelectItem value="1" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    1º Médio
                                                </SelectItem>
                                                <SelectItem value="2" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    2º Médio
                                                </SelectItem>
                                                <SelectItem value="3" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    3º Médio
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <input
                                            type="hidden"
                                            name="school_year"
                                            value={selectedSchoolYear}
                                        />
                                        <InputError
                                            message={errors.school_year}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="gender" className="text-white text-base font-normal">Sexo</Label>
                                        <Select
                                            required
                                            value={selectedGender}
                                            onValueChange={setSelectedGender}
                                        >
                                            <SelectTrigger className="bg-[#1a1a1a] border-gray-800 text-white h-9 text-sm rounded-md">
                                                <SelectValue placeholder="Selecione" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1a1a1a] border-gray-800">
                                                <SelectItem value="male" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    Masculino
                                                </SelectItem>
                                                <SelectItem value="female" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    Feminino
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <input
                                            type="hidden"
                                            name="gender"
                                            value={selectedGender}
                                        />
                                        <InputError message={errors.gender} />
                                    </div>
                                </div>

                                {/* Language and Email */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="language" className="text-white text-base font-normal">Idioma</Label>
                                        <Select
                                            required
                                            value={selectedLanguage}
                                            onValueChange={setSelectedLanguage}
                                        >
                                            <SelectTrigger className="bg-[#1a1a1a] border-gray-800 text-white h-9 text-sm rounded-md">
                                                <SelectValue placeholder="Selecione o idioma" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1a1a1a] border-gray-800">
                                                <SelectItem value="pt-BR" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    Português (Brasil)
                                                </SelectItem>
                                                <SelectItem value="en-US" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    English (United States)
                                                </SelectItem>
                                                <SelectItem value="es-ES" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    Español (España)
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <input
                                            type="hidden"
                                            name="language"
                                            value={selectedLanguage}
                                        />
                                        <InputError message={errors.language} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-white text-base font-normal">E-mail</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            placeholder="email@exemplo.com"
                                            className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"
                                        />
                                        <InputError message={errors.email} />
                                    </div>
                                </div>

                                {/* Phone and Password */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-white text-base font-normal">
                                            Telefone com DDD
                                        </Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            autoComplete="tel"
                                            placeholder="(00) 00000-0000"
                                            maxLength={15}
                                            className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"
                                        />
                                        <InputError message={errors.phone} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-white text-base font-normal">Senha</Label>
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            autoComplete="new-password"
                                            placeholder="Digite sua senha"
                                            className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"
                                        />
                                        <InputError message={errors.password} />
                                    </div>
                                </div>

                                {/* Avatar Selection */}
                                <div className="space-y-3 py-4">
                                    <Label className="text-white text-base font-normal block">Escolha seu avatar</Label>
                                    <div className="flex justify-start items-center gap-4 min-h-[80px]">
                                        {AVATARS.map((avatar) => (
                                            <button
                                                key={avatar.id}
                                                type="button"
                                                onClick={() =>
                                                    setSelectedAvatar(
                                                        avatar.id,
                                                    )
                                                }
                                                className={`border-4 p-1 transition-all rounded-full cursor-pointer ${
                                                    selectedAvatar ===
                                                    avatar.id
                                                        ? 'scale-110 border-blue-600 bg-blue-600/10'
                                                        : 'border-gray-600 opacity-70 hover:opacity-100 hover:border-blue-400'
                                                }`}
                                            >
                                                <img
                                                    src={avatar.src}
                                                    alt={avatar.alt}
                                                    className="h-16 w-auto"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type="hidden"
                                        name="avatar"
                                        value={selectedAvatar}
                                    />
                                    <InputError message={errors.avatar} />
                                </div>

                                {/* Terms and Conditions */}
                                <div className="space-y-1">
                                    <div className="flex items-start space-x-2">
                                        <Checkbox
                                            id="terms"
                                            checked={acceptedTerms}
                                            onCheckedChange={(checked) =>
                                                setAcceptedTerms(checked as boolean)
                                            }
                                            required
                                            className="border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 h-3.5 w-3.5 cursor-pointer"
                                        />
                                        <input
                                            type="hidden"
                                            name="terms"
                                            value={acceptedTerms ? '1' : '0'}
                                        />
                                        <label
                                            htmlFor="terms"
                                            className="text-xs text-gray-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                        >
                                            Li e concordo com os{' '}
                                            <TextLink href="/termos" target="_blank" className="text-blue-400 hover:text-blue-300 no-underline">
                                                termos e condições
                                            </TextLink>
                                        </label>
                                    </div>
                                    <InputError message={errors.terms} />
                                </div>

                                {/* Register Button */}
                                <Button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors h-12 text-base mt-5 cursor-pointer"
                                    disabled={processing || !acceptedTerms}
                                >
                                    {processing && <Spinner />}
                                    Cadastrar
                                </Button>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
}
