import Vue from 'vue'
import 'normalize.css'
import './assets/styles/base.less'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
