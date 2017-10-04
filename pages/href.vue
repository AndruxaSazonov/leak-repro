<template>
<div>
  <div v-for="anchor in anchors">
    <a :href="anchor.href" v-on:click="go">{{ anchor.name }}</a>
  </div>
</div>
</template>

<script>
export default {
  data() {
    let anchors = []
    for (let index = 0; index < 5000; ++index) {
     anchors.push({ name: index.toString() + " link", href: "/" + index.toString() })
    }
    if (process.server) console.log(Math.floor(process.memoryUsage().rss / 1024 / 1024).toString() + ' Mb')
    return { anchors }
  },
  methods: {
    go(event) {
      if (event) {
        event.preventDefault()
        this.$router.push(event.target.getAttribute('href'))
      }
    }
  }
}
</script>
