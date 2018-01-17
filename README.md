# vux-weixin

> 该项目，是使用vux作为UI，可用于微信APP的基础版本的demo，欢迎使用！

> last time :2018-01-17

## 目录说明

``` bash

* src\app\@auth 权限登录目录
* src\app\@core 路由，状态，及服务目录
* src\app\helpers 公共函数目录
* src\app\theme 公共布局目录
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

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
