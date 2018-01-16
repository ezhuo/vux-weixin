/**
 * 用户服务
 */

import env from '@/config/env';

export default function user() {
  let self = this.prototype
  return {
    userInfo() {
      return JSON.parse(self.$session.get(env.sessionConfig.user))
    }
  }
}
