import _object from '../../helpers/object'
import env from '../../config.inc';

export default class Storage {
  $cache = null;
  config = env.appConfig;

  static local() {
    return new Storage('localStorage')
  }

  static session() {
    return new Storage('sessionStorage')
  }

  constructor($cache) {
    this.$cache = window[$cache]
  }

  getKey(k) {
    return this.config.app_code.toString() + '-' + k;
  }

  set(key, value) {
    if (_object.isObject(value) || _object.isArray(value)) {
      return this.$cache.setItem(this.getKey(key), JSON.stringify(value))
    } else {
      return this.$cache.setItem(this.getKey(key), value)
    }
  }

  get(key) {
    return this.$cache.getItem(this.getKey(key))
  }

  remove(key) {
    return this.$cache.removeItem(this.getKey(key))
  }

  clear() {
    return this.$cache.clear()
  }

  exists(key) {
    return this.get(this.getKey(key)) || false;
  }
}
