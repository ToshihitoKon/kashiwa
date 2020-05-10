<template>
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
    </div>
    <ul class="list-group list-group-flush">
      <li
        v-for="song in queuelist"
        v-bind:key="song.title"
        class="list-group-item my-1">
        <button class="btn btn-sm btn-info">
          <font-awesome-icon :icon="icon.play" />
        </button>
        <span class="ml-2">{{ song.position }}</span>
        <span class="ml-2">{{ song.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Axios from 'axios'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  data: function() {
    return {
      icon: {
        play: faPlay
      },
    }
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    ...mapGetters('queuelist', {
      queuelist: 'getSortedList'
    }),
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
    }),
  },
  methods: {
    getMusicQueueList: function () {
      Axios.get(`${this.apiUrl}/playlist/current`)
        .then(function(res){
          this.$store.commit('queuelist/setList', res.data)
        }.bind(this))
    }
  }
}
</script>
