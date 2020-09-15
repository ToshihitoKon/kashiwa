<template>
  <div class="container mt-4 w-75">
    <pre>
      作成中
      持ってる音源一覧が出ます
      キュー追加、プレイリスト追加、タグ編集、検索など
    </pre>
    <div class="btn btn-light" v-on:click="fetchAll">
      押せ！
    </div>
    <div class=container>
      <div class="row">
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
    }),
    ...mapState('musiclist', {
      data: state => state.data,
      path: state => state.path,
    }),
    ...mapGetters('musiclist', {
      list: 'getCurrentList'
    })
  },
  methods: {
    fetchAll: function () {
      Axios.get(`${this.apiUrl}/search/fetchall`)
        .then(function(res){
            this.$store.commit('musiclist/setData', res.data)
        }.bind(this))
    }
  }
}
</script>
