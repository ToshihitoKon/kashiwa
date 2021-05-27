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

export const routes = [
  {
    path: '/',
    component: Top,
    props: {
      msg: 'Welcome to Kashiwa'
    }
  },
  {
    path: '/music',
    component: Music,
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
    path: '/cookie',
    component: Cookie
  },
  {
    path: '/tako',
    component: Tako
  },
  {
    path: '/okonomi',
    component: Okonomi
  },
  {
    path: '/hidamari',
    component: Hidamari
  }
]

