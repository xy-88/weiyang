<!--
 * @Author: your name
 * @Date: 2021-01-10 22:13:31
 * @LastEditTime: 2021-01-11 01:59:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \novel\src\view\searching.vue
-->
<template>
  <div style="overflow-y: auto">
    <bar></bar>
    <search></search>
    <navigation></navigation>
    <div class="center">
      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%; font-size:12px"
          :cell-style="{ padding: '5px' }"
          :default-sort="{ prop: 'bookLastedDate', order: 'descending' }"
        >
          <el-table-column prop="bookName" label="作品名称" min-width="30%" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="bookLastedText" label="最新章节"  min-width="35%" show-overflow-tooltip>  
          </el-table-column>
          <el-table-column prop="authorName" label="作者" min-width="15%" show-overflow-tooltip> 
          </el-table-column>
          <el-table-column prop="bookLastedDate" label="最近更新" sortable min-width="20%" show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>
      <footertext></footertext>
    </div>
  </div>
</template>

<script>
import { bar, navigation, search, footertext } from "@/components";
import axios from "axios";
axios.defaults.baseURL = "http://123.57.128.2:8080";
axios.defaults.timeout = 5000;
axios.defaults.headers["token"] =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZWl5YW5nIiwiaWF0IjoxNjA5ODYyNzU2LCJleHAiOjE2MTA3MjY3NTYsInVzZXJfaWQiOiJoRHMxdkFrbElJemVPYnFYOE1IWWhRPT0ifQ.Fh5qcHyvmb_MxveEim-BmFKjLKRkc0xyhldITrEi8SE";

export default {
  name: "searching",
  components: { bar, search, navigation, footertext },
  data() {
    return {
      tableData: [
        {
          bookLastedDate: "2021-01-09",
          bookName: "学弟TA软萌甜是假的",
          authorName:"木亦乔",
          bookLastedText: "失散多年的亲兄弟",
        },
        {
          bookLastedDate: "2021-01-02",
          bookName: "关键词搜索",
          authorName:"你猜",
          bookLastedText: "不得不说的完结语",
        },
        {
          bookLastedDate: "2021-01-30",
          bookName: "神印王座",
          authorName:"唐家三少",
          bookLastedText: "明明就是一只大灰狼",
        },
        {
          bookLastedDate: "2021-01-19",
          bookName: "到了30岁还是处男就会变成魔法师这件事",
          authorName:"谁知道呢",
          bookLastedText: "怎么还不在一起",
        },
        {
          bookLastedDate: "2021-11-02",
          bookName: "高能二维码",
          authorName:"不记得了",
          bookLastedText: "就乱写的",
        },
        {
          bookLastedDate: "2021-04-30",
          bookName: "为您报时",
          authorName:"wxy",
          bookLastedText: "现在是一点三十九分",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0px;
  padding: 0px;
}
.center {
  width: 65%;
  height: auto;
  text-align: left;
  margin: 20px auto;
  padding: 5px;
  font-size: 13px;
  .table {
    background-color: #fff;
    margin-bottom: 50px;
    padding-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
}
</style>