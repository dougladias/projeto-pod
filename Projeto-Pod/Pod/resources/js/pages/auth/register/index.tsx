'use client';

import { Head } from '@inertiajs/react';
import { useState } from 'react';
import NikoAvatar from '@/assets/Niko.svg';
import TinaAvatar from '@/assets/Tina.svg';
import LogoQuiz from '@/assets/LogoQuiz.svg';
import { ImagePreloader } from './_components/ImagePreloader';
import { RegisterBanner } from './_components/RegisterBanner';
import { RegisterForm } from './_components/RegisterForm';

export default function Register() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    if (!imagesLoaded) {
        return (
            <ImagePreloader
                images={[NikoAvatar, TinaAvatar, LogoQuiz]}
                onLoadComplete={() => setImagesLoaded(true)}
            />
        );
    }

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
