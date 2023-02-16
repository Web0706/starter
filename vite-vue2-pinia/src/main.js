import Vue from 'vue'
import 'normalize.css'
import './assets/styles/base.css'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)

new Vue({
  pinia: createPinia(),
  render: h => h(App)
}).$mount('#app')
