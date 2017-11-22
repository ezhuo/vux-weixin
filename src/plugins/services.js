import env from '@/config/env'

/**
 * 消息服务
 */
function notice() {
  const self = this
  const _toast = (msg, config = 'bottom') => {
    self.$vux.loading.hide()
    return self.$vux.toast.text(msg, config)
  }
  const _loading = (msg, config = 'bottom') => {
    self.$vux.toast.hide()
    return self.$vux.loading.show({ text: msg })
  }
  const _hide = () => {
    self.$vux.toast.hide()
    self.$vux.loading.hide()
  }
  return {
    info(msg, config = 'bottom') {
      return _toast(msg, config)
    },
    success(msg, config = 'bottom') {
      return _toast(msg, config)
    },
    warn(msg, config = 'bottom') {
      return _toast(msg, config)
    },
    cancel(msg, config = 'bottom') {
      return _toast(msg, config)
    },
    loading(msg, config) {
      return _loading(msg, config)
    },
    hide() {
      return _hide()
    },
    clear() {
      return _hide()
    }
  }
}

/**
 * 对话框服务
 */
function dialog() {
  const self = this
  const _hide = () => {
    self.$vux.alert.hide()
    self.$vux.confirm.hide()
  }
  return {
    alert(config) {
      return self.$vux.alert.show(config)
    },
    confirm(config) {
      self.$vux.confirm.show(config)
    },
    prompt(config) {
      self.$vux.confirm.prompt('placeholder', config)
    },
    hide() {
      return _hide()
    },
    clear() {
      return _hide()
    }
  }
}

/**
 * token服务
 */
function token() {
  let self = this.prototype
  return {
    write(token, user) {
      return self.$session.set(env.sessionConfig.name, token)
    },
    writeUser(user) {
      return self.$session.set(env.sessionConfig.user, user)
    },
    read() {
      return self.$session.get(env.sessionConfig.name)
    },
    destroy() {
      return self.$session.remove(env.sessionConfig.name)
    },
    user() {
      return JSON.parse(self.$session.get(env.sessionConfig.user))
    },
    check() {}
  }
}

export default {
  install(Vue, options) {
    Object.defineProperty(Vue.prototype, '$service', {
      value: {
        notice: notice.call(Vue),
        dialog: dialog.call(Vue),
        token: token.call(Vue),
        user: () => {
          const user = token.call(Vue).user()
          return user
        }
      }
    })
  }
}
