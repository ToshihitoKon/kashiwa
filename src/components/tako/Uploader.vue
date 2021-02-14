<template>
  <div>
    <input type="file"
      @change="changeFile"
      name="file"
      accept="image/png,image/jpeg"
      multiple
      required>
    <span class="btn btn-light" @click="uploadAll">uplaodAll</span>
    <div>
      <div
        v-for="file in files"
        :key="file.name">
        <span
          class="btn btn-light"
          @click="uploadFile(file)">
          uplaod
        </span>
        <span>
          {{ file.name }}
        </span>
        <img
          :src="imagePreviewUrl(file)"
          alt=""
          height="100px">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Axios from 'axios'

export default {
  data: function() {
    return {
      files: [],
    }
  },
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
      toastOptionSuccess: state => state.toastOptionSuccess,
      toastOptionError: state => state.toastOptionError,
    }),
    path: function() {
      return `${this.apiUrl}/tako/data/upload`
    }
  },
  filters: {
  },
  methods: {
    imagePreviewUrl: function(file) {
      return window.URL.createObjectURL(file)
    },
    changeFile: function(e) {
      var fileList = []
      for(var i=0; i < e.target.files.length; i++){
        fileList.push(e.target.files.item(i))
      }
      this.files = fileList
    },
    uploadFile: function(file) {
      var params = new FormData()
      params.append('file', file)
      Axios.post(`${this.apiUrl}/tako/data/upload`, params)
        .then(function(){
          this.$toasted.show("success", this.toastOptionSuccess)
        }.bind(this))
        .catch(function(res){
          this.$toasted.show(res, this.toastOptionError)
        }.bind(this))
    },
    uploadAll: function() {
      var files = this.files
      files.forEach(file=>{
        this.uploadFile(file)
      })
      // とりあえず失敗考えずにフォームクリア
      this.files = []
    }
  }
}
</script>
