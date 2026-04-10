<script setup>
import Case from '/component/Case.vue'
</script>

# 在 Nuxt.js 中使用

:::tip 注意事项
leafer 及元素不能直接挂载到响应式数据上，会造成内部层层代理，拖慢运行速度
:::

::: code-group

```vue [index.vue]
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  async mounted() {
    // 必须在 mounted 中异步加载代码，才有 canvas context 环境
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
    // 销毁leafer
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
