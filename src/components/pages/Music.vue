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
        <ul class="list-group list-group-flush">
          <li
            v-for="song in queue"
            v-bind:key="song.title"
            class="list-group-item my-1">
            <button class="btn btn-sm btn-info">
              <font-awesome-icon :icon="icon.play" />
            </button>
            <span class="ml-2">{{ song.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Player from '@/components/music/Player.vue'

export default {
  data: function() {
    return {
      apiUrl: 'http://192.168.10.101:5000/api/v2',
      queue: [],
      icon: {
        play: faPlay
      },
    }
  },
  components: {
    Player,
    FontAwesomeIcon
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
