/**
 *权限服务
 */
import env from '@/config/env';
export default function Auth() {
  let self = this.prototype;
  return {
    login($loginData) {
      return new Promise(function (resolve, reject) {
        self.$http
          .post(env.apiConfig.auth.login, $loginData)
          .then(result => {
            self.$service.token.write(result.data.data.token);
            return resolve(result);
          })
          .catch(err => {
            return reject(err);
          });
      })
    }
  }
}
