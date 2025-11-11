/// <reference types="vitest/config" />
import { defineConfig } from 'vite'


export default defineConfig({
    // plugins: [types()],
    build: {
        outDir: 'lib',
        sourcemap: true,
        minify: false,
        lib: {
            entry: './src/index.ts',
            fileName: 'index',
            formats: ['es']
        },
    },
    test: {}
})
