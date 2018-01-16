import Base from '@/components/Base'
import env from '@/config/env'

const isLogin = true

//路由权限认证
let beforeEnter = (to, from, next) => {
  if (!isLogin) {
    next({
      name: env.routerName.login,
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
}

//初始化
let beforeRouteEnter = (to, from, next) => {}

//加载组件
let include = (component, dir = 'views') => {
  return import(`../${dir}/${component}`)
}

const routes = [{
    path: '/app',
    name: 'base',
    component: Base,
    beforeEnter,
    // beforeRouteEnter,
    children: [{
        path: '',
        alias: 'index',
        name: 'app.index',
        component: () => include('index')
      },
      {
        path: 'hello',
        name: 'Hello',
        meta: {
          requiresAuth: true
        },
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
    redirect: {
      name: 'app.index'
    }
  }
]

export default routes
