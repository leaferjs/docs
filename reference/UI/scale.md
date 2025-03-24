# scale

元素的缩放属性。

## 关键属性

### scaleX: `number`

x 轴缩放比例， 为负数时表示镜像 X 轴。

### scaleY: `number`

y 轴缩放比例，为负数时表示镜像 Y 轴。

## 计算属性

### scale: `number` ｜ [`IPointData`](/reference/interface/math/Math.md#ipointdata)

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

### scaleOf ( origin: [`IAlign`](/reference/interface/math/Math.md#ialign) ｜ [`IPointData`](../interface/math/Math#ipointdata), multiplyScaleX: `number`, multiplyScaleY?: `number` | [`ITranstion`](/reference/UI/transition.md#transition-itranstion), resize?: `boolean`, transition?: [`ITranstion`](/reference/UI/transition.md#transition-itranstion) )

围绕原点 origin（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ）缩放元素 <badge>增量操作</badge>。

[`resize`](/reference/UI/resize.md) 参数可实现缩放操作转宽高值，[`transition`](/reference/UI/transition.md#transition-itranstion) 参数表示是否进行 [动画](/guide/plugin/animate.md) 过渡。

```ts
// 围绕中心点继续缩放1.5倍
rect.scaleOf('center', 1.5)

// 想缩放到指定 scale， 需除以元素当前 scale，如下：
rect.scaleOf({ x: 50, y: 50 }, 1.5 / rect.scale)

// 动画过渡
rect.scaleOf('center', 1.5, true) // = rect.scaleOf('center', 1.5, 1.5, false, true)

rect.scaleOf('center', 1.5, { duration: 2 }) // 过渡 2 秒  = rect.scaleOf('center', 1.5, 1.5, false, 2)
```

### scaleOfWorld ( worldOrigin: [`IPointData`](../interface/math/Math#ipointdata), multiplyScaleX: `number`, multiplyScaleY?: `number` | [`ITranstion`](/reference/UI/transition.md#transition-itranstion), resize?: `boolean`, transition?: [`ITranstion`](/reference/UI/transition.md#transition-itranstion) )

围绕原点 worldOrigin（ [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) ）缩放元素 <badge>增量操作</badge>。

[`resize`](/reference/UI/resize.md) 参数可实现缩放操作转宽高值，[`transition`](/reference/UI/transition.md#transition-itranstion) 参数表示是否进行 [动画](/guide/plugin/animate.md) 过渡。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 通过 scaleOf() 缩放元素

<<< @/code/property/scale/scale.ts

### 通过 scaleOf() 缩放元素，有动画过渡

<<< @/code/property/scale/transition.ts
