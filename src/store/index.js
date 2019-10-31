import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // 修改state里的数据，只能通过mutations里的方法来修改。
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
    // actions专门执行异步操作。
    addAsync(cont) {
      setTimeout(()=>{
        // 通过commit来调用mutations里的方法
        cont.commit('add')
      },1200)
    },
    subAsync(context, n) {
      setTimeout(()=>{
        context.commit('subThree',n)
      },1000)
    }
  },
  modules: {
  }
})
