import Vue from 'vue'
// 加载配置
import '@/config/rem'
//加载插件
import { ajaxRequest, ajaxResponse } from '@/config/plugin'

import FastClick from 'fastclick'

// import '@/config/mUtils'

Vue.config.productionTip = false

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body)
    },
    false
  )
}

export function created() {
  console.log(this)
  ajaxRequest(this)
  ajaxResponse(this)
}
