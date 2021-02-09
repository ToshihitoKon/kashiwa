import Vue from 'vue'
import Vuex from 'vuex'

const constants = {
  namespaced: true,
  state: {
    apiUrl: process.env.VUE_APP_KASHIWA_API_URL,
    toastOptionSuccess: {
      position: 'bottom-center',
      duration: 1000,
      type: 'success',
      theme: 'bubble',
    },
    toastOptionError: {
      position: 'bottom-center',
      duration: 4000,
      type: 'error',
      theme: 'bubble',
    },
  }
}

const music = {
  namespaced: true,
  state: {
    player: {
      title: 'loading...',
      isSleepTimer: false,
      total: 0,
      duration: 0,
      playlistPosition: 0,
      volume: 0,
      isPlaying: false,
      random: false,
      single: false,
      repeat: false,
      consume: false,
      sleeptimer: false,
    },
    fetchTimer: 0,
  },
  mutations:{
    setPlayerState (state, playerState){
      state.player = {
        title: playerState.title,
        artist: playerState.artist,
        isPlaying: playerState.isplaying,
        volume: playerState.volume,
        random: playerState.random,
        single: playerState.single,
        repeat: playerState.repeat,
        consume: playerState.consume,
        total: playerState.total,
        duration: playerState.duration,
        playlistPosition: playerState.playlist_position,
        sleeptimer: playerState.sleeptimer,
      }
    },
    setFetchTimer (state, timerId){
      state.fetchTimer = timerId
    }
  }
}

const queuelist = {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    setList (state, list){
      state.list = list
    }
  },
  getters: {
    getSortedList: state => {
      return state.list.sort((a,b)=>{b.position - a.position})
    }
  }
}

const musiclist = {
  namespaced: true,
  state: {
    data: {"loading":{}},
    path: [],
  },
  mutations: {
    setData (state, data){
      state.data = data
    },
    setPath (state, path){
      state.path = path
    }
  },
  getters: {
    getCurrentList: state => {
      var itr = state.data
      const retlist = [Object.keys(itr)]

      state.path.some( item => {
        var list = []
        if (! (item in itr) ) {
          return true
        }

        list = list.concat( Object.keys(itr[item]).filter(x => x != '_files') )
        itr = itr[item]
        if ("_files" in itr) {
          list = list.concat( Object.values(itr['_files']) )
        }
        // 先読み
        retlist.push(list)
      })
      return retlist
    },
    getCurrentPath: state => {
      return state.path.join('/')
    }
  }
}

const okonomi = {
  namespaced: true,
  state: {
    entryform: {
      group: "",
      key: "",
      value: ""
    }
  },
  mutations: {
    setEntryform (state, data){
      state.entryform = data
    },
  }
}


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    constants,
    music,
    queuelist,
    musiclist,
    okonomi,
  }
})

export default store
