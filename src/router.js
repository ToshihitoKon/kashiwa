import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '@/components/Top'
import Music from '@/components/Music'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
