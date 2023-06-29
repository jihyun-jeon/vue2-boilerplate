const moduleA = {
  state: () => ({
    number: 1,
  }),
  mutations: {
    increment(state) {
      // `state` is the local module state
      state.number++
    },
  },

  getters: {
    doubleNumber(state) {
      return state.number * 2
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
