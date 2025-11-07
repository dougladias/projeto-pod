import { router } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';

interface User {
    name: string;
    email: string;
    birth_date?: string;
    phone?: string;
    city?: string;
    vape_usage?: string;
    bio?: string;
}

interface ProfileFormProps {
    user: User;
    status?: string;
}

export default function ProfileForm({ user }: ProfileFormProps) {
    const [processing, setProcessing] = useState(false);
    const [data, setData] = useState({
        name: user.name || '',
        phone: user.phone || '',
        city: user.city || '',
        vape_usage: user.vape_usage || '',
        bio: user.bio || '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Calculate age from birth_date
    const calculateAge = (birthDate?: string) => {
        if (!birthDate) return '';
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birth.getDate())
        ) {
            age--;
        }
        return age.toString();
    };

    const age = calculateAge(user.birth_date);

    const handleChange = (field: string, value: string) => {
        setData({ ...data, [field]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        router.patch(ProfileController.update.url(), data, {
            onFinish: () => setProcessing(false),
            onSuccess: () => {
                toast.success('Perfil atualizado com sucesso!');
            },
            onError: (errors) => {
                setErrors(errors);
                toast.error('Erro ao atualizar perfil');
            },
        });
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-8 h-full flex flex-col mt-10">
            <div className="mb-6">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                    <div className="w-1 h-[1em] bg-blue-600 rounded-full flex-shrink-0"></div>
                    Informações Pessoais
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Atualize seus dados pessoais
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                {/* Nome Completo */}
                <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Nome e Sobrenome"
                        className="mt-1"
                        required
                    />
                    {errors.name && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Idade and Telefone - Grid 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="age">Idade</Label>
                        <Input
                            id="age"
                            type="text"
                            value={age}
                            placeholder="Sua idade"
                            className="mt-1"
                            disabled
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Calculada automaticamente pela data de nascimento
                        </p>
                    </div>

                    <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                            id="phone"
                            type="tel"
                            value={data.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="(00) 00000-0000"
                            className="mt-1"
                        />
                        {errors.phone && (
                            <p className="text-sm text-red-600 mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>
                </div>

                {/* E-mail and Cidade - Grid 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                            id="email"
                            type="email"
                            value={user.email}
                            placeholder="email@email.com"
                            className="mt-1"
                            disabled
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            O e-mail não pode ser alterado
                        </p>
                    </div>

                    <div>
                        <Label htmlFor="city">Cidade</Label>
                        <Input
                            id="city"
                            type="text"
                            value={data.city}
                            onChange={(e) => handleChange('city', e.target.value)}
                            placeholder="Sua cidade"
                            className="mt-1"
                        />
                        {errors.city && (
                            <p className="text-sm text-red-600 mt-1">
                                {errors.city}
                            </p>
                        )}
                    </div>
                </div>

                {/* Uso de Vape/Cigarro Eletrônico */}
                <div>
                    <Label htmlFor="vape_usage">
                        Uso de Vape/Cigarro Eletrônico
                    </Label>
                    <Select
                        value={data.vape_usage}
                        onValueChange={(value) => handleChange('vape_usage', value)}
                    >
                        <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Nunca usei" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Nunca usei">
                                Nunca usei
                            </SelectItem>
                            <SelectItem value="Já experimentei">
                                Já experimentei
                            </SelectItem>
                            <SelectItem value="Uso ocasionalmente">
                                Uso ocasionalmente
                            </SelectItem>
                            <SelectItem value="Uso regularmente">
                                Uso regularmente
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.vape_usage && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.vape_usage}
                        </p>
                    )}
                </div>

                {/* Sobre você */}
                <div>
                    <Label htmlFor="bio">Sobre você</Label>
                    <Textarea
                        id="bio"
                        value={data.bio}
                        onChange={(e) => handleChange('bio', e.target.value)}
                        placeholder="Conte um pouco sobre você, seus interesses e objetivos..."
                        className="mt-1 min-h-[120px]"
                        maxLength={500}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        {data.bio?.length || 0}/500 caracteres
                    </p>
                    {errors.bio && (
                        <p className="text-sm text-red-600 mt-1">{errors.bio}</p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <Button
                        type="submit"
                        disabled={processing}
                        className="w-full md:w-auto px-8"
                    >
                        {processing ? 'Salvando...' : 'Salvar'}
                    </Button>
                </div>
            </form>
        </div>
    );
}
