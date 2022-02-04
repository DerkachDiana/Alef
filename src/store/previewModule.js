export const previewModule = {
  state: () => ({
    families: []
  }),
  mutations: {
    createFamily (state, { parentName, parentAge, children }) {
      const family = {
        parentName: '',
        parentAge: 0,
        children: []
      }
      children.forEach(kinder => {
        const child = {
          childName: '',
          childAge: 0
        }
        child.childName = kinder.childName
        child.childAge = kinder.childAge
        family.children.push(child)
      })
      family.parentName = parentName
      family.parentAge = parentAge
      state.families.push(family)
      alert('Данные успешно внесены!')
    }
  },
  namespace: true
}
