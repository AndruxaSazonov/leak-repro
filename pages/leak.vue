<template>
<div>
  <div v-for="item in items">
    <nuxt-link to="/leak">{{ item.name }}</nuxt-link>
  </div>
</div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await new Promise(resolve => {
      let result = []
      for (let index = 0; index < 5000; ++index) {
       result.push({ name: index.toString() + " item" })
      }
      resolve(result)
    }).then(data => store.commit('SetEntries', data))
    if (process.server) console.log(Math.floor(process.memoryUsage().rss / 1024 / 1024).toString() + ' Mb')
    return { items: store.state.Entries }
  }
}
</script>

