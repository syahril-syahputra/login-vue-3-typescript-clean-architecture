import { createApp } from 'vue'
import App from './app/App.vue'
import './index.css'

import vueCookies from "vue-cookies";
import router from './app/routes/index'
import { createPinia } from 'pinia'
createApp(App)
.use(vueCookies)
.use(createPinia())
.use(router)
.mount('#app')
