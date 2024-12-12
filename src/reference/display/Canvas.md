<script setup>
import Case from '/component/Case.vue'
</script>

# Canvas

画布对象，可以自由绘制、操作像素，或将其他图形直接绘制到 Canvas 上。

<case name="Pen" editor=false></case>

<br/>

::: tip 继承
Canvas &nbsp;>&nbsp; [Rect](./Rect.md) &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### width: `number`

画布高度。

### height: `number`

画布宽度。

### pixelRatio: `number`

画布分辨率， 默认为 1。

### smooth: `boolean`

是否平滑绘制图像， 默认为 true。

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

## 只读属性

### ready: `boolean`

[导入画布](#json) 是否已经完成。

### canvas: [`ILeaferCanvas`](/api/interfaces/ILeaferCanvas.md)

跨平台的画布封装对象。

### context: [`ICanvasContext2D`](/api/interfaces/ICanvasContext2D.md)

跨平台的 `2d` 上下文对象，同 HTML 的 Canvas.getContext('2d') 接口一致。

## 关键方法

### draw ( )

draw(ui: [`UI`](./UI.md) | [`Group`](./Group.md), offset?: [`IPointData`](/api/interfaces/IPointData.md) , scale?: `number` | [`IPointData`](/api/interfaces/IPointData.md), rotation?: `number`)

绘制图形元素。

以元素的 [inner 坐标](/guide/basic/coordinate.md#inner) 为基准进行绘制，暂时只支持`2d`类型的画布。

### paint ( )

渲染画布。

通过 `context` 绘制的内容需要调用此方法进行渲染。

## JSON

导出 JSON：将 canvas 数据生成一个 base64 的 url 属性。

导入 JSON：通过 url 属性异步加载图片还原 canvas，可监听 [ImageEvent.LOADED](/reference/event/basic/Image.md#imageevent-loaded)。

<!-- ## 继承元素

### [Rect](./Rect.md) -->

<!-- ## API

### [Canvas](/api/classes/Canvas.md) -->

## 示例

### 使用 context 绘制

<<< @/code/display/Canvas/context.ts

<case name="Pen" index=2 editor=false></case>

### 使用图形元素绘制

<<< @/code/display/Canvas/draw.ts
