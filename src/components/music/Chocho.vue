<template>
  <div class="card my-2 mx-auto">
    <button
      class="btn btn-success"
      v-on:click="chocho">
      ひつじをかぞえるちょうちょ
    </button>
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
    }),
  },
  methods: {
    chocho: function() {
      Axios.post(`${this.apiUrl}/playlist/select`,{
          name: "chocho"
        })
        .then(function(res){
          this.$store.commit('queuelist/setList', res.data)
        }.bind(this))

    }
  }
}
</script>
