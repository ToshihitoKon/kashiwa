<template>
  <div class="container mt-4">
    <div class="card my-2">
      <div class="card-body">
        <h6 class="card-title">status</h6>
        <p class="card-subtitle my-2">nowplaying</p>
        <p>{{ musicStatus.title }} / {{ musicStatus.artist }}</p>
        <p>{{ sleepTimer }}</p>
        <button
          class="btn btn-light"
          v-on:click="getMusicStatus">
            update
        </button>
      </div>
    </div>

    <div class="card my-2">
      <div class="card-body">
        <h6 class="card-title">操作盤</h6>
        <button
          class="btn btn-light"
          v-on:click="toggle">
            {{ musicStatus.isPlaying | displayToggle }}
        </button>
        <button
          class="btn btn-light"
          v-on:click="next">
            next
        </button>
        <button
          class="btn btn-light"
          v-on:click="prev">
            prev
        </button>
      </div>
    </div>

    <div class="card my-2">
      <div class="card-body">
        <h6 class="card-title">volume: {{ musicStatus.volume }}</h6>
        <input
          type="range"
          class="custom-range"
          v-model="musicStatus.volume"
          v-on:change="postMusicVolume"
          min="0" max="99"/>
      </div>
    </div>

    <div class="card my-2">
      <div class="card-body">
        <h6 class="card-title">quque list</h6>
        <button
          class="btn btn-light"
          v-on:click="getMusicQueueList">load
        </button>
        <details>
          <ul>
            <li v-for="song in queue" v-bind:key="song">
              {{ song }}
            </li>
          </ul>
        </details>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  data: function() {
    return {
      apiUrl: 'http://192.168.10.101:5000',
      musicStatus:{
        title: 'loading...',
        isSleepTimer: false,
        volume: 50 ,
        isPlaying: false
      },
      queue: [],
    }
  },
  created: function() {
    this.getMusicStatus()
  },
  computed: {
    sleepTimer: function(){
      return (this.musicStatus.isSleepTimer)?'寝':''
    }
  },
  filters: {
    displayToggle: function (isplaying) {
      return (isplaying) ? 'pause' : 'play'
    }
  },
  methods: {
    setMusicStatus: function(data) {
      this.musicStatus = {
        title: data.title,
        artist: data.artist,
        isPlaying: data.isplaying,
        isSleepTimer: data.isSleepTimer,
        volume: data.volume
      }
    },
    getMusicStatus: function () {
      Axios.get(`${this.apiUrl}/api/status`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
    },
    postMusicVolume: function () {
      // TODO: POST対応する
      Axios.get(`${this.apiUrl}/api/volume`, {
        params:{
          'num': this.musicStatus.volume
        }
      }).then(function(res){
          const m = this.musicStatus(res.data)
          m.volume = res.data
          this.musicStatus = m
        }.bind(this))
    },
    getMusicQueueList: function () {
      Axios.get(`${this.apiUrl}/api/playlist/list`)
        .then(function(res){
          this.queue = res.data
        }.bind(this))
    },
    toggle: function () {
      Axios.post(`${this.apiUrl}/api/toggle`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
    },
    next: function () {
      Axios.post(`${this.apiUrl}/api/next`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
    },
    prev: function () {
      Axios.post(`${this.apiUrl}/api/prev`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
    },
  }
}
</script>
