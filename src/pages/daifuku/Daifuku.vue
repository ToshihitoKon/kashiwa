<template>
  <div class="container mt-4 w-75">
    <div class="card my-2">
      <div class="card-body">
        <h6 class="card-title">daifuku</h6>
        <button
          class="btn btn-light"
          v-on:click="mochi_pull">
            mochi pull
        </button>
        <button
          class="btn btn-light"
          v-on:click="kashiwa_pull">
            kashiwa pull
        </button>
      </div>
    </div>
    <div class="card my-2">
      <div class="card-body">
        <h6 class="card-title">result</h6>
        <div class="card my-2">
          <div class="card-body">
            <p class="card-title">status</p>
            {{result.exit_status}}
          </div>
        </div>
        <div class="card my-2">
          <div class="card-body">
            <p class="card-title">stdout</p>
            {{result.stdout}}
          </div>
        </div>
        <div class="card my-2">
          <div class="card-body">
            <p class="card-title">stderr</p>
            {{result.stderr}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  data: function() {
    return {
      apiUrl: 'http://192.168.10.101:5000',
      result: {
        exit_status: "",
        stdout: "",
        stderr: ""
      }
    }
  },
  methods: {
    set_result: function (data) {
      this.result = {
        exit_status: data.status,
        stdout: data.stdout,
        stderr: data.stderr,
      } 
    },
    mochi_pull: function () {
      Axios.post(`${this.apiUrl}/daifuku/mochi/pull`)
        .then(function(res){
          this.set_result(res.data)
        }.bind(this)
      )
    },
    kashiwa_pull: function () {
      Axios.post(`${this.apiUrl}/daifuku/kashiwa/pull`)
        .then(function(res){
          this.set_result(res.data)
        }.bind(this)
      )
    }
  }
}
</script>
