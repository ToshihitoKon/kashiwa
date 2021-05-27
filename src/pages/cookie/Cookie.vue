<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-header">
        <span>貯蔵計算</span>
      </div>
      <div class="card-body">
        <div>
          <span>CpS</span>
          <input
            type="number"
            step="1"
            v-model="cps" />
          <button
            v-on:click="cpsSevenTimes">
              x7
          </button>
          <button
            v-on:click="cpsSevenDivide">
              x1/7
          </button>
        </div>
        <div>
          <span>Frenzy中</span>
          <input
            type="checkbox"
            v-model="frenzied">
        </div>
        <div>
          <div>
            <span>最低貯クッキー</span>
          </div>
          <div>
            <span> {{ fix(obj) }}</span>
          </div>
        </div>
        <div>
          <div>
            <span>最大FrenzyLucky</span>
          </div>
          <div>
            <span>{{ fix(canget) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        <span>セーブデータ</span>
      </div>
      <div class="card-body">

        <div>
          <input
            type="textarea"
            v-model="savedata"
            style="width:100%">
        </div>
        <div>
          <div>
          version: {{ currentSavedata.version }}
          </div>
          <div>
          保存日: {{ toJST(currentSavedata.exportedAt) }}
          </div>
          <div>
          最終転生: {{ toJST(currentSavedata.lastAscendedAt) }}
          </div>
          <div>
          開始日: {{ toJST(currentSavedata.startedAt) }}
          </div>
        </div>
        <div>
          <button
            v-on:click="uploadSavedata"
            >upload</button>
          <button
            v-on:click="clearSavedataForm"
            >clear</button>
        </div>
        <div class="mt-2">
          stored data
        </div>
        <input
          type="textarea"
          readonly
          id="stored-savedata"
          v-model="stored"
          style="width:100%">
          <div>
          保存日: {{ toJST(storedSavedata.exportedAt) }}
          </div>
        <button
          v-on:click="copyClipboardStoredSavedata"
          >copy</button>
        <button
          v-on:click="fetchStoredSavedata"
          >reload</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Axios from 'axios'

export default {
  data: function() {
    return {
      cps: '', 
      frenzied: false,
      savedata: '',
      stored: '',
    }
  },
  computed: {
    ...mapState('constants', {
      apiUrl: state => state.apiUrl,
      toastOptionError: state => state.toastOptionError,
    }),
    canget: function() {
      var cps = this.cps
      if (!this.frenzied) {
        cps *= 7
      }
      return cps * 900 + 13
    },
    obj: function() {
      var expect = this.canget / 15 * 100
      return expect
    },
    currentSavedata: function() {
      return this.parseSavedata(this.savedata)
    },
    storedSavedata: function() {
      return this.parseSavedata(this.stored)
    }
  },
  mounted() {
    if (localStorage.cps) {
      this.cps = localStorage.cps
    }
  },
  watch: {
    cps(newCps) {
      localStorage.cps = newCps
    }
  },
  methods: {
    fix: function(v) {
      return v.toLocaleString()
    },
    toJST: function(v){
      if (typeof v !== "object") {
        return ''
      }
      return v.toLocaleString({timeZone: 'Asia/Tokyo'})
    },
    cpsSevenTimes: function() {
      const cps = this.cps
      this.cps = round(cps * 7)
      this.frenzied = true
    },
    cpsSevenDivide: function() {
      const cps = this.cps
      this.cps = round(cps / 7)
      this.frenzied = false
    },
    parseSavedata: function(savedata){
      const purebase64 = decodeURIComponent(savedata)
      const decoded = atob(purebase64.replace("!END!",""))
      const splited = decoded.split(";")
      return {
        version: splited[0].split("||")[0],
        lastAscendedAt: new Date(Number(splited[0].split("||")[1])),
        startedAt: new Date(Number(splited[1])),
        exportedAt: new Date(Number(splited[2])),
        bakeryName: splited[3]
      }
    },
    uploadSavedata: function() {
      if(this.currentSavedata.exportedAt.toString() === "Invalid Date"){ return }
      Axios.post(`${this.apiUrl}/okonomi/set`, {
          key: 'COOKIE_SAVEDATA',
          value: this.savedata,
          group: 'Cookie'
        })
        .then(function(res){
          this.stored = res.data.value
          this.clearSavedataForm()
        }.bind(this))
        .catch(function(res){
          this.$toasted.show(res, this.toastOptionError)
        }.bind(this))
    },
    clearSavedataForm: function() {
      this.savedata = ''
    },
    fetchStoredSavedata: function(){
      Axios.get(`${this.apiUrl}/okonomi/get`, {
          params: {
            key: 'COOKIE_SAVEDATA',
          }
        })
        .then(function(res){
          this.stored = res.data[0].value
        }.bind(this))
        .catch(function(res){
          this.$toasted.show(res, this.toastOptionError)
        }.bind(this))
    },
    copyClipboardStoredSavedata: function() {
      const textarea = document.getElementById('stored-savedata')
      textarea.select();
      document.execCommand("copy");
    }
  }
}

function round(v){
  return Math.round(v*1000) / 1000
}

</script>
