import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '@/config/env'
import Base from '@/common/Base'

import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = [
  {
    path: '/app',
    name: 'base',
    component: Base,
    children: [
      {
        path: '',
        name: 'Hello',
        component: HelloWorld
      }
    ]
  },
  {
    path: '',
    redirect: { name: 'Hello' }
  },
  {
    path: 'dd',
    redirect: { name: 'Hello' }
  }
]

export default new Router({
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  routes: router,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
