import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // 定义方法
    add(state){
      state.count++
    },
    addThree(state){
      state.count+=3
    }
  },
  actions: {
  },
  modules: {
  }
})
