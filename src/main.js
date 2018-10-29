import Vue from 'vue'
import {
  beforeCreate,
  created
} from './app/@core/startup'
import App from './App'
import store from './app/@core/store'
import router from './app/@core/router'
import {
  test1
} from './app/@core/test'
console.log(test1)

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  beforeCreate,
  created,
  template: '<App/>',
  components: {
    App
  }
})

window.vm = vm
