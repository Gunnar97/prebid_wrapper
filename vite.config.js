import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        Inspect()
    ],
    build: {
        target: 'esnext',
        outDir: 'dist',
        lib: {
            entry: 'src/main.js',
            formats: ['es']
        }
    }
});







