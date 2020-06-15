<template>
  <div class="pos-f-t">
    <nav class="navbar navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebartoggle">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to='/' class="navbar-brand">Kashiwa</router-link>
      <!-- メニュー -->
      <div id="sidebartoggle" class="collapse navbar-collapse">
        <div class="row">
          <div class="col col-3">
            <div>
              <router-link to='/music' class="navbar-text">music</router-link>
            </div>
            <div>
              <router-link to='/daifuku' class="navbar-text">daifuku</router-link>
            </div>
            <div>
              <router-link to='/okonomi' class="navbar-text">okonomi</router-link>
            </div>
          </div>
          <div class="col col-md-auto">
            <Player />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Player from '@/components/music/HeaderPlayer.vue'

export default {
  components: {
    Player,
  }
}
</script>
