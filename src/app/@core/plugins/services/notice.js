/**
 * 消息服务
 */
class Notice {
  vue = null;
  constructor(vue) {
    this.vue = vue;
  }
  info(msg, config = 'bottom') {
    return this._toast(msg, config)
  }
  success(msg, config = 'bottom') {
    return this._toast(msg, config)
  }
  warn(msg, config = 'bottom') {
    return this._toast(msg, config)
  }
  cancel(msg, config = 'bottom') {
    return this._toast(msg, config)
  }
  loading(msg, config) {
    return this._loading(msg, config)
  }
  hide() {
    return this._hide()
  }
  clear() {
    return this._hide()
  }
  _toast(msg, config = 'bottom') {
    this.vue.$vux.loading.hide()
    return this.vue.$vux.toast.text(msg, config)
  }
  _loading(msg, config = 'bottom') {
    this.vue.$vux.toast.hide()
    return this.vue.$vux.loading.show({
      text: msg
    })
  }
  _hide() {
    this.vue.$vux.toast.hide()
    this.vue.$vux.loading.hide()
  }
}
export default function notice() {
  return new Notice(this);
}
