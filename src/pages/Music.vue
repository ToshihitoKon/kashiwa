<template>
  <div class="container mt-4 w-75">
    <Player />
    <Queuelist />
    <Playlist />
  </div>
</template>

<script>
import Player from '@/components/music/Player.vue'
import Queuelist from '@/components/music/Queuelist.vue'
import Playlist from '@/components/music/Playlist.vue'

export default {
  components: {
    Player,
    Queuelist,
    Playlist,
  }
}
</script>
