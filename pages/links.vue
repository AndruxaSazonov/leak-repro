<template>
<div>
  <div v-for="link in links">
    <nuxt-link :to="link.href">{{ link.name }}</nuxt-link>
  </div>
</div>
</template>

<script>
export default {
  data() {
    let links = []
    for (let index = 0; index < 5000; ++index) {
     links.push({ name: index.toString() + " link", href: "/" + index.toString() })
    }
    console.log(process.memoryUsage())
    return { links }
  }
}
</script>
