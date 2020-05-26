import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '@/components/pages/Top'
import Music from '@/components/pages/Music'
import Daifuku from '@/components/pages/Daifuku'
import Okonomi from '@/components/pages/Okonomi'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Top,
    props: {
      msg: 'Welcome to Kashiwa'
    }
  },
  {
    path: '/music',
    component: Music
  },
  {
    path: '/daifuku',
    component: Daifuku
  },
  {
    path: '/okonomi',
    component: Okonomi
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: routes
})

export default router
