<template>
  <div class="container mt-4 w-75">
    <div>
      <Player />
      <Queuelist />
      <PlaylistSelectView />
    </div>
    <div>
      <div>
        <router-link to='/music/list' class="navbar-text">list</router-link>
      </div>
      <div>
        <router-link to='/music/playlists' class="navbar-text">playlists</router-link>
      </div>
      <div>
        <router-link to='/music/search' class="navbar-text">search</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Player from '@/components/music/Player.vue'
import Queuelist from '@/components/music/Queuelist.vue'
import PlaylistSelectView from '@/components/music/PlaylistSelectView.vue'

export default {
  components: {
    Player,
    Queuelist,
    PlaylistSelectView,
  }
}
</script>
