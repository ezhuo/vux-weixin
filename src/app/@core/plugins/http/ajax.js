import env from '../../public/env'
import _object from '../../../@helpers/object.helper'
import _utils from '../../../@helpers/utils.helper'
import interceptorsAjax from './interceptors';

/**
 * 注入和http服务
 */
class Ajax {
  vue = null;
  split = ''

  constructor(vue) {
    this.vue = vue;
  }

  get(api, data = {}, config = {}) {
    let url = env.apiConfig.api + this.split + api
    if (!_object.isObjectEmpty(data)) {
      url += '?' + _utils.jsonToUrl(data)
    }
    return this.vue.$axios.get(url, config)
  }

  post(api, data, config = {}) {
    return this.vue.$axios.post(env.apiConfig.api + this.split + api, data, config)
  }

  put(api, data = {}, config = {}) {
    return this.vue.$axios.put(env.apiConfig.api + this.split + api, data, config)
  }

  delete(api, data = {}, config = {}) {
    let url = env.apiConfig.api + this.split + api
    if (!_object.isObjectEmpty(data)) {
      url += '?' + _utils.jsonToUrl(data)
    }
    return this.vue.$axios.delete(url, config)
  }
}

export default function ajax() {
  console.log('ajax');
  // 注入 请求头
  interceptorsAjax.call(this);
  return new Ajax(this.prototype);
}
