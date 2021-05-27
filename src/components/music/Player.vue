<template>
  <div class="card my-2 mx-auto">
    <div class="card-body">
      <div class="text-center">
        <p><strong>{{ player.title }} / {{ player.artist }}</strong></p>
      </div>
      <div class="text-center mt-2">
        <button
          class="btn btn-info mx-1"
          unselectable=on
          v-on:click="prev">
        <span class="material-icons">skip_previous</span>
        </button>
        <button
          class="btn btn-info mx-1"
          unselectable=on
          v-on:click="toggle">
        <span class="material-icons">play_arrow</span>
        </button>
        <button
          class="btn btn-info mx-1"
          unselectable=on
          v-on:click="next">
          <span class="material-icons">skip_next</span>
        </button>
      </div>
      <div class="text-center mt-2">
        <button
          class="btn btn-sm mx-1"
          unselectable=on
          v-on:click="changeMode('random')"
          v-bind:class="[player.random? 'btn-info': 'btn-outline-info']">
          <span class="material-icons">shuffle</span>
        </button>
        <button
          class="btn btn-sm mx-1"
          unselectable=on
          v-on:click="changeMode('single')"
          v-bind:class="[player.single? 'btn-info': 'btn-outline-info']">
          <span class="material-icons">stop</span>
        </button>
        <button
          class="btn btn-sm mx-1"
          unselectable=on
          v-on:click="changeMode('repeat')"
          v-bind:class="[player.repeat? 'btn-info': 'btn-outline-info']">
          <span class="material-icons">repeat</span>
        </button>
        <button
          class="btn btn-sm mx-1"
          unselectable=on
          v-on:click="changeMode('consume')"
          v-bind:class="[player.consume? 'btn-info': 'btn-outline-info']">
          <span class="material-icons">delete_sweep</span>
        </button>
        <button
          class="btn btn-sm mx-1"
          unselectable=on
          v-on:click="sleeptimer"
          v-bind:class="[player.sleeptimer? 'btn-info': 'btn-outline-info']">
          <span class="material-icons">alarm_on</span>
        </button>
        <button
          class="btn btn-sm mx-1"
          v-if="player.sleeptimer"
          unselectable=on
          v-on:click="sleeptimercancel"
          v-bind:class="[player.sleeptimer? 'btn-info': 'btn-outline-info']">
          <span class="material-icons">alarm_off</span>
        </button>
      </div>
      <div class="mt-2 mx-auto" style="max-width:500px">
        <span>volume: {{ volume }}</span>
        <input
          type="range"
          class="custom-range"
          v-model="volume"
          v-on:change="postMusicVolume"
          min="0" max="99"/>
      </div>
      <div class="text-center">
        <a
          target="_blank"
          v-bind:href="nowplayingUrlEncodedText">
          <p>
          nowplaying
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Axios from 'axios'

export default {
  data: function() {
    return {
      volume: 0,
    }
  },
  computed: {
    ...mapState('music', {
      player: state => state.player,
      fetchTimer: state => state.fetchTimer
    }),
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
      toastOptionSuccess: state => state.toastOptionSuccess,
      toastOptionError: state => state.toastOptionError,
    }),
    togglePlay: function() {
      return (this.player.isPlaying) ? this.icon.pause : this.icon.play
    },
    nowplayingUrlEncodedText: function() {
      return "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(
          this.player.title + " / " + this.player.artist +
          "\n" + "#nowplaying")
    },
  },
  created: function() {
    this.getMusicStatus()
  },
  methods: {
    setMusicStatus: function(data) {
      clearTimeout(this.fetchTimer)

      this.$store.commit('music/setPlayerState', data)
      this.volume = data.volume 

      if(data.isplaying){
        var interval = data.total - data.duration
        var timerId = setTimeout(this.getMusicStatus, (interval + 2) * 1000)
        console.log('setTimeout ', timerId)
        this.$store.commit('music/setFetchTimer', timerId)
      }
    },
    getMusicStatus: function () {
      Axios.get(`${this.apiUrl}/status`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    },
    toggle: function () {
      Axios.post(`${this.apiUrl}/toggle`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    },
    next: function () {
      Axios.post(`${this.apiUrl}/next`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    },
    prev: function () {
      Axios.post(`${this.apiUrl}/prev`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    },
    changeMode: function (mode) {
      Axios.post(`${this.apiUrl}/mode`, {
          'mode': mode,
          'state': !this.player[mode]
        }).then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
        .then(function(){
          this.$toast.show("success", this.toastOptionSuccess)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    },
    postMusicVolume: function () {
      Axios.post(`${this.apiUrl}/volume`, {
          volume: this.volume
      }).then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    },
    sleeptimer: function () {
      Axios.post(`${this.apiUrl}/sleeptimer/reset`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
        .then(function(){
          this.$toast.show("success", this.toastOptionSuccess)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    },
    sleeptimercancel: function () {
      Axios.post(`${this.apiUrl}/sleeptimer/cancel`)
        .then(function(res){
          this.setMusicStatus(res.data)
        }.bind(this))
        .then(function(){
          this.$toast.show("success", this.toastOptionSuccess)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    },
  }
}
</script>
