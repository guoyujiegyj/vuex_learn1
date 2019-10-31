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
    addThree(state,n){
      state.count+=n
    },
    // 定义减1方法
    subOne(state) {
      state.count--
    },
    // 定义减3 方法
    subThree(state,n) {
      state.count-=n
    }
  },
  actions: {
  },
  modules: {
  }
})
