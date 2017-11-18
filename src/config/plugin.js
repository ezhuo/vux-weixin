import Vue from 'vue'
import md5 from 'blueimp-md5'
import AjaxPlugin from './ajax'

import {
  // DatetimePlugin,
  ConfigPlugin,
  DevicePlugin,
  ToastPlugin,
  AlertPlugin,
  ConfirmPlugin,
  LoadingPlugin,
  WechatPlugin,
  BusPlugin
} from 'vux'

Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)
Vue.use(DevicePlugin)

Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})

export function ajaxRequest(vm) {
  // Add a request interceptor
  vm.$http.interceptors.request.use(
    function(config) {
      console.log(config)
      return config
    },
    function(error) {
      return Promise.reject(error)
    }
  )
}

export function ajaxResponse(vm) {
  // Add a response interceptor
  vm.$http.interceptors.response.use(
    function(response) {
      vm.$vux.toast.text('ajax', 'top')
      console.log(this, response)
      return response
    },
    function(error) {
      return Promise.reject(error)
    }
  )
}
