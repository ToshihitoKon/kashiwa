<template>
  <div class="container mt-4">
    <div class="card my-2">
      <div class="card-body">
        <h5 class="card-title">音楽</h5>
        <h6 class="card-subtitle my-2">nowplaying</h6>
        <p>{{ musicStatus.title }} / {{ musicStatus.artist }}</p>
        <p>{{ sleepTimer }}</p>

        <button
          class="btn btn-light"
          v-on:click="getMusicStatus">
            status
        </button>
        <button class="btn btn-light">toggle</button>
        <button class="btn btn-light">next</button>
        <button class="btn btn-light">prev</button>
        <button class="btn btn-light">sleep</button>
        <button class="btn btn-light">sleep cancel</button>
        <button class="btn btn-light">playlists</button>

        <div class="card mt-3">
          <div class="card-body">
            <p class="card-title">volume: {{ musicStatus.volume }}</p>
            <input
              type="range"
              class="custom-range"
              v-model="musicStatus.volume"
              v-on:change="postMusicVolume"
              min="0" max="99"/>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-titled">
          </div>
          <div class="card-body">
            <span class="card-title">queue list</span>
            <button
              class="btn btn-light"
              v-on:click="getMusicQueueList">load</button>
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
        volume: 50 
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
  methods: {
    setMusicStatus: function(data) {
      this.musicStatus = {
        title: data.title,
        artist: data.artist,
        isSleepTimer: data.isSleepTimer,
        volume: data.volume
      }
    },
    getMusicStatus: function () {
      Axios.post(`${this.apiUrl}/api/status`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
    },
    postMusicVolume: function () {
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
      Axios.post(`${this.apiUrl}/api/playlist/list`)
        .then(function(res){
          this.queue = res.data
        }.bind(this))
    },
  }
}
</script>
