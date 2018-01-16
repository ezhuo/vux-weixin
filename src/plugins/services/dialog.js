/**
 * 对话框服务
 */
export default function dialog() {
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
