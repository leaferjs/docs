# rotation

元素的旋转属性。

## 关键属性

### rotation: `number`

[旋转角度](../interface/math/Math.md#rotation)，取值范围为 -180 ～ 180。

## 关键方法

::: tip 注意事项
以下方法为增量操作，适合图形编辑场景。

动画、游戏场景中，可使用更简单的 [origin](./origin.md) / [around](./around.md) + rotation 属性实现围绕中心点旋转。
:::

### rotateOf ( origin: [`IAlign`](/reference/interface/math/Math.md#ialign) | [`IPointData`](../interface/math/Math#ipointdata), addRotation: `number` )

围绕原点 origin（ [box 坐标](/guide/basic/coordinate.md#box) ）旋转元素 <badge>增量操作</badge>。

```ts
// 围绕中心点继续旋转 45度
rect.rotateOf('center', 45)

// 想旋转到指定 rotation， 需减去元素当前 rotation，如下：
rect.rotateOf({ x: 50, y: 50 }, 45 - rect.rotation)
```

### rotateOfWorld ( worldOrigin: [`IPointData`](../interface/math/Math#ipointdata), addRotation: `number` )

围绕原点 worldOrigin（ [世界坐标](/guide/basic/coordinate.md#world) ）旋转元素 <badge>增量操作</badge>。

## 归属

### [UI](/reference/display/UI.md)