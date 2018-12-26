import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: (state, obj) => {
      state.count = obj
    },
    decrement: state => state.count ++
  },
  actions: {
    increment ({ commit, state }, obj) {
      commit('increment', obj.amount)
      console.log(obj)
    }
  }
})
