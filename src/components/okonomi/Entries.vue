<template>
  <div class="card m-2">
    <div class="card-body">
      <ul class="nav nav-tabs">
        <li
          v-for="group in groupList"
          :key="group"
          class="nav-item">
          <button
            class="btn nav-link"
            v-on:click="selectGroup(group)"
            v-bind:class="[isSelectedGroup(group) ? 'active' : '']">
            {{ group }}
          </button>
        </li>
      </ul>
      <div class="tab-conntents">
        <ul class="list-group list-group-flush m-2">
          <li
            v-for="entry in entries"
            :key="entry.key"
            class="list-group-item">
            <div
              style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
              <span
                class="btn btn-light"
                v-on:click="setEntryform(selectedGroup,entry.key,entry.value)">編集</span>
              <span class="badge badge-info">
                {{ entry.key }}
              </span>
              {{ entry.value }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Axios from 'axios'

export default {
  data: function(){
    return {
      selectedGroup: '',
      groupList: [],
      entries: [],
    }
  },
  filters: {
  },
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
    }),
  },
  created: function() {
    this.fetchGroups()
  },
  methods: {
    selectGroup: function(group) {
      this.selectedGroup = group
      this.getGroupEntries(group)
    },
    isSelectedGroup: function(group) {
      return group === this.selectedGroup
    },
    fetchGroups: function() {
      Axios.get(`${this.apiUrl}/okonomi/group/list`)
        .then(function(res){
          this.groupList = res.data
        }.bind(this))
    },
    getGroupEntries: function(group){
      Axios.get(`${this.apiUrl}/okonomi/group/get`, {
          params: {
            group: group
          }
        })
        .then(function(res){
          this.entries = res.data
        }.bind(this))
    },
    setEntryform: function(group,key,value){
      this.$store.commit('okonomi/setEntryform', {key: key, value: value, group:group})
    }
  }
}
</script>
