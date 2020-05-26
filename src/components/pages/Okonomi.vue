<template>
  <div class="mt-2">
    <button
      v-on:click="toggle_ziho"
      class="btn btn-light">
      toggle genkai
    </button>
    {{ zihouStatus }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Axios from 'axios'

export default {
  data: function(){
    return {
      response: {}
    }
  },
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
    }),
    zihouStatus: function(){
      return (this.response.value == 0 )?'有効':'無効'
    }
  },
  methods: {
    toggle_ziho: function(){
      Axios.post(`${this.apiUrl}/okonomi/toggle`,{
          key: "ZIHOU"
        })
        .then(function(res){
          this.response = res.data
        }.bind(this))

    }
  }
}
</script>
