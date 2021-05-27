import { createApp } from 'vue';
import App from '@/App'
import { modules } from '@/store'
import Toaster from "@meforma/vue-toaster";

import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/router'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

import { createStore }from 'vuex'

const store = createStore({
  modules
})

const app = createApp(App)
app.use(Toaster)
app.use(router)
app.use(store)
app.mount('#app')
