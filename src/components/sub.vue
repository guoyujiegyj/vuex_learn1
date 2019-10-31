<template>
  <div>
    <h3>当前count为：{{$store.state.count}}</h3>
    <button @click='subO'>-1</button>
    <button @click='subT'>-3</button>
    <button @click='subThreeAsync'>-3async</button>
    <hr>
  </div>
</template>
<script>
// 导入magMutations,用来操作$store.mutations里的方法。
import { mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    // 获取$store.mutations 里的函数
    ...mapMutations(['subOne','subThree']),
    // 调用mutauions里的方法。
    subO() {
      this.subOne()
    },
    subT() {
      // 为mutations里的方法传参
      this.subThree(3)
    },
    //
    subThreeAsync() {
      this.$store.dispatch('subAsync',3)
    }
  }
}
</script>

<style lang='less' scoped>
</style>