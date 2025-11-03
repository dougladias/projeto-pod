import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        // Desabilita wayfinder em produção (Heroku)
        ...(process.env.NODE_ENV !== 'production' ? [
            wayfinder({
                formVariants: true,
            })
        ] : []),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    esbuild: {
        jsx: 'automatic',
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    // Separa React em um chunk próprio
                    'react-vendor': ['react', 'react-dom'],
                    // Separa componentes UI pesados
                    'ui-vendor': [
                        '@radix-ui/react-dialog',
                        '@radix-ui/react-progress',
                        '@radix-ui/react-select',
                        '@radix-ui/react-dropdown-menu',
                    ],
                    // Separa Inertia
                    'inertia': ['@inertiajs/react'],
                    // Separa ícones
                    'icons': ['lucide-react'],
                },
            },
        },
        // Otimiza chunks
        chunkSizeWarningLimit: 1000,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // Remove console.logs em produção
            },
        },
    },
});
