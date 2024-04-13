import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import '@/styles/main.scss'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vuetify({
            styles: {
                configFile: 'src/styles/settings.scss'
            }
        })
    ],
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
            { find: '@assets', replacement: fileURLToPath(new URL('./src/shared/assets', import.meta.url)) },
            { find: '@cmp', replacement: fileURLToPath(new URL('./src/shared/cmp', import.meta.url)) },
            { find: '@stores', replacement: fileURLToPath(new URL('./src/shared/stores', import.meta.url)) },
            { find: '@use', replacement: fileURLToPath(new URL('./src/shared/use', import.meta.url)) }
        ]
    },
    optimizeDeps: {
        exclude: ['D:/courses/WEB/Portfolio/exclusive/node_modules/.vite/deps/chunk-WS4467ZS.js']
    }
})
