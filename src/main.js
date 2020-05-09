import Vue from 'vue'
import VUex from 'vuex'
import App from '@/App'
import router from '@/router'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
