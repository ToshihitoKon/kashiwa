<template>
  <div class="container mt-4">
    <Player />
    <Queuelist />
  </div>
</template>

<script>
import Player from '@/components/music/Player.vue'
import Queuelist from '@/components/music/Queuelist.vue'

export default {
  components: {
    Player,
    Queuelist,
  }
}
</script>
