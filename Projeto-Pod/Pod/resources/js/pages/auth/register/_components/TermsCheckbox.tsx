import { Checkbox } from '@/components/ui/checkbox';
import InputError from '@/components/common/input-error';
import TextLink from '@/components/common/text-link';

interface TermsCheckboxProps {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    error?: string;
}

export function TermsCheckbox({ checked, onCheckedChange, error }: TermsCheckboxProps) {
    return (
        <div className="space-y-1">
            <div className="flex items-start space-x-2">
                <Checkbox
                    id="terms"
                    checked={checked}
                    onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
                    className="border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 h-3.5 w-3.5 cursor-pointer"
                />
                <input
                    type="hidden"
                    name="terms"
                    value={checked ? '1' : '0'}
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
            <InputError message={error} />
        </div>
    );
}
