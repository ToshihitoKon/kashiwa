<template>
  <div class="card my-2 mx-auto w-75">
    <div class="card-body mx-auto w-75">
      <div class="text-center">
        <p class="card-subtitle my-2">nowplaying</p>
        <p>{{ musicStatus.title }} / {{ musicStatus.artist }}</p>
        <div class="text-center">
          <button
            class="btn btn-sm mx-1"
            v-bind:class="[musicStatus.random? 'btn-info': 'btn-outline-info']">
            random
          </button>
          <button
            class="btn btn-sm mx-1"
            v-bind:class="[musicStatus.single? 'btn-info': 'btn-outline-info']">
            single
          </button>
          <button
            class="btn btn-sm mx-1"
            v-bind:class="[musicStatus.repeat? 'btn-info': 'btn-outline-info']">
            repeat
          </button>
          <button
            class="btn btn-sm mx-1"
            v-bind:class="[musicStatus.consume? 'btn-info': 'btn-outline-info']">
            consume
          </button>
        </div>
        <div class="mt-3">
          <button
            class="btn btn-info"
            v-on:click="getMusicStatus">
            reload
          </button>
        </div>
      </div>
      <div class="text-center mt-3">
        <button
          class="btn btn-info mx-1"
          v-on:click="toggle">
            {{ musicStatus.isPlaying | displayToggle }}
        </button>
        <button
          class="btn btn-info mx-1"
          v-on:click="next">
            next
        </button>
        <button
          class="btn btn-info mx-1"
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
        isPlaying: false,
        random: false,
        single: false,
        repeat: false,
        consume: false
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
        volume: data.volume,
        random: data.random,
        single: data.single,
        repeat: data.repeat,
        consume: data.consume
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
