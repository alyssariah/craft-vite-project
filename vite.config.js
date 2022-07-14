import {defineConfig} from 'vite';
import manifestSRI from 'vite-plugin-manifest-sri';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import ViteRestart from 'vite-plugin-restart';

// https://vitejs.dev/config/
export default defineConfig(({command}) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
        manifest: true,
        outDir: 'web/dist/',
        rollupOptions: {
            input: {
                app: 'src/js/app.js',
            },
            output: {
                sourcemap: true
            },
        },
    },
    plugins: [
        manifestSRI(),
        viteCompression({
            filter: /\.(js|mjs|json|css|scss|map)$/i
        }),
        ViteRestart({
            reload: [
                'templates/**/*',
                'src/js/**/*',
                'src/css/**/*'
            ],
        }),
    ],
    server: {
        origin: 'http://localhost:3000',
        host: '0.0.0.0',
        port: '3000',
        strictPort: true,
        hmr: {
            protocol: 'ws',
            host: 'localhost'
        },
    },
}));