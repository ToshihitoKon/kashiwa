<template>
  <form
    v-bind:action="path"
    method="post"
    enctype="multipart/form-data"
  >
    <input type="file" name="uploadFile">
    <input type="submit" value="Upload">
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function() {
    return {
      actionPath: ''
    }
  },
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
    }),
    path: function() {
      return `${this.apiUrl}/tako/data/upload`
    }
  }
}
</script>
