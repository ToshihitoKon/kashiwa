<template>
  <div class="mt-2">
    <Ziho />
    <Entries />
    <NewEntryForm />
  </div>
</template>

<script>
import Entries from '@/components/okonomi/Entries.vue'
import NewEntryForm from '@/components/okonomi/NewEntryForm.vue'
import Ziho from '@/components/okonomi/Ziho.vue'

export default {
  components: {
    Ziho,
    Entries,
    NewEntryForm
  }
}
</script>
