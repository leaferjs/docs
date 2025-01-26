# skew

元素的倾斜属性。

## 关键属性

### skewX: `number`

x 轴倾斜角度，取值范围为 -90 ～ 90。

### skewY: `number`

y 轴倾斜角度，取值范围为 -90 ～ 90。

## 关键方法

::: tip 注意事项
以下方法为增量操作，适合图形编辑场景。

动画、游戏场景中，可使用更简单的 [origin](./origin.md) / [around](./around.md) + skew 实现围绕中心点倾斜。
:::

### skewOf ( origin: [`IAlign`](/reference/interface/math/Math.md#ialign) ｜ [`IPointData`](../interface/math/Math#ipointdata), addSkewX: `number`, addSkewY = 0, resize?: `boolean`, transition?: [`ITranstion`](/reference/property/transition.md#transition-itranstion) )

围绕原点 origin（ [box 坐标](/guide/basic/coordinate.md#box) ）倾斜元素 <badge>增量操作</badge>，[`transition`](/reference/property/transition.md#transition-itranstion) 参数表示是否进行 [动画](/guide/plugin/animate.md) 过渡。

```ts
// 围绕中心继续倾斜X轴 45度
rect.skewOf('center', 45)

// 想倾斜到指定 skewX， 需减去元素当前 skewX，如下：
rect.skewOf({ x: 50, y: 50 }, 45 - rect.skewX)

// 动画过渡
rect.skewOf('center', 45, 0, true)

rect.skewOf('center', 45, 0, 2) // 过渡 2 秒
```

### skewOfWorld ( worldOrigin: [`IPointData`](../interface/math/Math#ipointdata), addSkewX: `number`, addSkewY = 0, resize?: `boolean`, transition?: [`ITranstion`](/reference/property/transition.md#transition-itranstion) )

围绕原点 worldOrigin（ [世界坐标](/guide/basic/coordinate.md#world) ）倾斜元素 <badge>增量操作</badge>，[`transition`](/reference/property/transition.md#transition-itranstion) 参数表示是否进行 [动画](/guide/plugin/animate.md) 过渡。

## 归属

### [UI](/reference/display/UI.md)
