/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */

const routerMode = 'history'
const apiUrl = '/api/'
const imgApiUrl = 'http://images.cangdu.org/'
const routerIndex = '/app'
const routerLogin = '/login/'

if (process.env.NODE_ENV == 'development') {
} else if (process.env.NODE_ENV == 'production') {
  // baseUrl = 'http://cangdu.org:8001';
}

export default {
  routerMode,
  apiUrl,
  imgApiUrl,
  routerIndex,
  routerLogin
}
