import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) =>
                        [
                            'dc:format',
                            'rdf:RDF',
                            'cc:Work',
                            'dc:type',
                            'swiper-container',
                            'swiper-slide',
                            'Icon'
                        ].includes(tag)
                }
            }
        }),
        vuetify({ styles: 'sass' }, { autoImport: true }, { styles: { configFile: 'src/style/settings.scss' } })
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
