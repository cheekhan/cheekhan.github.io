import { defineConfig } from 'vite'
// import types from 'vite-plugin-lib-types';


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
})
