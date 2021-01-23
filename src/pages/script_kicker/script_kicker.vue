<template>
  <div class="container-sm">
    <pre>
      作成中
      好きなshellscriptを起動するボタン
    </pre>
    <form>
      <div class="form-group">
        <input type="text" v-model="formtext">
      </div>
    </form>
    <div
      v-on:click="kick"
      class="btn btn-light">
      押せ！
    </div>
    {{ result }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Axios from 'axios'

export default {
  components: {
  },
  data: function(){
    return {
      formtext: "" ,
      result: ""
    }
  },
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
    })
  },
  methods: {
    kick: function() {
      Axios.post(`${this.apiUrl}/script_kicker/kick`, {
          target: this.formtext
        })
        .then(function(){
          this.result = this.formtext + "ええやん"
        }.bind(this))
    }
  }
}
</script>
