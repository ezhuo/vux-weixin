/**
 * 消息服务
 */
export default function notice() {
  const self = this
  const _toast = (msg, config = 'bottom') => {
    self.$vux.loading.hide()
    return self.$vux.toast.text(msg, config)
  }
  const _loading = (msg, config = 'bottom') => {
    self.$vux.toast.hide()
    return self.$vux.loading.show({
      text: msg
    })
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
