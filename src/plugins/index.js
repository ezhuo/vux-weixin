import Vue from 'vue'
import AjaxPlugin from './ajax'
import StoragePlugin from './storage'
import ServicesPlugin from './services'
import env from '@/config/env'

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
Vue.use(StoragePlugin)
Vue.use(ServicesPlugin)

Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})
