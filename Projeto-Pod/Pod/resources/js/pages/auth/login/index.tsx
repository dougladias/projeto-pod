'use client';

import { Head } from '@inertiajs/react';
import { useState } from 'react';
import cenarioLogin from '@/assets/cenarioLogin.svg';
import LogoQuiz from '@/assets/LogoQuiz.svg';
import avatarM from '@/assets/avatarM.svg';
import { ImagePreloader } from './_components/ImagePreloader';
import { LoginBanner } from './_components/LoginBanner';
import { LoginForm } from './_components/LoginForm';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    if (!imagesLoaded) {
        return (
            <ImagePreloader
                images={[cenarioLogin, LogoQuiz, avatarM]}
                onLoadComplete={() => setImagesLoaded(true)}
            />
        );
    }

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
