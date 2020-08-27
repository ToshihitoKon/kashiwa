<template>
  <div class="container w-75">
    <pre>
      作成中
      デスクトップの背景にする画像を置いて、rsyncでまとめて持ってこれる場所
      一覧をバーっと並べたい、のためにthumbnail生成したい
      画像にタグ付けして整理したい
    </pre>
    <Uploader />
  </div>
</template>

<script>
import Uploader from '@/components/tako/Uploader.vue'

export default {
  components: {
    Uploader
  }
}
</script>
