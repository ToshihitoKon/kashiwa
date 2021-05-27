<template>
  <div class="container mt-4 w-75">
    <pre>
      作成中
      持ってる音源一覧が出ます
      キュー追加、プレイリスト追加、タグ編集、検索など
    </pre>
    <div>
      <button
        v-on:click="queueing(path)"
        class="btn btn-light">
        キューに入れる
      </button>
      {{ path }}
    </div>
    <div class=container>
      <div class="row" style="text-align">
        <ul style="overflow-x: auto; white-space: nowrap">

          <PlaylistItem 
            v-for="(entry,index) in list"
            :key="index + entry"
            :entries="entry"
            :index="index"
            />
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import PlaylistItem from '@/components/music/PlaylistItem'
import { mapState, mapGetters } from 'vuex'
import Axios from 'axios'

export default {
  components: {
    PlaylistItem
  },
  mounted: function () {
    this.fetchAll()
  },
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
      toastOptionSuccess: state => state.toastOptionSuccess,
      toastOptionError: state => state.toastOptionError,
    }),
    ...mapState('musiclist', {
      data: state => state.data,
      path: state => state.path,
    }),
    ...mapGetters('musiclist', {
      list: 'getCurrentList',
      path: 'getCurrentPath'
    })
  },
  methods: {
    fetchAll: function () {
      Axios.get(`${this.apiUrl}/search/fetchall`)
        .then(function(res){
            this.$store.commit('musiclist/setData', res.data)
        }.bind(this))
        .then(function(){
          this.$toast.show("success", this.toastOptionSuccess)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    },
    queueing: function (path) {
      Axios.post(`${this.apiUrl}/queue/add`, {"path": path})
        .then(function(res){
            this.$store.commit('musiclist/setList', res.data)
        }.bind(this))
        .then(function(){
          this.$toast.show("success", this.toastOptionSuccess)
        }.bind(this))
        .catch(function(res){
          this.$toast.show(res, this.toastOptionError)
        }.bind(this))
    }
  }
}
</script>
