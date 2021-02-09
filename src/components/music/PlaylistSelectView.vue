<template>
  <div class="card my-2 mx-auto">
    <div class="card-body">
      <h5 class="card-title">
        Playlist
      </h5>
      <ul class="list-group list-group-flush overflow-auto"
        style="max-height:300px">
        <li
          v-for="playlist in playlists"
          v-bind:key="playlist"
          class="list-group-item">
          <div class="float-left">
            <button
              v-on:click="selectPlaylist(playlist)"
              class="btn btn-sm btn-info">
              load
            </button>
          </div>
          <div class="float-left">
            <span class="ml-2">{{ playlist }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Axios from 'axios'

export default {
  data: function() {
    return {
      playlists: []
    }
  },
  mounted: function (){
    this.getPlaylists()
  },
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
      toastOptionSuccess: state => state.toastOptionSuccess,
      toastOptionError: state => state.toastOptionError,
    }),
  },
  methods: {
    getPlaylists: function() {
      Axios.get(`${this.apiUrl}/playlist/list`)
        .then(function(res){
          this.playlists = res.data
        }.bind(this))
        .catch(function(res){
          this.$toasted.show(res, this.toastOptionError)
        }.bind(this))
    },
    selectPlaylist: function(name) {
      Axios.post(`${this.apiUrl}/playlist/select`,{
          name
        })
        .then(function(res){
          this.$store.commit('queuelist/setList', res.data)
        }.bind(this))
        .then(function(){
          this.$toasted.show("success", this.toastOptionSuccess)
        }.bind(this))
        .catch(function(res){
          this.$toasted.show(res, this.toastOptionError)
        }.bind(this))

    }
  }
}
</script>
