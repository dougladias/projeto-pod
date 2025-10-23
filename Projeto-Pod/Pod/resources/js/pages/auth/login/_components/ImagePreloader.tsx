'use client';

import { useState, useRef } from 'react';

interface ImagePreloaderProps {
    images: string[];
    onLoadComplete: () => void;
}

export function ImagePreloader({ images, onLoadComplete }: ImagePreloaderProps) {
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0);

    const handleImageLoad = () => {
        loadedCountRef.current += 1;
        if (loadedCountRef.current === images.length) {
            setIsLoading(false);
            onLoadComplete();
        }
    };

    if (!isLoading) return null;

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="hidden">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        onLoad={handleImageLoad}
                        alt=""
                    />
                ))}
            </div>
        </div>
    );
}
