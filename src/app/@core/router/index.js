import Vue from 'vue'
import Router from 'vue-router'
import env from '../public/env'
import routes from './path.js'
import store from '../store'
import {
  CloseDialogsPlugin
} from 'vux'
import {
  sync
} from 'vuex-router-sync'

Vue.use(Router)

const router = new Router({
  mode: env.routerMode,
  base: '/vue/',
  strict: process.env.NODE_ENV !== 'production',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})

router.beforeEach(function (to, from, next) {
  store.commit('UPDATE_ROUTER_LOADING', true)
  next()
})

router.afterEach(function (to) {
  store.commit('UPDATE_ROUTER_LOADING', false)
})

Vue.use(CloseDialogsPlugin, router)
sync(store, router)

export default router
