# position

元素的坐标定位属性。

## 关键属性

### x: `number`

x 轴位置。

注意 [offsetX](/reference/property/offset)、[around](/reference/property/around) 会改变元素的实际位置。

### y: `number`

y 轴位置。

注意 [offsetY](/reference/property/offset)、[around](/reference/property/around) 会改变元素的实际位置。

## 关键方法

### move ( addX: `number` | [`IPointData`](../interface/math/Math#ipointdata), addY = 0, transition?: [`ITranstion`](/reference/property/transition.md#transition-itranstion))

位移元素 <badge>增量操作</badge>， 支持直接传入 [坐标对象](/reference/interface/math/Math#ipointdata)。

[`transition`](/reference/property/transition.md#transition-itranstion) 参数表示是否进行 [动画](/guide/plugin/animate.md) 过渡。

```ts
// 沿 X/Y 轴同时移动 10 像素
rect.move(10, 10)

// 使用 point 沿 X/Y 轴同时移动 10 像素
rect.move({ x: 10, y: 10 })

// 动画过渡移动
rect.move(10, 10, true)

rect.move(10, 10, 2) // 过渡 2 秒
```

### moveInner ( addX: `number` | [`IPointData`](../interface/math/Math#ipointdata), addY = 0, transition?: [`ITranstion`](/reference/property/transition.md#transition-itranstion))

在 [内部坐标系](/guide/basic/coordinate.md) 中位移元素 <badge>增量操作</badge>， 支持直接传入 [坐标对象](/reference/interface/math/Math#ipointdata)。

### moveWorld ( addWorldX: `number` | [`IPointData`](../interface/math/Math#ipointdata), addWorldY = 0, transition?: [`ITranstion`](/reference/property/transition.md#transition-itranstion))

在 [世界坐标系](/guide/basic/coordinate.md#world) 中位移元素 <badge>增量操作</badge>， 支持直接传入 [坐标对象](/reference/interface/math/Math#ipointdata)。

## 归属

### [UI](/reference/display/UI.md)
