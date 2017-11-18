import Base from '@/common/Base'
import env from '@/config/env'

const isLogin = true

//路由权限认证
let beforeEnter = (to, from, next) => {
  if (!isLogin) {
    next({ path: env.routerLogin, query: { redirect: to.fullPath } })
  } else {
    next()
  }
}

//初始化
let beforeRouteEnter = (to, from, next) => {}

//加载组件
let include = (component, dir = 'components') => {
  return import(`../${dir}/${component}`)
}

const routes = [
  {
    path: '/app',
    name: 'base',
    component: Base,
    beforeEnter,
    // beforeRouteEnter,
    children: [
      {
        path: '',
        alias: 'index',
        name: 'index',
        component: () => include('index')
      },
      {
        path: 'hello',
        name: 'Hello',
        meta: { requiresAuth: true },
        component: () => include('hello')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => include('login')
  },
  {
    path: '',
    redirect: { name: 'index' }
  }
]

export default routes
