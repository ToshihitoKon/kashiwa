<template>
  <div>
    <Header />
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Kashiwa"/>
    </div>
    <div class="container mt-4">
      <Music />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Music from './components/Music.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
    Music
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
