import axios from 'axios'
import env from '@/config/env'
import _object from '@/public/object.public'
import _utils from '@/public/utils.public'

const apiSplit = ''

/**
 * 注入和http服务
 */
const Http = function($http) {
  this.$http = $http
}

Http.prototype.get = function(api, data = {}, config = {}) {
  let url = env.apiConfig.api + apiSplit + api
  if (!_object.isObjectEmpty(data)) {
    url += '?' + _utils.jsonToUrl(data)
  }
  return this.$http.get(url, config)
}

Http.prototype.post = function(api, data, config = {}) {
  return this.$http.post(env.apiConfig.api + apiSplit + api, data, config)
}

Http.prototype.put = function(api, data = {}, config = {}) {
  return this.$http.put(env.apiConfig.api + apiSplit + api, data, config)
}

Http.prototype.delete = function(api, data = {}, config = {}) {
  let url = env.apiConfig.api + apiSplit + api
  if (!_object.isObjectEmpty(data)) {
    url += '?' + _utils.jsonToUrl(data)
  }
  return this.$http.delete(url, config)
}

export default {
  install(Vue, options) {
    Object.defineProperty(Vue.prototype, '$axios', { value: axios })
    // interceptor.call(Vue)
    Object.defineProperty(Vue.prototype, '$http', {
      value: new Http(Vue.prototype.$axios)
    })
  },
  $http: axios
}
