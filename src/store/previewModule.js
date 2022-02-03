export const previewModule = {
  state: () => ({
    family:
      {
        parentName: '',
        parentAge: '',
        children: []
      },
    families: []
  }),
  mutations: {
    createFamily (state, parentName, parentAge, children) {
      state.family.parentName = parentName
      state.family.parentAge = parentAge
      state.family.children.push(children)
      state.families.push(state.family)
    }
  }
}
