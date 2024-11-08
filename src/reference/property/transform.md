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

注意 [offsetX](/reference/property/offset)、[around](/reference/property/around) 会改变元素的实际位置。

### y: `number`

y 轴位置。

注意 [offsetY](/reference/property/offset)、[around](/reference/property/around) 会改变元素的实际位置。

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

### setTransform ( matrix: [`IMatrixData`](/api/interfaces/IMatrixData.md) )

设置本地变换矩阵，会自动分解为元素的布局属性 x,y, scaleX,scaleY,rotation, skewX, skewY。

### getTransform ( relative?: [`ILocationType`](/api/modules.md#ilocationtype) | [`UI`](/reference/display/UI.md) = 'local' ): [`IMatrixData`](/api/interfaces/IMatrixData.md)

获取变换矩阵, 支持获取相对任意父元素 `relative` 的相对矩阵。

### transform ( matrix: [`IMatrixData`](/api/interfaces/IMatrixData.md) )

变换操作，会自动分解为布局属性 <badge>增量操作</badge>。

## 相对世界坐标系

### transformWorld ( worldTransform: [`IMatrixData`](/api/interfaces/IMatrixData.md) )

transform() 在 [世界坐标系](/guide/basic/coordinate.md#world) 中操作。

## 归属

### [UI](/reference/display/UI.md)
