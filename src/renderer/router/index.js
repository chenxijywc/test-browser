import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Browser from '@/pages/browser'
import Result from '@/pages/result'

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/pages/login'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/browser',
      name: 'browser',
      component: Browser,
      children: [
        {path: '/1', component: null, name: '1'}
      ]
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
      children: [
        {path: '/1', component: null, name: '1'}
      ]
    }
  ]
})
