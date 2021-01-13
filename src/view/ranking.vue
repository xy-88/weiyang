<template>
  <div style="overflow-y: auto">
    <bar></bar>
    <search></search>
    <navigation></navigation>
    <div class="center">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="typelist-male" align="right">
            <div class="classify">
              <span>分类选择</span>
            </div>
            <ul>
              <li
                :key="index"
                v-for="(item, index) in typeNameList1"
                @click="changeType1(index)"
                v-bind:class="{ chosen1: isChosen1[index] }"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content rank-male">
            <div class="header"><img src="../assets/male.png" alt="" /></div>
            <div class="classify">
              <span>{{ durationText[duration1] }}排名</span>
              <div class="options">
                <span @click="changeDuration1('total')">总</span>
                <span @click="changeDuration1('monthly')">月</span>
                <span @click="changeDuration1('weekly')">周</span>
              </div>
            </div>
            <ul class="ranklist">
              <li :key="index" v-for="(item, index) in pageLists1">
                <span>{{ index + 20 * (currentPage1 -1 ) + 1 }}</span>
                {{ item.bookName }}
              </li>
            </ul>
            <el-pagination
                small
                @current-change="handleCurrentChange1"
                :current-page="currentPage1"
                :page-size="20"
                layout="prev, pager, next"
                :total="rankList1.length"
                style="text-align: center; margin-top:10px"
              >
              </el-pagination>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content rank-female">
            <div class="header"><img src="../assets/female.png" alt="" /></div>
            <div class="classify">
              <span>{{ durationText[duration2] }}排名</span>
              <div class="options">
                <span @click="changeDuration2('total')">总</span>
                <span @click="changeDuration2('monthly')">月</span>
                <span @click="changeDuration2('weekly')">周</span>
              </div>
            </div>
            <ul class="ranklist">
              <li :key="index" v-for="(item, index) in pageLists2">
                <span>{{ index + 20 * (currentPage2 -1 ) + 1 }}</span>
                {{ item.bookName }}
              </li>
            </ul>
            <el-pagination
                small
                @current-change="handleCurrentChange2"
                :current-page="currentPage2"
                :page-size="20"
                layout="prev, pager, next"
                :total="rankList2.length"
                style="text-align: center; margin-top:10px"
              >
              </el-pagination>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="typelist-female">
            <div class="classify">
              <span>分类选择</span>
            </div>
            <ul>
              <li
                :key="index"
                v-for="(item, index) in typeNameList2"
                @click="changeType2(index)"
                v-bind:class="{ chosen2: isChosen2[index] }"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
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
  name: "ranking",
  components: { bar, search, navigation, footertext },
  data() {
    return {
      typeId: 0,
      currentPage1: 1,
      currentPage2: 1,
      duration1: "total", //monthly weekly total
      duration2: "total",
      durationText: {
        total: "总",
        monthly: "月",
        weekly: "周",
      },
      bookDetail: {},
      rankList1: [], //男频
      rankList2: [], //女频
      pageLists1:[],//分页 本页显示
      pageLists2:[],
      isChosen1: [],
      isChosen2: [],
      typeNameList1: [
        "全部",
        "玄幻",
        "奇侠",
        "武侠",
        "仙侠",
        "都市",
        "现实",
        "军事",
        "历史",
        "游戏",
        "体育",
        "科幻",
        "悬疑",
        "轻小说",
      ],
      typeNameList2: [
        "全部",
        "古代言情",
        "仙侠奇缘",
        "现代言情",
        "浪漫青春",
        "悬疑推理",
        "科幻空间",
        "游戏竞技",
        "玄幻言情",
        "短篇",
        "现实生活",
        "青春文学",
      ],
    };
  },
  methods: {
    handleCurrentChange1(val) {
      this.currentPage1 = val;
      this.pageLists1 = this.rankList1.slice((val-1)*20,val*20)
    },
    handleCurrentChange2(val) {
      this.currentPage2 = val;
      this.pageLists2 = this.rankList2.slice((val-1)*20,val*20)
    },
    changeDuration1(duration) {
      //男频总/月/周
      let that = this;
      that.duration1 = duration;
      that.getMaleList(that.typeId);
    },
    changeDuration2(duration) {
      //女频总/月/周
      let that = this;
      that.duration2 = duration;
      that.getFemaleList(that.typeId);
    },
    changeType1(index) {
      let that = this;
      that.isChosen1 = [];
      that.isChosen1[index] = true;
      that.typeId = index + 1;
      // console.log(that.typeId);
      that.getMaleList(that.typeId);
    },
    changeType2(index) {
      let that = this;
      that.isChosen2 = [];
      that.isChosen2[index] = true;
      that.typeId = index == 0 ? 1 : index + 14;
      that.getFemaleList(that.typeId);
    },
    async getBook(id) {
      //小说详情
      let that = this;
      let query = await axios.post("/book/getBook/" + id);
      if (query.code == 200) that.bookDetail = query.data.book;
    },
    async getMaleList(typeId) {
      //男频榜
      let that = this;
      that.typeId = typeId;
      let query = await axios.get("/rank/gg/" + that.duration1 + "/" + typeId);
      if (query.code == 200) that.rankList1 = query.data.rankList;
      that.rankList1.forEach((item) => {
        that.getBook(item.bookId).then((res) => {
          // item.bookName = that.bookDetail.bookName;
          this.$set(item, "bookName", that.bookDetail.bookName); //更新视图
        });
      });
      that.pageLists1 = that.rankList1.slice(0, 20);
      that.currentPage1 = 1;
    },
    async getFemaleList(typeId) {
      //女频榜
      let that = this;
      that.typeId = typeId;
      let query = await axios.get("/rank/mm/" + that.duration2 + "/" + typeId);
      if (query.code == 200) that.rankList2 = query.data.rankList;
      that.rankList2.forEach((item) => {
        that.getBook(item.bookId).then((res) => {
          // item.bookName = that.bookDetail.bookName;
          this.$set(item, "bookName", that.bookDetail.bookName); //更新视图
        });
      });
      that.pageLists2 = that.rankList2.slice(0, 20);
      that.currentPage2 = 1;
    },
  },
  mounted() {
    console.log('11111111111111111111111111111111');
    let that = this;
    that.isChosen1[0] = true;
    that.isChosen2[0] = true;
    that.getMaleList(1);
    that.getFemaleList(1);
  },
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
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 60px;
}
.center {
  width: 75%;
  height: auto;
  text-align: left;
  // border: 2px solid #669999;
  // overflow: hidden;
  margin: 20px auto;
  padding: 5px;
  font-size: 13px;

  .rank-male,
  .rank-female {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 40px auto;
    border-radius: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .header {
    position: absolute;
    top: -40px;
    left: 0px;
    img {
      width: 120px;
      // width: 37%;
      opacity: 0.7;
    }
  }
  .classify {
    color: rgb(85, 119, 119);
    font-size: 14px;
    margin: 7px 5px 12px 5px;
    .options {
      float: right;
      span:hover {
        font-weight: bold;
      }
    }
  }
  .ranklist {
    li {
      height: 27px;
      line-height: 27px;
      padding-left: 10px;
      border-bottom: #e4e4e4 1px solid;
      span {
        display: inline-block;
        width: 8%;
      }
      .more {
        float: right;
      }
    }
    li:hover {
      color: rgb(102, 153, 153);
      font-weight: bold;
    }
  }
  .typelist-female,
  .typelist-male {
    margin: 40px auto;
    padding: 10px;
    color: rgb(102, 153, 153);
    ul {
      li {
        height: 27px;
        line-height: 27px;
        padding-left: 10px;
        border-left: #e4e4e4 1px solid;
      }
      li:hover {
        font-weight: bold;
      }
      .chosen1 {
        font-weight: bold;
        color: rgb(92, 126, 126);
        border-right: rgb(102, 153, 153) 3px solid;
      }
      .chosen2 {
        font-weight: bold;
        color: rgb(92, 126, 126);
        border-left: rgb(102, 153, 153) 3px solid;
      }
    }
  }
  .typelist-male ul li {
    padding-right: 10px;
    border: none;
    border-right: #e4e4e4 1px solid;
  }
}
</style>