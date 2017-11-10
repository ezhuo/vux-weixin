import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import { routerMode } from '@/config/env'

Vue.use(Router)

const router = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld
  }
]

export default new Router({
  // mode: routerMode,
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
