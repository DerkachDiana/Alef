export const parentModule = {
  state: () => ({
    parent: {
      parentName: '',
      parentAge: 0
    },
    parents: [],
    textFromInput: ''
  }),
  mutations: {
    setParentName (state, parentName, index) {
      state.parent.parentName = parentName
    },
    setParentAge (state, parentAge) {
      state.parent.parentAge = parentAge
    },
    clearParentArea (state) {
      state.parent.parentAge = ''
      state.parent.parentName = ''
    }
  },
  namespaced: true
}
