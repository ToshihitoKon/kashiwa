import Vuex from 'vuex'

const musicStore = {
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
    },
    fetchStatusTimer: 0,
  },
  mutations:{
    setPlayerState (state, playerState){
      state.player = {
        title = playerState.title,
        artist = playerState.artist,
        isPlaying = playerState.isplaying,
        volume = playerState.volume,
        random = playerState.random,
        single = playerState.single,
        repeat = playerState.repeat,
        consume = playerState.consume,
        total = playerState.total,
        duration = playerState.duration,
      }
    },
  }
}

const store = new Vuex.Store({
  modules: {
    music: musicStore,
  }
})

export default store
