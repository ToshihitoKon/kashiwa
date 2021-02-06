<template>
  <div class="container">
    <button
      v-on:click="toggle_ziho"
      class="btn btn-light">
      限界時報
    </button>
    <span
      class="badge"
      v-bind:class="[response.value == 1 ? 'badge-dark' : 'badge-danger']">
      {{ zihoStatus }}
    </span>
  </div>
</template>

<script>
import Axios from 'axios'
import { mapState } from 'vuex'

export default {
  data: function () {
    return {
      response: {}
    }
    
  },
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
      toastOptionError: state => state.toastOptionError,
    }),
    zihoStatus: function(){
      return (this.response.value == 0 )?'有効':'無効'
    }
  },
  created: function() {
    this.get_ziho()
  },
  methods: {
    toggle_ziho: function(){
      Axios.post(`${this.apiUrl}/okonomi/toggle`,{
          key: "ZIHOU"
        })
        .then(function(res){
          this.response = res.data
        }.bind(this))
        .catch(function(res){
          this.$toasted.show(res, this.toastOptionError)
        }.bind(this))
    },
    get_ziho: function(){
      Axios.get(`${this.apiUrl}/okonomi/get`,{
        params: {
            key: "ZIHOU"
          }
        })
        .then(function(res){
          this.response = res.data[0]
        }.bind(this))
        .catch(function(res){
          this.$toasted.show(res, this.toastOptionError)
        }.bind(this))
    }
  }
}

</script>
