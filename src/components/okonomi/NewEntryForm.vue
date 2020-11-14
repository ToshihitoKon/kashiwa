<template>
  <div class="card m-2">
    <div class="card-body">
      <div class="form-group">
        <label for="formGroup">group</label>
        <input
          v-model="group"
          class="form-text"
          id="formGroup" type="text">
      </div>
      <div class="form-group">
        <label for="formKey">key</label>
        <input
          v-model="key"
          class="form-text"
          id="formKey" type="text">
      </div>
      <div class="form-group">
        <label for="formValue">value</label>
        <input
          v-model="value"
          class="form-text"
          id="formValue" type="text">
      </div>
      <button
        class="btn"
        v-on:click="regist">
          regist
        </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Axios from 'axios'

export default {
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
    }),
    ...mapState('okonomi', {
      entryform: state => state.entryform,
    }),
    group: {
      get () {
        return this.entryform.group
      },
      set (value) {
        var form = this.entryform
        form.group = value
        this.$store.commit('okonomi/setEntryform', form)
      }
    },
    key: {
      get () {
        return this.entryform.key
      },
      set (value) {
        var form = this.entryform
        form.key = value
        this.$store.commit('okonomi/setEntryform', form)
      }
    },
    value: {
      get () {
        return this.entryform.value
      },
      set (value) {
        var form = this.entryform
        form.value = value
        this.$store.commit('okonomi/setEntryform', form)
      }
    }
  },
  methods: {
    regist: function() {
      Axios.post(`${this.apiUrl}/okonomi/set`, {
          key: this.key,
          value: this.value,
          group: this.group
        })
        .then(function(){
          this.key = ''
          this.value = ''
        }.bind(this))
    }
  }
}

</script>
