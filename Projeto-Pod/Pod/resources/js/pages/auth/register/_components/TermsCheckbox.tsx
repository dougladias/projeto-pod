import { Checkbox } from '@/components/ui/checkbox';
import InputError from '@/components/common/input-error';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface TermsCheckboxProps {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    error?: string;
}

export function TermsCheckbox({ checked, onCheckedChange, error }: TermsCheckboxProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleAcceptTerms = () => {
        onCheckedChange(true);
        setModalOpen(false);
    };

    return (
        <>
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
                        <button
                            type="button"
                            onClick={() => setModalOpen(true)}
                            className="text-blue-400 hover:text-blue-300 underline cursor-pointer bg-transparent border-0 p-0 font-inherit"
                        >
                            termos e condições
                        </button>
                    </label>
                </div>
                <InputError message={error} />
            </div>

            {/* Modal com PDF */}
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogContent className="max-w-4xl w-[95vw] h-[85vh] sm:h-[80vh] flex flex-col p-4 sm:p-6">
                    <DialogHeader>
                        <DialogTitle className="text-white">Termos de Uso - Caça Vape</DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 overflow-hidden">
                        <iframe
                            src="/Termos_de_Uso_CacaVape.pdf"
                            className="w-full h-full border-0"
                            title="Termos de Uso"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setModalOpen(false)}
                            className="cursor-pointer text-white border-white hover:bg-white hover:text-black"
                        >
                            Fechar
                        </Button>
                        <Button
                            type="button"
                            onClick={handleAcceptTerms}
                            className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                        >
                            Aceitar Termos
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
