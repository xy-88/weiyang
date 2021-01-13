/*
 * @Author: chenxy
 * @Date: 2021-01-03 15:40:09
 * @LastEditTime: 2021-01-14 01:03:59
 * @LastEditors: Please set LastEditors
 * @Description: 路由
 * @FilePath: \novel\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import { home, novel, chapterContent, ranking } from '@/view'
import { login } from '@/components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/novel',
      name: 'novel',
      component: novel
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/chapterContent/:chapterId',
      name: 'chapterContent',
      component: chapterContent
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
  ]
})
