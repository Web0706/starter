import Vue from 'vue'
import 'normalize.css'
import './assets/styles/base.css'
import App from './App.vue'
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
