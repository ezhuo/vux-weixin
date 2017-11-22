const routerMode = 'history'

const appConfig = {
  debug: true,
  app_code: 'weixin',
  name: '养老服务需求评估系统',
  author: '资石科技 zishikeji.com',
  description: '养老服务需求评估系统v1.0',
  version: '1.0',
  js_ver: '20161016',

  //用户默认图片
  default_user_images: 'assets/images/user/default_user.png',

  //默认用户的图片
  default_user_cut_images: 'assets/images/user/default_user.png',

  //默认页记录数
  default_page_size: 20,

  //table page size
  default_table_page_size: 10,

  //获取区域的默认URL
  canton_select_url: 'canton/selectselectselect',

  app_canton_id: null, //默认区域ID
  app_canton_fdn: null, //默认区域
  app_canton_name: null,
  file_url_root: null, //文件根据目录

  //缓存列表
  cache_tpl: [],
  cache_undelete_tpl: [],
  cache_models: [],

  //local  or session
  cache_driver: 'local',
  cache_token: 'session',

  //消息提醒，时间间隔
  message_timeval: 8 * 1000
}

const sessionConfig = {
  name: 'tokenID',
  user: 'userInfo',
  type: '10', //数据包发送格式，10是明文 11是密文
  sign: 'ezhuo@20161016' //请求验证代码
}

const apiConfig = {
  api: '/api',
  upload: '/api/file/upload',
  upload_down: '/uploads/',
  auth: {
    login: '/auth/login',
    checktoken: '/auth/checktoken',
    logout: '/auth/logout',
    user: '/auth/userinfo'
  }
}

const routerPath = {}

const routerName = {
  index: 'app.index',
  login: 'login'
}

const appTheme = {
  logo1: 'assets/images/app/logo1.png', // relative path of the project logo
  logo2: 'assets/images/app/logo2.png',
  login_logo: 'assets/images/app/login_logo.png'
}

const httpCode = {
  200: '',
  201: '',
  202: '',
  204: '',
  203: '',
  205: '',

  400: '',
  401: '',
  403: '',
  404: '在服务器端，没有找到该请求服务！',
  406: '重要：',
  410: '',
  411: '',
  412: '',
  422: '验证：',
  500: '服务器端异常！'
}

if (process.env.NODE_ENV == 'development') {
  //
} else if (process.env.NODE_ENV == 'production') {
  // baseUrl = 'http://cangdu.org:8001';
}

export default {
  routerMode,
  sessionConfig,
  appConfig,
  apiConfig,
  routerPath,
  routerName,
  appTheme,
  httpCode
}
