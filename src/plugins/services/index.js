import notice from './notice';
import Auth from './auth';
import dialog from './dialog';
import token from './token';
import user from './user';

export default {
  install(Vue, options) {
    Object.defineProperty(Vue.prototype, '$service', {
      value: {
        notice: notice.call(Vue),
        dialog: dialog.call(Vue),
        token: token.call(Vue),
        auth: Auth.call(Vue),
        user: user.call(Vue)
      }
    })
  }
}
