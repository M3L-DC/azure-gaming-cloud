import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      authenticated: false
    },
    loading: false
  },
  mutations: {
    AUTHENTICATE_USER(state) {
      state.currentUser.authenticated = true;
    },
    LOGOUT(state) {
      state.currentUser.authenticated = false;
    },
    IS_LOADING(state){
      state.loading = true;
    },
    IS_NOT_LOADING(state){
      state.loading = false;
    },
  },
  actions: {
    signIn({ commit }, { username, password }){
      return new Promise((success, reject) => {
        if (username == "user" && password == "password") { 
          commit('AUTHENTICATE_USER');
          success();
        }
        else { 
          e => { reject(e) }
        }
      })
    },    
    logout({ commit }){
      commit('LOGOUT');
    },
    isLoading({ commit }){
      commit('IS_LOADING');
    },
    isNotLoading({ commit }){
      commit('IS_NOT_LOADING');
    },
  },
  getters: {
    userIsAuthenticated(state){
      return state.currentUser.authenticated === true;
    }
  },
  modules: {
  }
})
