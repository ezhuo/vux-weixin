/**
 * token服务
 */
import env from '@/config/env';

export default function token() {
  let self = this.prototype
  return {
    write(token, user) {
      return self.$session.set(env.sessionConfig.name, token)
    },
    writeUser(user) {
      return self.$session.set(env.sessionConfig.user, user)
    },
    read() {
      return self.$session.get(env.sessionConfig.name)
    },
    destroy() {
      return self.$session.remove(env.sessionConfig.name)
    },
    check() {}
  }
}
