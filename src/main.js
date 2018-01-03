import Vue from 'vue'
import { beforeCreate, created } from '@/config'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import {test1} from '@/config/test'

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
// console.log(vm)
