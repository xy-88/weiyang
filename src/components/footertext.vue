<!--
 * @Author: your name
 * @Date: 2021-01-09 21:53:22
 * @LastEditTime: 2021-01-10 16:51:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \novel\src\components\footertext.vue
-->
<template>
  <div class="footer">
    <p>
      本站所有小说为转载作品，所有章节均由网友上传，转载至本站只是为了宣传本书让更多读者欣赏
    </p>
    <p>
      Copyright © 2021 <a href="javascript:;">weiyang</a> All Rights Reserved.
    </p>
  </div>
</template>

<script>
export default {
  name: "footertext",
  data() {
    return {
      
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  margin: 0px auto;
  padding-top: 10px;
  border-top: rgba(102, 153, 153, 0.651) solid 1px;
  p {
    font-size: 10px;
    margin-bottom: 10px;
    color: rgba(128, 128, 128, 0.712);
  }
}
</style>