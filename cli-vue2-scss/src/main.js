import Vue from 'vue'
import 'normalize.css'
import './assets/styles/base.scss'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
