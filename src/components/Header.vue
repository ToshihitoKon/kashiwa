<template>
  <div class="pos-f-t">
    <nav class="navbar navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebartoggle">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to='/' class="navbar-brand">
        <img alt="Vue logo"
          style="max-height: 1em"
          src="@/assets/logo.png">
        Kashiwa
      </router-link>
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
            <div>
              <router-link to='/cookie' class="navbar-text">cookie</router-link>
            </div>
            <div>
              <router-link to='/tako' class="navbar-text">tako</router-link>
            </div>
          </div>
          <div class="col col-md-auto mx-auto">
            <Player />
            <Ziho />
          </div>
          <div class="col col-3">
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Player from '@/components/music/HeaderPlayer.vue'
import Ziho from '@/components/okonomi/Ziho.vue'

export default {
  components: {
    Player,
    Ziho
  }
}
</script>
