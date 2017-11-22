import _object from '@/public/object.public'

const Storage = function($cache) {
  this.$cache = window[$cache]
}

Storage.prototype.set = function(key, value) {
  if (_object.isObject(value) || _object.isArray(value)) {
    return this.$cache.setItem(key, JSON.stringify(value))
  } else {
    return this.$cache.setItem(key, value)
  }
}

Storage.prototype.get = function(key) {
  return this.$cache.getItem(key)
}

Storage.prototype.remove = function(key) {
  return this.$cache.removeItem(key)
}

Storage.prototype.clear = function() {
  return this.$cache.clear()
}

Storage.prototype.exists = function(key) {
  let v = this.get(key) || ''
  return false
}

export default {
  install(Vue, options) {
    Object.defineProperty(Vue.prototype, '$session', {
      value: new Storage('sessionStorage')
    })
    Object.defineProperty(Vue.prototype, '$local', {
      value: new Storage('localStorage')
    })
  }
}
