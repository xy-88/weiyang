<!--
 * @Author:chenxy
 * @Date: 2021-01-04 20:44:19
 * @LastEditTime: 2021-01-06 00:07:42
 * @LastEditors: Please set LastEditors
 * @Description: 搜索条
 * @FilePath: \novel\src\components\search.vue
-->
<template>
  <div class="search-bar">
    <img src="../assets/name.png">
    <el-input placeholder="请输入内容" v-model="input" class="input">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>
<script>
export default {
  name: 'search',
  data() {
    return {
      input: null
    }
  },
  methods: {
    
  }
}
</script>
<style scoped>
.search-bar {
  height: 90px;
  width: 100%;
  background-color: #f8f8f8;
  position: relative;
}
img {
  position: absolute;
  left: 50px;
  top: -30px;
}
.input {
  height: 40px;
  width: 400px;
  border: 1px solid #ffcc00;
  position: absolute;
  left: 45%;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.el-input-group__append button.el-button {
  background-color: #ffcc00;
  border: none;
  border-radius: 0;
}
</style>