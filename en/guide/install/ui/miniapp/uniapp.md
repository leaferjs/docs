# uniapp

Note: Currently not supported inside components, because WeChat Mini Program selector APIs cannot locate canvas inside components.

### Basic structure

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
import { onReady } from '@dcloudio/uni-app'
import { Leafer, Rect, useCanvas } from '@leafer-ui/miniapp'

useCanvas('canvas', uni) // bind platform global object

let leafer: Leafer

onReady(() => {
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
  leafer.receiveEvent(event) // manually forward canvas events to Leafer
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

### App structure – graphic editor

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
import { onReady } from '@dcloudio/uni-app'
import { App, Rect, useCanvas } from '@leafer-ui/miniapp'
import '@leafer-in/editor' // import editor plugin

useCanvas('canvas', uni) // bind platform global object

let app: App

onReady(() => {
  app = new App({
    view: 'leafer',
    mobile: true, // optimize mobile experience
    tree: { canvas: 'leafer-tree' }, // canvas must be specified
    sky: { canvas: 'leafer-sky' },
    editor: {}, // auto create editor instance
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
  app.receiveEvent(event) // manually forward canvas events to Leafer
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
