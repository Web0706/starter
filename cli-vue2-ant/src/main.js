import Vue from 'vue'
import './utils/antdv'
import './utils/moment'
import './assets/styles/base.less'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
