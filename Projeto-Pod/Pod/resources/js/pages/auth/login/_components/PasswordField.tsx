'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordFieldProps {
    error?: string;
}

export function PasswordField({ error }: PasswordFieldProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="space-y-1">
            <Label htmlFor="password" className="text-gray-400 text-xs font-normal">
                Senha
            </Label>
            <div className="relative">
                <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
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
            <InputError message={error} />
        </div>
    );
}
