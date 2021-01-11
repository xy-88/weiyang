<!--
 * @Author: chenxy
 * @Date: 2021-01-07 16:54:47
 * @LastEditTime: 2021-01-12 01:29:05
 * @LastEditors: Please set LastEditors
 * @Description: 小说详情页
 * @FilePath: \novel\src\view\novel.vue
-->
<template>
  <div>
    <bar></bar>
    <search></search>
    <navigation></navigation>
    <div class="novel">
      <div>
        <img :src="novel.bookCoverAdd" alt="暂时没有图片噢">
        <p class="novel-name">{{novel.bookName}}</p>
        <div class="novel-author">
          <span>作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者：</span>
          {{novel.authorName}}
        </div>
        <div class="novel-action">
          <span>状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：</span>
          {{novel.bookState}}
        </div>
        <div class="novel-last-update">
          <span>最后更新：</span>
          {{novel.bookLastedDate}}
        </div>
        <div class="novel-last-chapter">
          <span>最新章节：</span>
          <a href="#">{{novel.bookLastedText}}</a>
        </div>
        <div class="novel-introduction">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {{novel.bookIntroduction}}
        </div>
      </div>
      <div class="total">
        <div class="total-content">
          总字数
          <div>{{novel.bookTotalWords}}</div>
        </div>
        <div class="total-content">
          总章节
          <div>{{novel.totalChapter}}</div>
        </div>
        <div class="total-content">
          总人气
          <div>{{novel.popularity}}</div>
        </div>
      </div>
    </div>
    <div class="chapter-list">
      <div v-for="item in chapterList" :key="item.chapterSeq" class="chapter-list-item">
        <span @click="getChapter(item.chapterId)">{{item.chapterName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { bar, navigation, search } from '@/components'
import axios from 'axios'

axios.defaults.baseURL = 'http://123.57.128.2:8080';
axios.defaults.timeout = 5000;
axios.defaults.headers['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZWl5YW5nIiwiaWF0IjoxNjA5ODYyNzU2LCJleHAiOjE2MTA3MjY3NTYsInVzZXJfaWQiOiJoRHMxdkFrbElJemVPYnFYOE1IWWhRPT0ifQ.Fh5qcHyvmb_MxveEim-BmFKjLKRkc0xyhldITrEi8SE';

// request拦截器
axios.interceptors.response.use(
  (res) => {
    return res.data;
  }, (error) => {
    console.log(error)
  }
);
export default {
  name: 'novel',
  data () {
    return {
      novel: {
        authorName: '',
        bookCoverAdd: '',
        bookIntroduction: '',
        bookLastedDate: '',
        bookLastedText: '',
        bookName: '',
        bookOrigin: '',
        bookScore: "0",
        bookState: '',
        bookTotalWords: '',
        bookUrl: '',
        popularity: '',
        timeCreate: '',
        timeModified: null,
        totalChapter: '',
        typeId: null,
        typeName: '',
      },
      chapterList: [
        {
          chapterId: null,
          chapterSeq: 0,       
          chapterName: '',
          chapterUrl: '',
          chapterContentAdd: '',
          chapterTotalWords: '',
          chapterUpdateDate: null,
          timeCreate: '',
          timeModified: ''
        }
      ],
      host: 'http://123.57.128.2:8080'
    }
  },
  components: { bar, search, navigation },
  methods: {
    async getNovel (bookId) {
      let that = this;
      var ret = await axios.post('/book/getBook/' + bookId);
      that.novel = ret.book;
      console.log(that.novel);
    },
    async getChapterList (bookId) {
      let that = this;
      var ret = await axios.post('/book/list/' + bookId);
      that.chapterList = ret.chapters;
      console.log(that.chapterList);
    },
    getChapter (chapterId) {
      this.$router.push({ name:'chapterContent', query: {id: chapterId} })
    }
  },
  created() {
    this.getNovel(63);
    this.getChapterList(63);
  }
}
</script>

<style lang="scss" scoped>
  .novel,.chapter-list {
    width: 65%;
    height: auto;
    text-align: left;
    background-color: white;
    overflow: hidden;
    margin: 20px auto;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  img {
    height: 150px;
    width: 130px;
    float: left;
  }
  .novel-name {
    display: block;
    font-size: 20px;
    margin-left: 140px;
    margin-top: 5px;
    color: rgb(48,48,48);
  }
  .novel-author,.novel-action,.novel-last-update,.novel-last-chapter,.novel-introduction {
    float: left;
    width: 350px;
    font-size: 13px;
    margin-left: 10px;
    margin-top: 8px;
  }
  .novel-introduction {
    width: 80%;
    line-height: 20px;
  }
  .total {
    width: 99%;
    border-top: 1px solid #c0c0c0;
    float: left;
    margin: 8px 8px;
    margin-bottom: 0;
    padding-top: 8px;
    font-size: 12px;
    .total-content {
      float: left;
      width: 30%;
      text-align: center;
      div {
        color: #cc0000;
        font-size: 18px;
        padding-top: 5px;
      }
    }
  }
  .chapter-list-item {
    float: left;
    width: 33%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    border-bottom: 1px dashed #c0c0c0;
  }
</style>
