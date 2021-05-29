<template>
  <div class="container">
    <el-button
      v-on:click="toggle_ziho"
      v-bind:type="[response.value == 1 ? '' : 'danger']"
      round>
      限界時報:{{ zihoStatus }}
    </el-button>
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
      toastOptionSuccess: state => state.toastOptionSuccess,
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
        .then(function(){
          this.$toast.show("success", this.toastOptionSuccess)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
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
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    }
  }
}

</script>
