// vue will be gotten from the install function
let _Vue

export class Store {
  constructor (state) {
    // initialize state in a vue instance so that it will be binded
    this._vm = new _Vue({
      data () {
        return {
          state
        }
      }
    })
  }

  /**
   * get
   * @param {String} key - the key inside the state
   * @param {*} defaultValue - the value to return if key is not accessible in the state object
   * @returns {*} the state object
   */
  get (key, defaultValue) {
    return this._vm.state[key] || defaultValue
  }

  /**
   * set
   * @param {String} key - the key inside the state
   * @param {*} newValue - the value to be added/mutated in the state object
   * @returns {*} the state object
   */
  set (key, newValue) {
    _Vue.set(this._vm.state, key, newValue)
  }
}

export function install (Vue) {
  // make vue available inside the all file
  _Vue = Vue

  // make it available in each instance
  Vue.mixin({
    beforeCreate () {
      const options = this.$options
      // get the store from the vue instance
      if (options.store) {
        this.$store = options.store
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store
      }
    }
  })
}
