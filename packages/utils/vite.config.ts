import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        outDir: 'lib',
        lib: {
            entry: './lib/main.ts',
            name: 'Counter',
            fileName: 'counter',
        },
    },
})
