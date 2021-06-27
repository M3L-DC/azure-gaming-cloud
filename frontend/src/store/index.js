import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      authenticated: false
    }
  },
  mutations: {
    AUTHENTICATE_USER(state) {
      state.currentUser.authenticated = true;
    },
    LOGOUT(state) {
      state.currentUser.authenticated = false;
    }
  },
  actions: {
    signIn({ commit }){
      commit('AUTHENTICATE_USER');
    },
    logOut({ commit }){
      commit('LOGOUT');
    }
  },
  getters: {
    userIsAuthenticated(state){
      return state.currentUser.authenticated === true;
    }
  },
  modules: {
  }
})
