<template>
  <div>
    <h3>当前count为：{{count}}</h3>
    <button @click="addOne">+1</button>
    <button @click="addThree">+3</button>
    <button @click="addOneAsync">+1async</button>
    <hr>
  </div>
</template>
<script>
// 导入mapState,用来获取$store的数据
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    addOne(){
      // 通过$store的commit方法触发mutation
      this.$store.commit('add')
    },
    addThree() {
      this.$store.commit('addThree',3)
    },
    // 异步加1
    addOneAsync() {
      // dispatch专门用来执行actions里的 方法
      this.$store.dispatch('addAsync')
    }
  },
  // 将区局数据映射为当前组件的计算属性。
  computed: {
    ...mapState(['count'])
  }
  // computed: mapState({
  //   count: 'count'
  // })
}
</script>

<style lang='less' scoped>
</style>