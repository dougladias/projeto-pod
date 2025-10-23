import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { register, login } from '@/routes';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { useState, useRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import cenarioLogin from '@/assets/cenarioLogin.svg';
import LogoQuiz from '@/assets/LogoQuiz.svg';
import avatarM from '@/assets/avatarM.svg';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const [showPassword, setShowPassword] = useState(false);
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
                    <img src={cenarioLogin} onLoad={handleImageLoad} alt="" />
                    <img src={LogoQuiz} onLoad={handleImageLoad} alt="" />
                    <img src={avatarM} onLoad={handleImageLoad} alt="" />
                </div>
            </div>
        );
    }

    return (
        <>
            <Head title="Quiz Missão - Login" />

            <div className="flex min-h-screen">
                {/* Lado Esquerdo - Imagem/Banner */}
                <div className="hidden lg:flex lg:w-3/4 relative overflow-hidden">
                    {/* Cenário de fundo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img
                            src={cenarioLogin}
                            alt="Cenário Quiz Missão"
                            className="min-h-full w-auto object-cover"
                            loading="eager"
                            fetchPriority="high"
                        />
                    </div>

                    {/* Overlay azul */}
                    <div className="absolute inset-0 bg-blue-600/[0.38]"></div>

                    {/* Logo no topo esquerdo */}
                    <div className="absolute top-60 left-1/2 -translate-x-1/3 z-10">
                        <img
                            src={LogoQuiz}
                            alt="Quiz Missão Caça Vape"
                            className="w-125 h-auto drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
                            loading="eager"
                            fetchPriority="high"
                        />
                    </div>

                    {/* Personagem no canto inferior esquerdo */}
                    <div className="absolute bottom-0 left-0 z-10">
                        <img
                            src={avatarM}
                            alt="Personagem"
                            className="h-200 w-auto"
                            loading="eager"
                        />
                    </div>
                </div>

                {/* Lado Direito - Formulário de Login */}
                <div className="w-full lg:w-1/4 flex items-center justify-center bg-black p-6">
                    <div className="w-full px-6">
                        {/* Logo no topo */}
                        <div className="text-center mb-10">
                            <img
                                src={LogoQuiz}
                                alt="Quiz Missão"
                                className="w-50 h-auto mx-auto mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]" />
                            <h2 className="text-4xl font-luckiest text-white">Bem vindo!</h2>
                        </div>

                        {/* Status Message */}
                        {status && (
                            <div className="mb-4 p-3 rounded-md bg-green-500/10 border border-green-500/20">
                                <p className="text-sm text-green-400">{status}</p>
                            </div>
                        )}

                        {/* Formulário */}
                        <Form
                            action={login.url()}
                            method="post"
                            resetOnSuccess={['password']}
                            className="space-y-3.5"
                        >
                            {({ processing, errors }) => (
                                <>
                                    {/* Campo CPF */}
                                    <div className="space-y-1">
                                        <Label htmlFor="cpf" className="text-gray-400 text-xs font-normal">
                                            CPF
                                        </Label>
                                        <Input
                                            id="cpf"
                                            type="text"
                                            name="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="username"
                                            placeholder="000.000.000-00"
                                            className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    {/* Campo Senha */}
                                    <div className="space-y-1">
                                        <Label htmlFor="password" className="text-gray-400 text-xs font-normal">
                                            Senha
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                required
                                                tabIndex={2}
                                                autoComplete="current-password"
                                                placeholder="Digite sua senha"
                                                className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 pr-10 h-9 text-sm rounded-md"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
                                                tabIndex={-1}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                        <InputError message={errors.password} />
                                    </div>

                                    {/* Lembrar-me e Esqueceu a senha */}
                                    <div className="flex items-center justify-between text-xs pt-1">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="remember"
                                                name="remember"
                                                tabIndex={3}
                                                className="border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 h-3.5 w-3.5"
                                            />
                                            <Label htmlFor="remember" className="text-gray-400 cursor-pointer font-normal text-xs">
                                                Lembrar-me
                                            </Label>
                                        </div>
                                        {canResetPassword && (
                                            <TextLink
                                                href={request()}
                                                className="text-blue-400 hover:text-blue-300 text-xs no-underline"
                                                tabIndex={5}
                                            >
                                                Esqueceu a sua senha?
                                            </TextLink>
                                        )}
                                    </div>

                                    {/* Campo Tipo de Usuário */}
                                    <div className="space-y-1">
                                        <Label htmlFor="user-type" className="text-gray-400 text-xs font-normal">
                                            Tipo de Usuário
                                        </Label>
                                        <Select name="user_type" defaultValue="aluno">
                                            <SelectTrigger className="bg-[#1a1a1a] border-gray-800 text-white h-9 text-sm rounded-md">
                                                <SelectValue placeholder="Selecione o tipo" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1a1a1a] border-gray-800">
                                                <SelectItem value="aluno" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    Aluno
                                                </SelectItem>
                                                <SelectItem value="administrador" className="text-white hover:bg-gray-800 cursor-pointer">
                                                    Administrador
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Botão Entrar */}
                                    <Button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors h-12 text-base mt-5 cursor-pointer"
                                        tabIndex={4}
                                        disabled={processing}
                                    >
                                        {processing && <Spinner />}
                                        Entrar
                                    </Button>

                                    {/* Link de Cadastro */}
                                    <div className="text-center text-xs text-gray-400 pt-3">
                                        Não tem uma conta?{' '}
                                        <TextLink href={register()} className="text-blue-400 hover:text-blue-300 no-underline" tabIndex={6}>
                                            Cadastre-se
                                        </TextLink>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
