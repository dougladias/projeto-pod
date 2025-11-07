import { Head } from '@inertiajs/react';
import { ResetPasswordBanner } from './_components/ResetPasswordBanner';
import { ResetPasswordForm } from './_components/ResetPasswordForm';

interface ResetPasswordProps {
    token: string;
    email: string;
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    return (
        <>
            <Head title="Quiz Missão - Redefinir Senha" />

            <div className="flex min-h-screen">
                <ResetPasswordBanner />
                <ResetPasswordForm token={token} email={email} />
            </div>
        </>
    );
}
