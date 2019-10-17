import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Banner from '@/components/Banner'
import Starships from '@/views/Starships'
import Planets from '@/views/Planets'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/starships',
      name: 'Starships',
      component: Starships
    },
    {
      path: '/planets',
      name: 'Planets',
      component: Planets
    }
  ]
})

export default router
