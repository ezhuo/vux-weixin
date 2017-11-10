import Vue from 'vue'
import {
  // DatetimePlugin,
  // CloseDialogsPlugin,
  ConfigPlugin,
  DevicePlugin,
  ToastPlugin,
  AlertPlugin,
  ConfirmPlugin,
  LoadingPlugin,
  WechatPlugin,
  AjaxPlugin,
  BusPlugin
} from 'vux'

Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)

Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})