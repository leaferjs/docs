<script setup>
import Case from '/component/Case.vue'
</script>

# Using in Nuxt.js

:::tip Note
Leafer and its elements must not be directly bound to reactive data, otherwise multiple layers of proxy wrapping will occur and significantly reduce performance.
:::

::: code-group

```vue [index.vue]
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  async mounted() {
    // Must load asynchronously inside mounted to ensure canvas context environment
    const { Leafer, Rect } = await import('leafer-ui')

    const leafer = new Leafer({ view: window })

    const rect = new Rect({
      x: 100,
      y: 100,
      width: 200,
      height: 200,
      fill: '#32cd79',
      cornerRadius: [50, 80, 0, 80],
      draggable: true,
    })

    leafer.add(rect)
  },
  destroyed() {
    // destroy leafer
  },
})
</script>

<template>
  <div id="leafer-view"></div>
</template>

<style scoped>
#leafer-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
```

:::
