import { createStore } from 'vuex'
import { childrenModule } from './childrenModule'
import { parentModule } from './parentModule'

export default createStore({
  modules: {
    children: childrenModule,
    parent: parentModule
  }
})
