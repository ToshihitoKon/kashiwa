import Vue from 'vue'
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Top from '@/components/pages/Top'
import Music from '@/components/pages/Music'
import Daifuku from '@/components/pages/Daifuku'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

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
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: routes
})

export default router
