import Vue from 'vue'
import Router from 'vue-router'
import double from '@/components/double'
import test from '@/components/test'

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
    }
  ]
})
