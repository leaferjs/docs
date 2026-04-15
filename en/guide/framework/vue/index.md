<script setup>
import Case from '/component/Case.vue'
</script>

# Using in Vue 3

:::tip Note
Leafer and its elements must not be directly bound to reactive data, otherwise multiple layers of proxy wrapping will occur and significantly reduce performance.
:::

::: code-group

```vue [App.vue]
<script setup lang="ts">
import { onMounted } from 'vue'
import { Leafer, Rect } from 'leafer-ui'

onMounted(() => {
  const leafer = new Leafer({ view: 'leafer-view' })

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

```ts [main.ts]
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

:::

### Quickly create a [Vue + Leafer project](../../../create/leafer.md)

### Make LeaferJS support [reactive data](../../../reference/UI/proxy.md)
