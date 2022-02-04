export const childrenModule = {
  state: () => ({
    children: [],
    availabilityAddButton: true
  }),
  getters: {

  },
  mutations: {
    textMutation (state, newText) {
      state.text = newText
    },
    setChildAge (state, { ind, myAge }) {
      try {
        state.children[ind].childAge = myAge
      } catch (e) {
        console.log('there is a undefined problem with age')
      }
    },
    setChildName (state, { i, myName }) {
      try {
        state.children[i].childName = myName
      } catch (e) {
        console.log('there is a undefined problem with name')
      }
    },
    addChildr (state) {
      const child = {
        childName: '',
        childAge: ''
      }
      if (state.children.length < 5) state.children.push(child)
    },
    needToDelete (state, target) {
      state.children = state.children.filter((c) => c !== target)
      // state.children.splice(index, 1)
    },
    getName (state, name) {
      state.parent.parentName = name
    },
    clearChildrenArea (state) {
      state.children.splice(0, state.children.length)
    }
  },
  namespaced: true
}
