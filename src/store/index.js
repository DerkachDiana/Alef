import { createStore } from 'vuex'
import { childrenModule } from './childrenModule'
import { parentModule } from './parentModule'
import { previewModule } from './previewModule'

export default createStore({
  modules: {
    children: childrenModule,
    parent: parentModule,
    preview: previewModule
  }
})
