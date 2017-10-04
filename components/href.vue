<template>
  <a :href="target" v-on:click="go">{{ title }}</a>
</template>

<script>
export default {
  props: ['target', 'title'],
  methods: {
    go(event) {
      if (event) event.preventDefault()
      this.$router.push(this.target)
    }
  }
}
</script>