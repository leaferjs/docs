# layout

元素布局相关属性

## 关键属性

### x: `number`

x 轴位置。

注意 [offsetX](/reference/property/offset.md)、[around](/reference/property/around.md) 会改变元素的实际位置。

### y: `number`

y 轴位置。

注意 [offsetY](/reference/property/offset.md)、[around](/reference/property/around.md) 会改变元素的实际位置。

### width: `number`

元素的宽度。

不支持直接设置的元素、Group 可通过 [resizeWidth()](/reference/property/resize.md) 调整，通过 [boxBounds](/reference/property/bounds.md#boxbounds-iboundsdata) 获取实际宽度 。

:::tip
当宽度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleX 镜像代替，开发环境中会发出一个警告。
:::

### height: `number`

元素的高度，仅部分元素支持直接设置。

不支持直接设置的元素、Group 可通过 [resizeHeight()](/reference/property/resize.md) 调整，通过 [boxBounds](/reference/property/bounds.md#boxbounds-iboundsdata) 获取实际高度。

:::tip
当高度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleY 镜像代替，开发环境中会发出一个警告。
:::

### scaleX: `number`

x 轴缩放比例， 为负数时表示镜像 X 轴。

### scaleY: `number`

y 轴缩放比例，为负数时表示镜像 Y 轴。

### rotation: `number`

[旋转角度](../interface/math/Math.md#rotation)，取值范围为 -180 ～ 180。

### skewX: `number`

x 轴倾斜角度，取值范围为 -90 ～ 90。

### skewY: `number`

y 轴倾斜角度，取值范围为 -90 ～ 90。

## 计算属性

### scale: `number` ｜ [`IPointData`](/reference/interface/math/Math.md#ipointdata)

快速设置 scaleX, scaleY

```ts
leaf.scale = 2 // scaleX = 2, scaleY = 2
console.log(leaf.scale) // 2

leaf.scale = { x: 1, y: 2 } // scaleX = 1, scaleY = 2
console.log(leaf.scale) // {x:1, y: 2}
```

## 关键方法

### updateLayout ( )

请求更新布局，如 leafer 布局无变化，则忽略。

## 更多

### [transform 属性方法](/reference/property/transform.md)

### [bounds 属性方法](/reference/property/bounds.md)

## 归属

### [UI](/reference/display/UI.md)
