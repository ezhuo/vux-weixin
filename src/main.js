import Vue from 'vue'
import { beforeCreate, created } from '@/core/config'
import App from '@/App'
import store from '@/core/store'
import router from '@/core/router'
import {test1} from '@/core/config/test'
console.log(test1)

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  beforeCreate,
  created,
  template: '<App/>',
  components: { App }
})

window.vm = vm
