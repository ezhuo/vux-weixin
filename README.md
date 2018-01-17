# vux-weixin

``` bash
* 该项目基于vux，可用于微信APP的基础版本，欢迎使用！
* last time :2018-01-17
```

## 主要功能

``` bash
* 添加了 HTTP 拦截器
* 添加了 helpers 公共方法
* 添加了 Auth 、用户登录及 jwt 权限认证
* 将一些公共服务抽离成 plugins,包含：auth.service, dialog.service,notice.service,storage.service , token.service , user.service
```

## 目录说明
>看了 ngx-admin后，感觉其目录结构很清晰，所以有了下面的目录结构。
``` bash
* src\app\@auth 权限登录目录
* src\app\@core 路由，状态，及服务目录
* src\app\@helpers 公共函数目录
* src\app\@theme 公共布局目录
* src\app\pages 业务组件目录
* src\assets 资源目录
```

## 安装

``` bash
# install dependencies
npm install --no-optional

# install vux
npm i --save vuex vux vuex-router-sync
npm i --save-dev vux-loader less less-loader yaml-loader axios blueimp-md5 jwt-decode

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
