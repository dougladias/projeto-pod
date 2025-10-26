import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface SelectOption {
    value: string;
    label: string | React.ReactNode;
}

interface SelectFieldProps {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    options: SelectOption[];
    value: string;
    onValueChange: (value: string) => void;
    error?: string;
}

export function SelectField({
    id,
    name,
    label,
    placeholder = 'Selecione',
    options,
    value,
    onValueChange,
    error,
}: SelectFieldProps) {
    return (
        <div className="space-y-2">
            <Label htmlFor={id} className="text-gray-400 text-xs font-normal">
                {label}
            </Label>
            <Select value={value} onValueChange={onValueChange}>
                <SelectTrigger className="bg-[#1a1a1a] border-gray-800 text-white h-9 text-sm rounded-md">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-gray-800">
                    {options.map((option) => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                            className="text-white hover:bg-gray-800 cursor-pointer"
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <input type="hidden" name={name} value={value} />
            <InputError message={error} />
        </div>
    );
}
