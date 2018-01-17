/**
 *权限服务
 */
import env from '@/core/config/env';

class Auth {
  vue = null;
  constructor(vue) {
    this.vue = vue;
  }

  doLogin(loginData) {
    const self = this;
    // self.$http.post(env.apiConfig.auth.user, {}).then(user => {
    // });
    return new Promise(function (resolve, reject) {
      return self.vue.$http
        .post(env.apiConfig.auth.login, loginData)
        .then(result => {
          self.loginSuccess(result);
          return resolve(result);
        })
        .catch(err => {
          return reject(err);
        });
    })
  }

  loginSuccess(data) {
    this.vue.$service.token.token_write(data.data.data.token);
  }

  checkAuth() {
    if (this.vue.$service.token.isAuth) {
      return true;
    }
    return false;
  }

  logoutAuth() {
    return this.vue.$service.token.token_destory();
  }
}

export default function auth() {
  return new Auth(this.prototype);
}
