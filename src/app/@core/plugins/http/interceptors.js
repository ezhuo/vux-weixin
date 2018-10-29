import env from '../../config.inc'
import _config from '../../helpers/config'
import _object from '../../helpers/object'

/**
 * 注入拦截
 */
class Interceptors {
  vue = null;
  constructor(vue) {
    this.vue = vue;
    this.vue.$axios.interceptors.request.use(this.request_config.bind(this), this.request_error.bind(this))
    this.vue.$axios.interceptors.response.use(this.response_config.bind(this), this.response_error.bind(this))
  }

  request_config(config) {
    const self = this;
    config.timeout = env.appConfig.ajax_timeout
    Object.assign(
      config.headers,
      _config.setRequestHeader(config.data, self.vue.$service.token.token_read())
    )
    if (env.appConfig.app_debug) console.log(config)
    return config
  }

  request_error(error) {
    if (env.appConfig.debug) console.error(error)
    return Promise.reject(error)
  }

  response_config(response) {
    let self = this;
    try {
      var $http_code = response.status
      var $notice = 'info'
      var $message = ''

      if (env.httpCode.hasOwnProperty($http_code)) {
        $message += env.httpCode[$http_code]
      }
      if (_object.isObject(response.data)) {
        self.vue.server_datetime = response.data.dt
      }
      if (
        _object.isObject(response.data) &&
        response.data.message &&
        response.config.method !== 'GET'
      ) {
        $message += response.data.message
      }

      switch ($http_code) {
        case 200:
          break
        case 201:
          break
        case 202:
          break
        case 203:
          break
        case 204:
          break
        case 205:
          break
      }

      if ($message && $notice) {
        self.vue.$service.notice[$notice]($message)
      }
    } catch (e) {
      console.error(e)
    }

    return response
  }

  response_error(error) {
    console.error(error);
    const self = this;
    if (!error) return Promise.reject(error);
    try {
      self.vue.$service.notice.clear()
      error = error.response
      if (env.appConfig.debug) console.error(error)
      var $http_code = error.status
      var $notice = 'warn'
      var $message = ''

      let format_validate_message = $str => {
        var $msg_str = $str
        if (_object.isArray($str)) {
          $msg_str = $str.join('<br/>')
          $msg_str =
            "<div style='width: 100%'><span style='font-size: 20px;color: red'>" +
            $msg_str +
            '</span></div>'
        }
        return $msg_str
      }

      if (env.httpCode.hasOwnProperty($http_code)) {
        $message += env.httpCode[$http_code]
      }
      if (
        typeof error.data === 'object' &&
        error.data &&
        error.data.message
      ) {
        $message += error.data.message
      }

      switch ($http_code) {
        case 400:
          break
        case 401:
          //重要通知
          // self.vue.$session.clear()
          // setTimeout(() => {
          //   self.vue.$router.push({ name: env.routerName.login })
          // }, 2000)
          break
        case 403:
          break
        case 404:
          break
        case 406:
          break
        case 410:
          break
        case 411:
          break
        case 412:
          break
        case 422:
          setTimeout(() => {
            self.vue.$service.notice.warn(
              format_validate_message(error.data.message)
            )
          }, 10 * 1000)
          $notice = ''
          break
        case 500:
          break
      }

      if ($message && $notice) {
        self.vue.$service.notice[$notice]($message)
      }
    } catch (e) {
      console.error(e)
    }
    return Promise.reject(error)
  }
}

export default function interceptorsAjax() {
  return new Interceptors(this.prototype);
}
