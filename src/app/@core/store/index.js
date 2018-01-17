import Vue from 'vue'
import Vuex from 'vuex'
import env from '../public/env'

Vue.use(Vuex)

const state = {
  env,
  router_isLoading: false,
  app_direction: 'forward',
  sideMenu: {
    drawerVisibility: false,
    showMode: 'push',
    showModeValue: 'push',
    showPlacement: 'left',
    showPlacementValue: 'left'
  }
}
const mutations = {
  UPDATE_ROUTER_LOADING(state, status) {
    state.router_isLoading = status
  },
  UPDATE_APP_DIRECTION(state, direction) {
    state.app_direction = direction
  },
  updateDemoPosition(state, payload) {
    state.demoScrollTop = payload.top
  },
  updateSideMenu(state, payload) {
    Object.assign(state.sideMenu, payload)
  }
}

const getters = {}

const actions = {
  updateDemoPosition({ commit }, top) {
    commit({ type: 'updateDemoPosition', top: top })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
