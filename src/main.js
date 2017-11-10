import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import { sync } from 'vuex-router-sync'
import '@/config'

Vue.config.productionTip = false
sync(store, router)

/* eslint-disable no-new */
let vue = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

console.log(vue)
