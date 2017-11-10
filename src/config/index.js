//加载插件
import '@/config/plugin'

// 加载配置
import '@/config/rem'

import FastClick from 'fastclick'

// import '@/config/mUtils'

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body)
    },
    false
  )
}