<!--
 * @Author: chenxy
 * @Date: 2021-01-03 16:05:38
 * @LastEditTime: 2021-01-12 00:29:16
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
    <!-- <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row> -->
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
  .el-row { 
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 60px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
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
