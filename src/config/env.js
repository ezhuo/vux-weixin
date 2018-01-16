// const routerMode = 'history'
const routerMode = 'hash'

const appConfig = {
    app_debug: true,

    app_code: 'weixin',

    app_name: '养老服务需求评估系统',

    app_description: '养老服务需求评估系统v1.0',

    app_ver: '1.0',

    //用户默认图片
    user_images: 'assets/images/user/default_user.png',

    //默认用户的图片
    user_cut_images: 'assets/images/user/default_user.png',

    //默认页记录数
    page_size: 20,

    //table page size
    table_page_size: 10,

    canton_id: null, //默认区域ID

    canton_fdn: null, //默认区域

    canton_name: null,

    file_root: null, //文件根据目录

    ajax_message_timeval: 8 * 1000, //消息提醒，时间间隔

    ajax_timeout: 30 * 1000 //消息提醒，timeout
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
    },
    //获取区域的默认URL
    canton_select: 'canton/selectselectselect'
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
