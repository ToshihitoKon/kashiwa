<template>
  <div class="container mt-4">
    <Chocho />
    <Player />
    <Queuelist />
    <Playlist />
  </div>
</template>

<script>
import Player from '@/components/music/Player.vue'
import Queuelist from '@/components/music/Queuelist.vue'
import Playlist from '@/components/music/Playlist.vue'
import Chocho from '@/components/music/Chocho.vue'

export default {
  components: {
    Chocho,
    Player,
    Queuelist,
    Playlist,
  }
}
</script>
