import axios from 'axios'
import ajax from './ajax';

export default {
  install(Vue, options) {
    Object.defineProperty(Vue.prototype, '$axios', {
      value: axios
    })
    Object.defineProperty(Vue.prototype, '$http', {
      value: ajax.call(Vue)
    })
  }
}
