<template>
  <div>
    <h3>当前count为：{{count}}</h3>
    <button @click="addOne">+1</button>
    <button @click="addThree">+3</button>
    <hr>
  </div>
</template>
<script>
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