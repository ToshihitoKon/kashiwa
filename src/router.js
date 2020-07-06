import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '@/components/pages/Top'
import Music from '@/components/pages/Music'
import Daifuku from '@/components/pages/Daifuku'
import Okonomi from '@/components/pages/Okonomi'
import Cookie from '@/components/pages/Cookie'
import Tako from '@/components/pages/Tako'

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
  },
  {
    path: '/cookie',
    component: Cookie
  },
  {
    path: '/tako',
    component: Tako
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: routes
})

export default router
