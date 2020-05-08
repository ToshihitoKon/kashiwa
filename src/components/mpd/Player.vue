<template>
  <div class="card my-2 mx-auto w-75">
    <div class="card-body mx-auto w-75">
      <div class="text-center">
        <p><strong>{{ musicStatus.title }} / {{ musicStatus.artist }}</strong></p>
      </div>
      <div class="text-center mt-2">
        <button
          class="btn btn-info mx-1"
          v-on:click="prev">
          <font-awesome-icon :icon="icon.prev" />
        </button>
        <button
          class="btn btn-info mx-1"
          v-on:click="toggle">
          <font-awesome-icon :icon="togglePlay" />
        </button>
        <button
          class="btn btn-info mx-1"
          v-on:click="next">
          <font-awesome-icon :icon="icon.next" />
        </button>
      </div>
      <div class="text-center mt-2">
        <button
          class="btn btn-sm mx-1"
          v-bind:class="[musicStatus.random? 'btn-info': 'btn-outline-info']">
          <font-awesome-icon :icon="icon.random" />
        </button>
        <button
          class="btn btn-sm mx-1"
          v-bind:class="[musicStatus.single? 'btn-info': 'btn-outline-info']">
          <font-awesome-icon :icon="icon.single" />
        </button>
        <button
          class="btn btn-sm mx-1"
          v-bind:class="[musicStatus.repeat? 'btn-info': 'btn-outline-info']">
          <font-awesome-icon :icon="icon.repeat" />
        </button>
        <button
          class="btn btn-sm mx-1"
          v-bind:class="[musicStatus.consume? 'btn-info': 'btn-outline-info']">
          <font-awesome-icon :icon="icon.consume" />
        </button>
      </div>
      <div class="mx-auto mt-2 w-50">
        <span>volume: {{ musicStatus.volume }}</span>
        <input
          type="range"
          class="custom-range"
          v-model="musicStatus.volume"
          v-on:change="postMusicVolume"
          min="0" max="99"/>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
  faRandom,
  faRedo,
  faStopCircle,
  faEraser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  data: function() {
    return {
      apiUrl: 'http://192.168.10.101:5000/api/v2',
      fetchStatusTimer: 0,
      musicStatus:{
        title: 'loading...',
        isSleepTimer: false,
        total: 0,
        duration: 0,
        playlistPosition: 0,
        volume: 50 ,
        isPlaying: false,
        random: false,
        single: false,
        repeat: false,
        consume: false
      },
      icon: {
        play: faPlay,
        pause: faPause,
        next: faStepForward,
        prev: faStepBackward,
        random: faRandom,
        repeat: faRedo,
        single: faStopCircle,
        consume: faEraser,
      }
    }
  },
  components: {
    FontAwesomeIcon,
  },
  created: function() {
    this.getMusicStatus()
  },
  computed: {
    togglePlay: function() {
      return (this.musicStatus.isPlaying) ? this.icon.pause : this.icon.play
    }
  },
  methods: {
    setMusicStatus: function(data) {
      clearTimeout(this.fetchStatusTimer)

      this.musicStatus = {
        title: data.title,
        artist: data.artist,
        isPlaying: data.isplaying,
        volume: data.volume,
        random: data.random,
        single: data.single,
        repeat: data.repeat,
        consume: data.consume,
        total: data.total,
        duration: data.duration,
      }
      
      if(this.musicStatus.isPlaying){
        var interval = this.musicStatus.total - this.musicStatus.duration
        this.fetchStatusTimer = setTimeout(this.getMusicStatus, (interval + 2) * 1000)
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
