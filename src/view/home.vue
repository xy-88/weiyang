<!--
 * @Author: chenxy
 * @Date: 2021-01-03 16:05:38
 * @LastEditTime: 2021-01-14 01:04:34
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: \novel\src\view\home.vue
-->
<template>
  <div>
    <bar></bar>
    <search></search>
    <navigation></navigation>
    <div class="home">
      
    </div>
  </div>
</template>

<script>
import { bar, navigation, search } from '@/components'
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components: { bar, search, navigation }
}
</script>

<style scoped lang="scss">
  .home {
    width: 65%;
    height: auto;
    text-align: left;
    border: 2px solid #669999;
    overflow: hidden;
    margin: 20px auto;
    padding: 10px;
  }
</style>
