<template>
  <li style="display: inline-block">
    <div class="list-group" style="min-width: 300px">
      <button
        v-for="(key, entry) in entries"
        :key="entry"
        class="list-group-item list-group-item-action"
        :class="{ active:key.selected }"
        href="#">
        {{ entry }}
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    entries: Object
  },
}
</script>
