import './style/main.scss'
import './style/settings.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, faT, faL } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fab, fas, far, faT, faL)

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

const app = createApp(App)

import axios from './plugins/axios.js'

import vuetify from '@/plugins/vuetify.js'
import { createVuetify } from 'vuetify'
import { VNumberInput } from 'vuetify/labs/VNumberInput'
const VNumberComp = createVuetify({
    components: {
        VNumberInput
    }
})
app.use(VNumberComp)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(axios, {
    baseURL: 'http://localhost:3000/api/v1'
})

app.mount('#app')
app.use(PrimeVue)
app.component('font-awesome-icon', FontAwesomeIcon)
