import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import IndexAd from '@/page/indexAd'
import Business from '@/page/business'
import UserManage from '@/page/userManage'
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/ad' },
    {
      path: '/ad',
      name: 'IndexAd',
      component: IndexAd
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/user',
      name: 'UserManage',
      component: UserManage
    }
  ]
})
