import { Head } from '@inertiajs/react';
import { RegisterBanner } from './_components/RegisterBanner';
import { RegisterForm } from './_components/RegisterForm';

export default function Register() {
    return (
        <>
            <Head title="Quiz Missão - Register" />

            <div className="flex min-h-screen">
                <RegisterBanner />
                <RegisterForm />
            </div>
        </>
    );
}
