import { Head } from '@inertiajs/react';
import { LoginBanner } from './_components/LoginBanner';
import { LoginForm } from './_components/LoginForm';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    return (
        <>
            <Head title="Quiz Missão - Login" />

            <div className="flex min-h-screen">
                <LoginBanner />
                <LoginForm status={status} canResetPassword={canResetPassword} />
            </div>
        </>
    );
}
