import Vue from 'vue'
import Router from 'vue-router'
import LandingLoad from '@/components/LandingLoad'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: LandingLoad

    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
