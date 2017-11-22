import Vue from 'vue'
import './rem' // 加载配置
import '@/public/polyfill.public' //丰富原始类型
import {} from '@/plugins/index' //加载插件
import interceptorsAjax from '@/config/interceptors'

Vue.config.productionTip = false

export function beforeCreate() {}

export function created() {
  interceptorsAjax.call(this)
}
