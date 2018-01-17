import notice from './notice';
import auth from './auth';
import dialog from './dialog';
import token from './token';
import user from './user';
import Storage from './storage';

export default {
  install(Vue, options) {
    Object.defineProperty(Vue.prototype, '$service', {
      value: {
        notice: notice.call(Vue),
        dialog: dialog.call(Vue),
        token: token.call(Vue),
        auth: auth.call(Vue),
        user: user.call(Vue),
        session: Storage.session(),
        local: Storage.local()
      }
    })
  }
}
