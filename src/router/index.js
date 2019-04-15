import Vue from 'vue'
import Router from 'vue-router'
import double from '@/components/double'
import test from '@/components/test'
import iscroll from '@/components/iscroll'
import one from '@/components/relearn/one'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'double',
      component: double
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/iscroll',
      name: 'iscroll',
      component: iscroll
    },
    {
      path: '/relearn/one',
      name: 'one',
      component: one
    }
  ]
})
