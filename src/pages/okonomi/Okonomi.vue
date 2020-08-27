<template>
  <div class="mt-2">
    <button
      v-on:click="toggle_ziho"
      class="btn btn-light">
      toggle genkai
    </button>
    {{ zihouStatus }}
    <Entries />
    <NewEntryForm />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Axios from 'axios'
import Entries from '@/components/okonomi/Entries.vue'
import NewEntryForm from '@/components/okonomi/NewEntryForm.vue'

export default {
  components: {
    Entries,
    NewEntryForm
  },
  data: function(){
    return {
      response: {}
    }
  },
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
    }),
    zihouStatus: function(){
      return (this.response.value == 0 )?'有効':'無効'
    }
  },
  created: function() {
    this.get_ziho()
  },
  methods: {
    toggle_ziho: function(){
      Axios.post(`${this.apiUrl}/okonomi/toggle`,{
          key: "ZIHOU"
        })
        .then(function(res){
          this.response = res.data
        }.bind(this))
    },
    get_ziho: function(){
      Axios.get(`${this.apiUrl}/okonomi/get`,{
        params: {
            key: "ZIHOU"
          }
        })
        .then(function(res){
          this.response = res.data[0]
        }.bind(this))
    }
  }
}
</script>
