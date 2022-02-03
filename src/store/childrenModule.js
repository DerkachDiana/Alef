export const childrenModule = {
  state: () => ({
    child: {
      childName: '',
      childAge: 0
    },
    children: [],
    childNames: [],
    childAges: [],
    id: 0
  }),
  getters: {

  },
  mutations: {
    textMutation (state, newText) {
      state.text = newText
    },
    setChildAge (state, childAge) {
    },
    setChildName (state, i, myName) {
      state.children[i].childName = myName
    },
    setChildAg (state, childAge) {
    },
    addChildr (state) {
      const child = {
        childInput: state.id,
        childName: '',
        childAge: 0
      }
      if (state.children.length < 5) state.children.push(child)
      state.id += 1
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
