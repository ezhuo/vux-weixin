import Auth from '@/app/layout/passport/passport';
import Pages from '../../pages/pages';
import env from '../config.inc'

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
      include('login', `layout/passport`)
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
