<!--
 * @Author: chenxy
 * @Date: 2021-01-05 00:08:42
 * @LastEditTime: 2021-01-09 13:45:53
 * @LastEditors: Please set LastEditors
 * @Description: 导航
 * @FilePath: \novel\src\components\navigation.vue
-->
<template>
  <div>
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#669999" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1"><a href="#/">首页</a></el-menu-item>
      <el-menu-item index="2"><a href="#/novel">书单</a></el-menu-item>
      <el-menu-item index="3">分类</el-menu-item>
      <el-menu-item index="4">排行榜</el-menu-item>
      <el-menu-item index="5">客户端</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import axios from 'axios'
// 创建axios实例
// axios.create({
//   baseURL: 'http://123.57.128.2:8080', // api的base_api
//   timeout: 65000, // 请求超时
//   // eslint-disable-next-line quote-props
//   headers: { 'cache-control': 'no-cache', 'Content-Type': 'application/json', 'Charset': 'UTF-8' }
// })
axios.defaults.baseURL = 'http://123.57.128.2:8080';
axios.defaults.timeout = 5000;
axios.defaults.headers['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZWl5YW5nIiwiaWF0IjoxNjA5ODYyNzU2LCJleHAiOjE2MTA3MjY3NTYsInVzZXJfaWQiOiJoRHMxdkFrbElJemVPYnFYOE1IWWhRPT0ifQ.Fh5qcHyvmb_MxveEim-BmFKjLKRkc0xyhldITrEi8SE';

// request拦截器
axios.interceptors.response.use(function(res){
  return res.data;
}, function(error){
  console.log(error)
});
export default {
  name: 'navigation',
  data() {
    return {

    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
      if (key == 1) {
        keyPath = '#/';
      }
      if (key == 4) {
        this.rank(key);
      }
    },
    async rank (key) {
      var ret = await axios.get('/rank/mm/total/' + 18);
      console.log(ret);
    }
  }
}
</script>
<style scoped>
.el-menu {
  padding-left: 20%;
}
.el-menu-item {
  padding: 0 60px;
}
</style>