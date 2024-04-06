import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from '@/router/index.js'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import {loadingPlugin} from '@/directives/loading.js'

let app = createApp(App)
let pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(loadingPlugin)