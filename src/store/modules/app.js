import * as types from '../types.js'

// initial state
const state = {
  foldSidebar: false
}

// getters
const getters = {
  foldSidebar: state => {
    return state.foldSidebar
  }
}

//actions
const actions = {
  toggle_sidebar({
    commit,
    state
  }) {
    commit(types.TOGGLE_SIDEBAR, state)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_SIDEBAR](state) {
    state.foldSidebar = !state.foldSidebar
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
