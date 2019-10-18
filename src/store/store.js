import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curCity: {
      cityCode: '4900',
      cityName: '深圳',
      cityType: '',
      provinceName: '广东'
    }
  },

  mutations: {
    setCurCity (state, payload) {
    state.curCity = payload
    }
  }

})

