import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: []
  },
  mutations: {
    useradd (state,user) {
     state.userinfo.push('213')
     console.log(state.userinfo)
    }
  },
  actions: {

  }
})
