import Vue from 'vue'
import './rem' // 加载配置
import '../../@helpers/polyfill.helper' // 丰富原始类型
import {} from '../plugins/index' // 加载插件

Vue.config.productionTip = false

export function beforeCreate() {}

export function created() {}
