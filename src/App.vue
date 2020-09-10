<template>
  <div class="wrapper">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import store from '@/store.js'

export default {
  name: 'app',
  store,
  components: {
    Header
  }
}
</script>
