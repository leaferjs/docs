# 画布配置

应用初始化创建画布的相关配置。

## 关键属性

### view: `object` | `string`

放置应用的的视图容器。

支持 window 、div、canvas 标签对象，注意 id 字符串不用加 # 号。

### width: `number`

画布宽度。

### height: `number`

画布高度。

### pixelRatio: `number`

画布像素比， 默认使用当前设备像素比（普通屏为 1，高清屏为 2，超高清屏为 3）。

### fill: `string`

背景颜色。

### hittable: `boolean`

是否响应碰撞事件（交互事件）。

### smooth: `boolean`

是否平滑的绘制图片、画布元素。

### contextSettings: `ICanvasRenderingContext2DSettings`

原生画布的 context 设置， [了解更多](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext#contextattributes)。

```ts
canvas.getContext('2d', settings)

interface ICanvasRenderingContext2DSettings {
  alpha?: boolean // 画布是否包含alpha通道， 默认为false
  colorSpace?: 'display-p3' | 'srgb' // 颜色空间， 默认为srgb
  desynchronized?: boolean // 低延时渲染，默认为false
  willReadFrequently?: boolean // 用于 getImageData() 加速， 默认为false
}
```

## 自适应布局

当 width 或 height 不存在值时，画布会进行自动布局。

### top: `number`

距离顶部的距离, 默认为 0。

### left: `number`

距离左侧的距离, 默认为 0。

### right: `number`

距离右侧的距离, 默认为 0。

### bottom: `number`

距离底部的距离, 默认为 0。

## 示例

### 关闭交互事件

<<< @/code/app/config/hittable.ts
