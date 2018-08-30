<template>
  <div class="hello">
    <button @click.prevent="updateTest">
      {{ test }}
    </button>
    <button @click.prevent="updateNoKey">
      {{ nokey }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    test () {
      return this.$store.get('test', 'nothing here...')
    },
    nokey () {
      return this.$store.get('nokey', 'nothing here...')
    }
  },
  methods: {
    updateTest() {
      this.$store.set('test', 'success')
    },
    updateNoKey () {
      this.$store.set('nokey', 'success')
    }
  }
}
</script>
