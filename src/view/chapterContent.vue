<!--
 * @Author: chenxy
 * @Date: 2021-01-12 00:26:15
 * @LastEditTime: 2021-01-14 01:02:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \novel\src\view\chapterContent.vue
-->
<template>
  <div>
    <bar></bar>
    <search></search>
    <navigation></navigation>
    <div class="chapterContent">
      {{chapter.chapterContent}}
    </div>
  </div>
</template>

<script>
import { bar, navigation, search } from '@/components'
import axios from 'axios'

axios.defaults.baseURL = 'http://123.57.128.2:8080';
// axios.defaults.timeout = 8000;
axios.defaults.headers['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZWl5YW5nIiwiaWF0IjoxNjA5ODYyNzU2LCJleHAiOjE2MTA3MjY3NTYsInVzZXJfaWQiOiJoRHMxdkFrbElJemVPYnFYOE1IWWhRPT0ifQ.Fh5qcHyvmb_MxveEim-BmFKjLKRkc0xyhldITrEi8SE';

export default {
  name: 'chapterContent',
  data () {
    return {
      chapter: {
        chapterSeq: null,
        chapterName: '',
        chapterUrl: '',
        chapterContentAdd: '',
        chapterTotalWords: '',
        chapterUpdateDate: null,
        bookId: '',
        timeCreate: '',
        timeModified: '',
        chapterContent: ''
      }
    }
  },
  components: { bar, search, navigation },
  methods: {
    async getChapterContent (chapterId) {
      let that = this;
      var ret = await axios.post('/chapter/getChapter/' + chapterId);
      if (ret) {
        that.chapter = ret.chapter;
      }
      console.log(that.chapter);
    },
  },
  created () {
    let id = this.$route.query.id;
    this.getChapterContent(id);
    console.log('你好这是内容页' + id);
  }
}
</script>