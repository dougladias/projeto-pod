import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import { login } from '@/routes';

interface SuccessModalProps {
    show: boolean;
}

export function SuccessModal({ show }: SuccessModalProps) {
    if (!show) return null;

    const handleLoginRedirect = () => {
        router.visit(login());
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-12 max-w-md w-full mx-4 shadow-2xl animate-in zoom-in duration-500">
                <div className="text-center space-y-6">
                    {/* Ícone de Sucesso */}
                    <div className="flex justify-center">
                        <div className="bg-white rounded-full p-4 animate-in zoom-in duration-700 delay-150">
                            <CheckCircle2 className="w-20 h-20 text-green-600" strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Título */}
                    <div className="space-y-2 animate-in slide-in-from-bottom duration-500 delay-300">
                        <h2 className="text-3xl font-bold text-white">
                            Cadastro Concluído!
                        </h2>
                        <p className="text-green-50 text-lg">
                            Sua conta foi criada com sucesso
                        </p>
                    </div>

                    {/* Botão */}
                    <div className="pt-4 animate-in slide-in-from-bottom duration-500 delay-500">
                        <Button
                            onClick={handleLoginRedirect}
                            className="w-full bg-white text-green-600 hover:bg-green-50 font-semibold text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                            Fazer Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
