<template>
  <div class="container-sm">
    <pre>
      作成中
      デスクトップの背景にする画像を置いて、rsyncでまとめて持ってこれる場所
      一覧をバーっと並べたい、のためにthumbnail生成したい
      画像にタグ付けして整理したい
    </pre>
    <div
      v-on:click="getFiles"
      class="btn btn-light">
      押せ！
    </div>
    <div
      v-for="(files_row,index) in files_split_row"
      :key="index + files_row"
      class="row no-gutters">
      <div
        v-for="(file, i) in files_row"
        :key="index + i + file"
        class="col-sm">
        <img
          v-if="file != ''"
          class="img-fluid"
          :src="image_path(file)"
          alt="" />
        <div
          class="text-center"
          >
          <span class="badge badge-pill badge-secondary">{{ file }}</span>
        </div>
      </div>
    </div>
    <Uploader />
  </div>
</template>

<script>
import Uploader from '@/components/tako/Uploader.vue'
import _ from 'lodash'
import { mapState } from 'vuex'
import Axios from 'axios'

export default {
  components: {
    Uploader
  },
  data: function(){
    return {
      columns: 3,
      files: ['']
    }
  },
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
      toastOptionError: state => state.toastOptionError,
    }),
    files_split_row: function() {
      const chunked = _.chunk(this.files, this.columns)
      const lack = this.columns - chunked[chunked.length-1].length 
      for (var i = 0; i < lack; i++) {
        chunked[chunked.length-1].push('')
      }
      return chunked
    }
  },
  methods: {
    getFiles: function() {
      Axios.get(`${this.apiUrl}/tako/list`)
        .then(function(res){
          this.files = res.data
        }.bind(this))
        .catch(function(res){
          this.$toasted.show(res, this.toastOptionError)
        }.bind(this))
    },
    image_path: function(filename){
      return [this.apiUrl,'tako','data','get',filename].join('/')
    }
  }
}
</script>
