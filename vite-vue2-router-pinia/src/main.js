import Vue from 'vue'
import 'normalize.css'
import './assets/styles/base.css'
import App from './App.vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia: createPinia(),
  render: h => h(App)
}).$mount('#app')
