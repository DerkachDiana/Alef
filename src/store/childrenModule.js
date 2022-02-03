export const childrenModule = {
  state: () => ({
    child: {
      childName: '',
      childAge: 0
    },
    children: []
  }),
  getters: {

  },
  mutations: {
    setChildName (state, childName) {
      state.child.childName = childName
    },
    setChildAge (state, childAge) {
      state.child.childAge = childAge
    },
    addChild (state) {
      if (state.children.length < 5) state.children.push(state.child)
    },
    needToDelete (state, index) {
      state.children.splice(index, 1)
    },
    getName (state, name) {
      state.parent.parentName = name
    }
  },
  namespaced: true
}
