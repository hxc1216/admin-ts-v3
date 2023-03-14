import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

import { loadSvg } from '@/icons'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/index.scss'

const app = createApp(App)

loadSvg(app)
app.use(createPinia()).use(router).use(ElementPlus).mount('#app')
