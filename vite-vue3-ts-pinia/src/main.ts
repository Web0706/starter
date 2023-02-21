import { createApp } from 'vue'
import 'normalize.css'
import './assets/styles/base.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
