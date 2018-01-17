import Pages from '../../pages/pages'
import Auth from '@/app/@auth/auth';
import env from '../public/env'

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
let include = (component, dir = 'pages') => {
  return import(`../../${dir}/${component}`)
}

const pages = {
  path: '/app',
  name: 'pages',
  component: Pages,
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
}

const auth = {
  path: '/auth',
  name: 'auth',
  component: Auth,
  children: [{
    path: 'login',
    name: 'auth.login',
    component: () =>
      include('login', `@auth`)
  }]
};

const routes = [
  pages,
  auth,
  {
    path: '',
    redirect: {
      name: 'app.index'
    }
  }
];

console.log(routes);
export default routes
