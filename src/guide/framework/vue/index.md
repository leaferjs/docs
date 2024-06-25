<script setup>
import Case from '/component/Case.vue'
</script>

# 在 Vue3 中使用

<br/>

::: code-group

```vue [App.vue]
<script setup lang="ts">
import { onMounted } from 'vue'
import { Leafer, Rect } from 'leafer-ui'

onMounted(() => {
  // 注意leafer及元素不能直接挂载到响应式数据上，会造成内部层层代理，拖慢运行速度
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

### 让 LeaferUI 支持 [响应式数据](/reference/property/proxy)
