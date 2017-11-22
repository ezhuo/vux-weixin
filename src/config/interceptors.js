import env from '@/config/env'
import _config from '@/public/config.public'
import _object from '@/public/object.public'

/**
 * 注入拦截
 */
const interceptorsAjax = function() {
  let self = this
  let vm = this
  // Add a request interceptor
  self.$axios.interceptors.request.use(
    config => {
      Object.assign(
        config.headers,
        _config.set_request_header(config.data, vm.$service.token.read())
      )
      return config
    },
    error => {
      if (env.appConfig.debug) console.error(error)
      return Promise.reject(error)
    }
  )

  // Add a response interceptor
  self.$axios.interceptors.response.use(
    response => {
      try {
        var $http_code = response.status
        var $notice = 'info'
        var $message = ''

        if (env.httpCode.hasOwnProperty($http_code)) {
          $message += env.httpCode[$http_code]
        }
        if (_object.isObject(response.data)) {
          vm.server_datetime = response.data.dt
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
          vm.$service.notice[$notice]($message)
        }
      } catch (e) {
        console.error(e)
      }

      return response
    },
    error => {
      try {
        error = error.response
        if (env.appConfig.debug) console.error(error)
        var $http_code = error.status
        var $notice = 'warn'
        var $message = ''
        vm.$service.notice.clear()

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
            // vm.$session.clear()
            // setTimeout(() => {
            //   vm.$router.push({ name: env.routerName.login })
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
              vm.$service.notice.warn(
                format_validate_message(error.data.message)
              )
            }, 10 * 1000)
            $notice = ''
            break
          case 500:
            break
        }

        if ($message && $notice) {
          vm.$service.notice[$notice]($message)
        }
      } catch (e) {
        console.error(e)
      }
      return Promise.reject(error)
    }
  )
}

export default interceptorsAjax
