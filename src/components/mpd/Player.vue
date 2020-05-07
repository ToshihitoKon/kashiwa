<template>
  <div class="card my-2 mx-auto w-75">
    <div class="card-body mx-auto w-75">
      <div class="text-center">
        <button
          class="btn btn-light"
          v-on:click="getMusicStatus">
          <p class="card-subtitle my-2">nowplaying</p>
          <p>{{ musicStatus.title }} / {{ musicStatus.artist }}</p>
        </button>
      </div>
      <div class="text-center">
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
      <h6 class="card-title">volume: {{ musicStatus.volume }}</h6>
      <input
        type="range"
        class="custom-range"
        v-model="musicStatus.volume"
        v-on:change="postMusicVolume"
        min="0" max="99"/>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  data: function() {
    return {
      apiUrl: 'http://192.168.10.101:5000/api/v2',
      musicStatus:{
        title: 'loading...',
        isSleepTimer: false,
        volume: 50 ,
        isPlaying: false
      }
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
        volume: data.volume
      }
    },
    getMusicStatus: function () {
      Axios.get(`${this.apiUrl}/status`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
    },
    toggle: function () {
      Axios.post(`${this.apiUrl}/toggle`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
    },
    next: function () {
      Axios.post(`${this.apiUrl}/next`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
    },
    prev: function () {
      Axios.post(`${this.apiUrl}/prev`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
    },
    postMusicVolume: function () {
      Axios.post(`${this.apiUrl}/volume`, {
          volume: this.musicStatus.volume
      }).then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
    },
  }
}
</script>
