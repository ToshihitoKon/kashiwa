import Vuex from 'vuex'

const musicStore = {
  namespaced: true,
  state: {
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
  },
  mutations:{
    setPlayerState (state, playerState){
      state.title = playerState.title,
      state.artist = playerState.artist,
      state.isPlaying = playerState.isplaying,
      state.volume = playerState.volume,
      state.random = playerState.random,
      state.single = playerState.single,
      state.repeat = playerState.repeat,
      state.consume = playerState.consume,
      state.total = playerState.total,
      state.duration = playerState.duration,
    },
  }
}

const store = new Vuex.Store({
  modules: {
    music: musicStore,
  }
})

export default store
