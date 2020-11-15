<template>
  <div style="display: inline-block; height: 80vh; overflow: auto">
    <li class="list-group">
      <div style="min-width: 180px; ">
        <button
          v-for="(entry, i) in entries"
          :key="index + i +  entry"
          class="list-group-item list-group-item-action"
          :class="{ active: isSelectedItem(entry) }"
          v-on:click="selectItem(entry)"
          href="#">
          {{ entry }}
        </button>
      </div>
    </li>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    entries: Array,
    index: Number,
  },
  computed: {
    ...mapState('musiclist', {
      data: state => state.data,
      path: state => state.path,
    })
  },
  methods: {
    selectItem: function(item) {
      const c = this.path.slice(0,this.index)
      c.push(item)
      this.$store.commit('musiclist/setPath', c)
    },
    isSelectedItem: function(item) {
      return this.path[this.index] == item
    }
  }
}
</script>
