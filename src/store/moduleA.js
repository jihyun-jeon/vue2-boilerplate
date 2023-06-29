const moduleA = {
  state: () => ({
    count: 0,
  }),
  mutations: {
    increment(state) {
      // `state` is the local module state
      state.count++
    },
  },

  getters: {
    doubleCount(state) {
      return state.count * 2
    },
  },
  actions: {},
}

// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
//   plugins: []
// })
