import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '@/pages/Top'

import Music          from '@/pages/music/Music'
import MusicList      from '@/pages/music/List'
import MusicPlaylists from '@/pages/music/Playlists'
import MusicSearch    from '@/pages/music/Search'

import Daifuku from '@/pages/daifuku/Daifuku'
import Okonomi from '@/pages/okonomi/Okonomi'
import Cookie from '@/pages/cookie/Cookie'
import Tako from '@/pages/tako/Tako'
import Hidamari from '@/pages/hidamari/Hidamari'

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
    path: '/music/list',
    component: MusicList
  },
  {
    path: '/music/playlists',
    component: MusicPlaylists
  },
  {
    path: '/music/search',
    component: MusicSearch
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
  },
  {
    path: '/hidamari',
    component: Hidamari
  }
]

const router = new VueRouter({
  // mode: 'history', historyを有効にするとnginxをよしなにしないといけない
  base: process.env.BASE_URL,
  routes: routes
})

export default router
