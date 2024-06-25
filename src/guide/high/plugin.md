# 创建应用

支持创建自动布局、多层结构的应用

## 固定大小

创建固定宽高的应用

```ts
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({
  view: window, // id / object,  支持 window 、div、canvas
  width: 800,
  height: 500,
  pixelRatio: devicePixelRatio, // 默认为当前设备分辨率
})
```

## 自动布局

父元素尺寸改变后会自动 resize

```ts
import { Leafer } from 'leafer-ui'

new Leafer({
  view: 'id',
  // = { top:0, right: 0, bottom: 0, left: 0 }
})

new Leafer({
  view: 'id',
  top: 50,
  // = { top:50, right: 0, bottom: 0, left: 0 }
})
```

## 多层结构

将不同更新频率的内容进行分层，以减少不必要的性能开销， 每个层都独立渲染

```ts
import { SupperLeafer } from 'leafer-ui'

const app = new SupperLeafer({
  view: window,
})

const bottom = app.addLeafer() // 背景层
const content = app.addLeafer({ type: 'design' }) // 内容层
const top = app.addLeafer() // 频繁更新的线框层， 如: hover效果，select效果，变形工具
```
