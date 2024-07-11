<script setup>
import Case from '/component/Case.vue'
</script>

# transform

元素的变换矩阵，是元素布局与 [坐标转换](./point/) 的基础，可通过 [Matrix](/reference/math/Matrix.md) / [Point](/reference/math/Point.md) 类使用变换矩阵。

![内外视图](/svg/outer-inner.svg)

## 只读属性

### worldTransform: [`IMatrixWithScaleData`](/api/interfaces/IMatrixWithScaleData.md)

相对于世界坐标的变换矩阵, 包含 scaleX、scaleY 属性。

### localTransform: [`IMatrixData`](/api/interfaces/IMatrixData.md)

相对于父元素的变换矩阵。

## 来源于

### x: `number`

x 轴位置。

注意 [offsetX](/reference/property/layout#偏移属性)、[around](/reference/property/around) 会改变元素的实际位置。

### y: `number`

y 轴位置。

注意 [offsetY](/reference/property/layout#偏移属性)、[around](/reference/property/around) 会改变元素的实际位置。

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

## 关键方法

围绕中心点绘制、旋转、缩放元素，可使用更简单的 [around](./around.md) 属性。

以下方法大部分为手动增量操作，增量操作暂时不能与 around 共用。

### setTransform ( matrix: [`IMatrixData`](/api/interfaces/IMatrixData.md) )

设置本地变换矩阵，会自动分解为元素的布局属性 x,y, scaleX,scaleY,rotation, skewX, skewY。

### getTransform ( relative?: [`ILocationType`](/api/modules.md#ilocationtype) | [`UI`](/reference/display/UI.md) = 'local' ): [`IMatrixData`](/api/interfaces/IMatrixData.md)

获取变换矩阵, 支持获取相对任意父元素 `relative` 的相对矩阵。

### transform ( matrix: [`IMatrixData`](/api/interfaces/IMatrixData.md) )

变换操作，会自动分解为布局属性 <badge>增量操作</badge>。

### move ( x: `number` | [`IPointData`](../interface/math/Math#ipointdata), y = 0)

位移元素 <badge>增量操作</badge>， 支持直接传入 [坐标对象](/reference/interface/math/Math#ipointdata)。

### scaleOf ( origin: [`IPointData`](../interface/math/Math#ipointdata) | [`IAlign`](/reference/interface/math/Math.md#ialign), scaleX: `number`, scaleY = scaleX)

以 origin（元素 [inner 坐标](/guide/basic/coordinate.md) ） 为原点，缩放元素 <badge>增量操作</badge>。

### rotateOf ( origin: [`IPointData`](../interface/math/Math#ipointdata) | [`IAlign`](/reference/interface/math/Math.md#ialign), rotation: `number` )

以 origin （元素 [inner 坐标](/guide/basic/coordinate.md) ） 为原点，旋转元素 <badge>增量操作</badge>。

### skewOf ( origin: [`IPointData`](../interface/math/Math#ipointdata) | [`IAlign`](/reference/interface/math/Math.md#ialign), skewX: `number`, skewY = 0 )

以 origin （元素 [inner 坐标](/guide/basic/coordinate.md) ） 为原点，倾斜元素 <badge>增量操作</badge>。

```ts
// 想缩放到指定 scale， 需除以元素的 scale，如下：
leaf.scaleOf({ x: 50, y: 50 }, scale / leaf.scale)

// 想旋转到指定 rotation， 需减去元素的 rotation，如下：
leaf.rotateOf({ x: 50, y: 50 }, rotation - leaf.rotation)

// 想倾斜到指定 skewX， 需减去元素的 skewX，如下：
leaf.skewOf({ x: 50, y: 50 }, skewX - leaf.skewX)
```

## 相对世界坐标系

### transformWorld ( worldTransform: [`IMatrixData`](/api/interfaces/IMatrixData.md) )

transform() 在世界坐标系中操作。

### moveWorld ( worldX: `number` | [`IPointData`](../interface/math/Math#ipointdata), worldY = 0 )

move() 在世界坐标系中操作。

### scaleOfWorld ( worldOrigin: [`IPointData`](../interface/math/Math#ipointdata), scaleX: `number`, scaleY = scaleX )

scaleOf() 在世界坐标系中操作。

### rotateOfWorld ( worldOrigin: [`IPointData`](../interface/math/Math#ipointdata), rotation: `number` )

rotateOf() 在世界坐标系中操作。

### skewOfWorld ( worldOrigin: [`IPointData`](../interface/math/Math#ipointdata), skewX: `number`, skewY = 0 )

skewOf() 在世界坐标系中操作。

## 归属

### [UI](/reference/display/UI.md#盒子-变换)

## 示例

<case name="RectAnimate" index=0 editor=false></case>

### 旋转动画

<<< @/code/animate/simple.ts
