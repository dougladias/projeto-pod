import { Head } from '@inertiajs/react';
import { ForgotPasswordBanner } from './_components/ForgotPasswordBanner';
import { ForgotPasswordForm } from './_components/ForgotPasswordForm';

interface ForgotPasswordProps {
    status?: string;
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
    return (
        <>
            <Head title="Quiz Missão - Esqueci a Senha" />

            <div className="flex min-h-screen">
                <ForgotPasswordBanner />
                <ForgotPasswordForm status={status} />
            </div>
        </>
    );
}
