import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward',
  sideMenu: {
    drawerVisibility: false,
    showMode: 'push',
    showModeValue: 'push',
    showPlacement: 'left',
    showPlacementValue: 'left'
  }
}
const mutations = {
  UPDATE_LOADING(state, status) {
    state.isLoading = status
  },
  UPDATE_DIRECTION(state, direction) {
    state.direction = direction
  },
  updateDemoPosition(state, payload) {
    state.demoScrollTop = payload.top
  },
  updateLoadingStatus(state, payload) {
    state.isLoading = payload.isLoading
  },
  updateDirection(state, payload) {
    state.direction = payload.direction
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
