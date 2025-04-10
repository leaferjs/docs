# taro

注意：暂时不支持在组件中使用，微信小程序的选择api无法查找到组件中的canvas。

### 普通结构

::: code-group

```vue [index.vue]
<template>
  <canvas
    id="leafer"
    type="2d"
    @touchstart="receiveEvent"
    @touchmove="receiveEvent"
    @touchend="receiveEvent"
    @touchcancel="receiveEvent"
  ></canvas>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro'
import { Leafer, Rect, useCanvas } from '@leafer-ui/miniapp'

useCanvas('canvas', Taro) // 绑定平台全局变量

let leafer: Leafer

Taro.useReady(() => {
  leafer = new Leafer({ view: 'leafer' })

  const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true,
  })

  leafer.add(rect)
})

function receiveEvent(event: TouchEvent) {
  leafer.receiveEvent(event) // 需手动接收、传递画布交互事件给leafer
}
</script>

<style>
page {
  height: 100%;
}
#leafer {
  width: 100%;
  height: 100%;
}
</style>
```

:::

### App 结构 - 图形编辑器

::: code-group

```vue [index.vue]
<template>
  <view
    id="leafer"
    @touchstart="receiveEvent"
    @touchmove="receiveEvent"
    @touchend="receiveEvent"
    @touchcancel="receiveEvent"
  >
    <canvas id="leafer-tree" type="2d"></canvas>
    <canvas id="leafer-sky" type="2d"></canvas>
  </view>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro'
import { App, Rect, useCanvas } from '@leafer-ui/miniapp'
import '@leafer-in/editor' // 导入图形编辑器插件

useCanvas('canvas', Taro) // 绑定平台全局变量

let app: App

Taro.useReady(() => {
  app = new App({
    view: 'leafer',
    mobile: true, // 优化手机端体验
    tree: { canvas: 'leafer-tree' }, // 需指定canvas
    sky: { canvas: 'leafer-sky' },
    editor: {}, // 会自动创建 editor实例
  })

  const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79',
    editable: true,
  })

  app.tree.add(rect)
})

function receiveEvent(event: TouchEvent) {
  app.receiveEvent(event) // 需手动接收、传递画布交互事件给leafer
}
</script>

<style>
page {
  height: 100%;
}
#leafer {
  width: 100%;
  height: 100%;
}
#leafer-tree {
  position: absolute;
  width: 100%;
  height: 100%;
}
#leafer-sky {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
```

:::
