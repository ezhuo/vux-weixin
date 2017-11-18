import Vue from 'vue'
import { created } from '@/config'
import App from '@/App'
import store from '@/store'
import router from '@/router'

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  created,
  template: '<App/>',
  components: { App }
})

// console.log(vm)
