# z-store

## How To

```js
// src/main.js
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')


// src/store
import zStore from 'z-store'
import Vue from 'vue'

Vue.use(zStore)

export default new zStore.Store({
  test: 'Hello, World'
})

```

```html
<!-- MyComponent.vue -->
<template>
  <div>
    <p>
      {{ test }}
    </p>
    <button @click.prevent="updateTest">
      update
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    test () {
      return this.$store.get('test', 'Nothing')
    }
  },
  methods: {
    updateTest() {
      this.$store.set('test', 'success')
    }
  }
}
</script>
```

### $store.get(key [, default])

* `key` is the key where the data is to be gotten in the state
* `default` is a value to be returned if the value does not exist

### $store.set(key, value)

* `key` is the key where the data has to be written in the state
* `value` is the value to write in the store


## Contribute

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
