<template>
<div>
  <div v-for="anchor in anchors">
    <href :target="anchor.href" :title="anchor.name"/>
  </div>
</div>
</template>

<script>
import href from '~/components/href'
export default {
  components: { href },
  data() {
    let anchors = []
    for (let index = 0; index < 5000; ++index) {
     anchors.push({ name: index.toString() + " link", href: "/" + index.toString() })
    }
    if (process.server) console.log(Math.floor(process.memoryUsage().rss / 1024 / 1024).toString() + ' Mb')
    return { anchors }
  }
}
</script>
