# scale

元素的缩放属性。

## 关键属性

### scaleX: `number`

x 轴缩放比例， 为负数时表示镜像 X 轴。

### scaleY: `number`

y 轴缩放比例，为负数时表示镜像 Y 轴。

## 计算属性

### scale: `number` ｜ [`IPointData`](/reference/interface/math/Math#ipointdata)

快速设置 / 获取 scaleX, scaleY。

```ts
rect.scale = 2 // scaleX = 2, scaleY = 2
console.log(rect.scale) // 2

rect.scale = { x: 1, y: 2 } // scaleX = 1, scaleY = 2
console.log(rect.scale) // {x:1, y: 2}
```

## 关键方法

::: tip 注意事项
以下方法为增量操作，且会修改元素的起始坐标，适合图形编辑场景。

动画、游戏场景中，可使用更简单的 [origin](./origin.md) / [around](./around.md) + scale 属性实现围绕中心点缩放。
:::

### scaleOf ( origin: [`IAlign`](/reference/interface/math/Math.md#ialign) ｜ [`IPointData`](../interface/math/Math#ipointdata), multiplyScaleX: `number`, multiplyScaleY = multiplyScaleX, resize?: `boolean` )

围绕原点 origin（ [box 坐标](/guide/basic/coordinate.md#box) ）缩放元素 <badge>增量操作</badge>，[resize](/reference/property/resize.md) 参数可实现缩放操作转宽高值。

```ts
// 围绕中心点继续缩放1.5倍
rect.scaleOf('center', 1.5)

// 想缩放到指定 scale， 需除以元素当前 scale，如下：
rect.scaleOf({ x: 50, y: 50 }, 1.5 / rect.scale)
```

### scaleOfWorld ( worldOrigin: [`IPointData`](../interface/math/Math#ipointdata), multiplyScaleX: `number`, multiplyScaleY = addScaleX, resize?: `boolean` )

围绕原点 worldOrigin（ [世界坐标](/guide/basic/coordinate.md#world) ）缩放元素 <badge>增量操作</badge>。

## 归属

### [UI](/reference/display/UI.md)