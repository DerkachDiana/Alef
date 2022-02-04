export const parentModule = {
  state: () => ({
    parent: {
      parentName: '',
      parentAge: ''
    },
    parents: [],
    textFromInput: ''
  }),
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
