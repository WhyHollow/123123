import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth';
import search from './search'
import audio from './audio'
import workspace from './workspace'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    search,
    audio,
    workspace
  }
})
