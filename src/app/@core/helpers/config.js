import md5 from 'blueimp-md5'
import env from '../public/env'

let _config = {}

_config.set_request_header = function($data, $token = null) {
  let headers = {}
  let rData = $data || {}
  rData = JSON.stringify(rData)
  console.log($data)
  try {
    //数据发送类型
    headers.style = env.sessionConfig.type || '10'
    //token
    headers.token = $token || '' //用户TOKEN
    //check
    //let md5_src = headers.style + headers.token + JSON.stringify(rData) + _app_options.define_config.REQUEST_CHECK_CODE;
    let md5Src = headers.style + headers.token + rData + env.sessionConfig.sign
    //check
    headers.validate = md5(md5Src)
    //console.log(md5_src, headers.validate);
    //console.log(rData);
  } catch (e) {
    console.error(e)
  }
  return headers
}

export default _config
