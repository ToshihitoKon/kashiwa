import { createApp } from 'vue';
import App from '@/App'
const app = createApp(App)

import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/router'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
app.use(router)

import { createStore }from 'vuex'
const store = createStore({
  modules
})
app.use(store)

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
app.use(ElementPlus)

import { modules } from '@/store'
import Toaster from "@meforma/vue-toaster";
app.use(Toaster)

app.mount('#app')
