import './style/main.scss'
import './style/settings.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
import vuetify from '@/plugins/vuetify.js'
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
