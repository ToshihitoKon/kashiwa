<template>
  <div class="text-light">
    <div class="text-center">
      <p><strong>{{ player.title }}</strong></p>
    </div>
    <div class="text-center mt-2">
      <button
        class="btn btn-info mx-1"
        v-on:click="prev">
        <span class="material-icons">skip_previous</span>
      </button>
      <button
        class="btn btn-info mx-1"
        v-on:click="toggle">
        <span class="material-icons">play_arrow</span>
      </button>
      <button
        class="btn btn-info mx-1"
        v-on:click="next">
        <span class="material-icons">skip_next</span>
      </button>
      <button
        class="btn btn-sm mx-1"
        unselectable=on
        v-bind:class="[player.sleeptimer? 'btn-info': 'btn-outline-info']">
        <span class="material-icons">alarm_on</span>
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
      toastOptionError: state => state.toastOptionError,
    }),
    togglePlay: function() {
      return (this.player.isPlaying) ? this.icon.pause : this.icon.play
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
  }
}
</script>
