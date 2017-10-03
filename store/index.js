import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    Entries: [],
  },
  mutations: {
    SetEntries (state, entries) {
      state.Entries = entries
    }
  }
})

export default store

