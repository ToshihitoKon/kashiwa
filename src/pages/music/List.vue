<template>
  <div class="container mt-4 w-75">
    <pre>
      作成中
      持ってる音源一覧が出ます
      キュー追加、プレイリスト追加、タグ編集、検索など
    </pre>
    <div class=container>
      <div class="row">
        <ul style="overflow-x: auto; white-space: nowrap">

          <PlaylistItem 
            v-for="entry in entries"
            :key="entry"
            :entries="entry"
            />

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistItem from '@/components/music/PlaylistItem'

export default {
  components: {
    PlaylistItem
  },
  data: function() {
    return {
      entries: [
        {
          "夏川椎菜":{
            selected: true
          },
          "DIALOGUE+":{},
          "THE_IDOLM@STER":{}
        },
        {
          "ログライン":{
            selected: true
          },
          "Ep01":{}
        },
        {
          "パレイド":{},
          "ステテクレバー":{},
          "ナイモノバカリ":{},
          "イエローフラッグ":{},
          "Gravity":{},
          "キミトグライド":{},
          "フワリ、コロリ、カラン、コロン":{},
          "Daisy Days":{},
          "チアミーチアユー":{},
          "シマエバイイ":{},
          "ラブリルブラ":{},
          "グレープフルーツムーン":{},
          "ファーストプロット":{}
        }
      ]
    }
  }
}
</script>
