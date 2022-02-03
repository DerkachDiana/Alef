export const parentModule = {
  state: () => ({
    parent: {
      parentName: '',
      parentAge: 0
    },
    parents: [],
    textFromInput: ''
  }),
  getters: {
  },
  mutations: {
    setParentName (state, parentName) {
      state.parent.parentName = parentName
    },
    setParentAge (state, parentAge) {
      state.parent.parentAge = parentAge
    }
  },
  namespaced: true
}
