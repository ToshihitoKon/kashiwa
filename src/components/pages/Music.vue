<template>
  <div class="container mt-4">
    <Player />
    <div class="card my-2 mx-auto w-75">
      <div class="card-body">
        <h6 class="card-title">queue list</h6>
        <div>
          <button
            class="btn btn-light"
            v-on:click="getMusicQueueList">
            load
          </button>
          <button
            class="btn btn-light">
            crop
          </button>
        </div>
        <ul>
          <li v-for="song in queue" v-bind:key="song.title">
            <button class="btn btn-light">
              play
            </button>
            {{ song.position }}: {{ song.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import Player from '@/components/mpd/Player.vue'

export default {
  data: function() {
    return {
      apiUrl: 'http://192.168.10.101:5000/api/v2',
      queue: []
    }
  },
  components: {
    Player
  },
  methods: {
    getMusicQueueList: function () {
      Axios.get(`${this.apiUrl}/playlist/current`)
        .then(function(res){
          this.queue = res.data
        }.bind(this))
    }
  }
}
</script>
