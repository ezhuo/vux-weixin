import axios from 'axios'

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', { value: axios })
  },
  $http: axios
}
