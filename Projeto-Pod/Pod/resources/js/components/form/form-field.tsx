import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';

interface FormFieldProps {
    id: string;
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    error?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
    className?: string;
    required?: boolean;
}

export function FormField({
    id,
    name,
    label,
    type = 'text',
    placeholder,
    autoComplete,
    autoFocus = false,
    error,
    value,
    defaultValue,
    onChange,
    maxLength,
    className,
    required = false,
}: FormFieldProps) {
    return (
        <div className="space-y-2">
            <Label htmlFor={id} className="text-gray-400 text-xs font-normal">
                {label}
            </Label>
            <Input
                id={id}
                name={name}
                type={type}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                maxLength={maxLength}
                required={required}
                className={className || "bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500 h-9 text-sm rounded-md"}
            />
            <InputError message={error} />
        </div>
    );
}
