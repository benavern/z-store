import zStore from '../z-store'
import Vue from 'vue'

Vue.use(zStore)

export default new zStore.Store({
  test: 'Hello, World'
})
