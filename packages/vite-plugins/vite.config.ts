import {defineConfig} from 'vite'
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: 'lib',
        lib: {
            entry: './lib/main.ts',
            name: 'Counter',
            fileName: 'counter',
        },
    },
})
