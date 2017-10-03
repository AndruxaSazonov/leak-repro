<template>
<div>
  <div v-for="anchor in anchors">
    <a :href="anchor.href">{{ anchor.name }}</a>
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
    console.log(process.memoryUsage())
    return { anchors }
  }
}
</script>
