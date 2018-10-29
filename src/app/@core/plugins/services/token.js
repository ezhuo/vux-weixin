/**
 * token服务
 */
import env from '../../config.inc';
import _object from '../../helpers/object';
import jwtDecode from 'jwt-decode';

class Token {
  vue = null;
  __token = '';
  __isAuth = false;

  constructor(vue) {
    this.vue = vue;
  }
  token_read() {
    if (!this.__token) {
      this.__token = this.vue.$service.session.get(env.sessionConfig.name);
    }
    this.__token = this.__token || '';
    this.token_assign(this.__token);
    return this.__token;
  }
  token_assign(token) {
    try {
      this.__isAuth = false;
      if (!token) {
        throw new Error('token is empty');
      }
      this.__token = token;
      if (_object.IsEmpty(this.vue.$service.user.userInfo)) {
        const userInfo = jwtDecode(token);
        this.vue.$service.user.userInfo = userInfo;
      }
      this.__isAuth = true;
    } catch (e) {
      //
    }
    return this.__isAuth;
  }
  token_write(token) {
    token = token || '';
    // 设置token
    if (token.length > 10 && this.token_assign(token)) {
      this.__token = token;
      this.vue.$service.session.set(env.sessionConfig.name, token);
    } else {
      this.token_destory();
    }
    return this.isAuth;
  }
  token_destory() {
    // 注销token
    this.isAuth = false;
    this.__token = null;
    this.vue.$service.user.userInfo = null;
    this.vue.$service.session.clear();
    this.vue.$service.local.clear();
    return true;
  }
  get isAuth() {
    this.__isAuth =
      (this.token_read() || '').length > 10 &&
      !_object.IsEmpty(this.vue.$service.user.userInfo);

    return this.__isAuth;
  }
  set isAuth(bool) {
    this.__isAuth = bool;
  }
};

export default function token() {
  return new Token(this.prototype)
}
