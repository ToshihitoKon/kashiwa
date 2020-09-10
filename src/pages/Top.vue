<template>
  <div class="container w-75">
    <div class="top">
      <img alt="Vue logo" src="@/assets/logo.png">
      <h1>{{ msg }}</h1>
    </div>
    <div class="mt-4 text-right">
      <Player />
      <router-link to='/music' class="btn btn-link">
        music
      </router-link>
      <Player />
      <router-link to='/music' class="btn btn-link">
        okonomi
      </router-link>
    </div>
  </div>
</template>

<script>
import Player from '@/components/music/Player.vue'

export default {
  name: 'Top',
  components: {
    Player
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
