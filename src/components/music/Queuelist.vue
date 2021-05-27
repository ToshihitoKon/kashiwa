<template>
  <div class="card my-2 mx-auto">
    <div class="card-body mx-2">
      <h5 class="card-title">queue list</h5>
      <div>
        <button
          class="btn btn-light"
          v-on:click="getMusicQueueList">
          load
        </button>
        <button
          class="btn btn-light"
          v-on:click="crop">
          crop
        </button>
      </div>
      <ul class="list-group list-group-flush overflow-auto"
        style="height:300px">
        <li
          v-for="song in queuelist"
          v-bind:key="song.position + song.title"
          class="list-group-item">
          <div class="float-left">
            <span
              v-if="song.position === playpos"
              class="spinner-border">
              <span class="sr-only">Playing</span>
            </span>
            <button
              v-else
              v-on:click="playPosition(song.position)"
              class="btn btn-sm btn-info">
              <span class="material-icons">face</span>
            </button>
          </div>
          <div class="float-left h-100">
            <span class="ml-2">{{ song.position }}</span>
            <span class="ml-2">{{ song.title }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Axios from 'axios'

export default {
  data: function() {
    return {
    }
  },
  computed: {
    ...mapGetters('queuelist', {
      queuelist: 'getSortedList'
    }),
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
      toastOptionSuccess: state => state.toastOptionSuccess,
      toastOptionError: state => state.toastOptionError,
    }),
    ...mapState('music', {
      playpos: state => state.player.playlistPosition,
    }),
  },
  methods: {
    getMusicQueueList: function () {
      Axios.get(`${this.apiUrl}/playlist/current`)
        .then(function(res){
          this.$store.commit('queuelist/setList', res.data)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    },
    crop: function(){
      Axios.post(`${this.apiUrl}/crop`)
        .then(function(res){
          this.$store.commit('queuelist/setList', res.data)
        }.bind(this))
        .then(function(){
          this.$toast.show("success", this.toastOptionSuccess)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    },
    playPosition: function(pos){
      Axios.post(`${this.apiUrl}/play/position`, {
          position: pos,
        })
        .then(function(res){
          this.$store.commit('music/setPlayerState', res.data)
          this.getMusicQueueList()
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    },
  }
}
</script>
