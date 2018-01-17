/**
 * 对话框服务
 */
class Dialog {
  vue = null;
  constructor(vue) {
    this.vue = vue;
  }
  _hide() {
    this.vue.$vux.alert.hide()
    this.vue.$vux.confirm.hide()
  }

  alert(config) {
    return this.vue.$vux.alert.show(config)
  }
  confirm(config) {
    return this.vue.$vux.confirm.show(config)
  }
  prompt(config) {
    return this.vue.$vux.confirm.prompt('placeholder', config)
  }
  hide() {
    return this._hide()
  }
  clear() {
    return this._hide()
  }
}
export default function dialog() {
  return new Dialog(this)
}
