import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '@/components/Top'
import Music from '@/components/Music'
import Daifuku from '@/components/Daifuku'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Top,
    props: {
      msg: 'Welcome to Kashiwa w/router'
    }
  },
  {
    path: '/music',
    component: Music
  },
  {
    path: '/daifuku',
    component: Daifuku
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: routes
})

export default router
