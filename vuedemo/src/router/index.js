import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import LoIndex from '@/components/LoIndex'
import Register from '@/components/Register'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoIndex',
      component: LoIndex
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
