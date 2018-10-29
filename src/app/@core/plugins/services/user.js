/**
 * 用户服务
 */
import env from '../../public/env';
import _object from '../../helpers/object';

class User {
  vue = null;
  __userInfo = null;
  __api_dt = null;

  constructor(vue) {
    this.vue = vue;
  }

  set userInfo(dd) {
    this.__userInfo = dd;
    if (dd) {
      const pic = _object.parseJSON(dd.images) || [];
      if (pic && pic.length > 0) {
        this.__userInfo.picture = pic[0].path;
      }
    }
  }

  get userInfo() {
    return this.__userInfo;
  }

  set apiDt(dd) {
    this.__api_dt = dd;
  }

  get apiDt() {
    return this.__api_dt;
  }
}

export default function user() {
  return new User(this.prototype);
}
