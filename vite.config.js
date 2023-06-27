import { resolve } from 'path';
import { defineConfig } from 'vite';
import postcssNesting from 'postcss-nesting';

import handlebars from './vite-plugin-handlebars-precompile';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    css: {
        postcss: {
            plugins: [
                postcssNesting
            ],
        },
    },
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
        cssCodeSplit: false
    },
    plugins: [handlebars()],
    resolve: {
        alias: {
            app: resolve(__dirname, "src/app"),
            pages: resolve(__dirname, "src/pages"),
            widgets: resolve(__dirname, "src/widgets"),
            features: resolve(__dirname, "src/features"),
            entities: resolve(__dirname, "src/entities"),
            shared: resolve(__dirname, "src/shared"),
            img: resolve(__dirname, "static/assets/img")
        }
    }
});
