<template>
  <div class="container-sm">
    <div class="">
      ひだまり作成中
      部屋の電気とかモニタリングとか
    </div>
    <div
      @click="lightAPI('switch')"
      class="btn btn-primary m-2">
      オン/オフ
    </div>
    <div
      @click="lightAPI('warm')"
      class="btn btn-primary m-2">
      暖色
    </div>
    <div
      @click="lightAPI('cool')"
      class="btn btn-primary m-2">
      寒色
    </div>
    <div
      @click="lightAPI('bright')"
      class="btn btn-primary m-2">
      明
    </div>
    <div
      @click="lightAPI('dim')"
      class="btn btn-primary m-2">
      暗
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Axios from 'axios'

export default {
  data: function(){
    return {}
  },
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
      toastOptionSuccess: state => state.toastOptionSuccess,
      toastOptionError: state => state.toastOptionError,
    })
  },
  methods: {
    lightAPI: function(endpoint) {
      Axios.post(`${this.apiUrl}/hidamari/light/${endpoint}`, {})
        .then(function(res){
          this.$toast.show("success " + res.data.rate_remaining, this.toastOptionSuccess)
        }.bind(this))
        .catch(function(res){
          this.$toast.show("failed " + res.data.rate_reset, this.toastOptionError)
        }.bind(this))
    }
  }
}
</script>
