import 'normalize.css'
import Vue from 'vue'
import './utils/element'
import './assets/styles/base.scss'
import './assets/styles/element-variables.scss'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
