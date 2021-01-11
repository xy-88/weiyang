<!--
 * @Author: chenxy
 * @Date: 2021-01-03 16:06:50
 * @LastEditTime: 2021-01-09 13:46:15
 * @LastEditors: Please set LastEditors
 * @Description: 个人信息条
 * @FilePath: \novel\src\components\bar.vue
-->
<template>
  <div class="bar">
    <div>
      <span v-for="item in barData" :key="item.name" class="bar-content">
        <a :href="item.href">{{item.name}}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data() {
    return {
      barData: [
        {
          name: '联系客服',
          href: '#'
        },
        {
          name: '充值',
          href: '#'
        },
        {
          name: '我的书架',
          href: '#'
        },
        {
          name: '登录/注册',
          href: '#/login'
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.bar {
  width: 100%;
  height: 30px;
  background-color: #f0f0f0;
}
.bar-content {
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #666666;
  display: block;
  float: right;
}
</style>