import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store.js'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false
Vue.use(Toasted)

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})
