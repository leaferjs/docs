<script setup>
import Case from '/component/Case.vue'
</script>

# transform

The transformation matrix of an element. It is the foundation of element layout and [coordinate transformation](./point/). It can be used with the [Matrix](../math/Matrix.md) / [Point](../math/Point.md) classes to manipulate transforms.

![inner-outer-view](/svg/outer-inner.svg)

## Read-only Properties

### worldTransform: [`IMatrixWithScaleData`](../../api/interfaces/IMatrixWithScaleData.md)

The transformation matrix relative to the world coordinate system, including `scaleX` and `scaleY`.

### localTransform: [`IMatrixData`](../../api/interfaces/IMatrixData.md)

The transformation matrix relative to the parent element.

## 来源于

The matrix is composed in the following order: rotate → skew → scale → translate.

### x: `number`

Position on the x-axis.

Note: [offsetX](./offset.md) and [around](./around.md) affect the actual position.

### y: `number`

Position on the y-axis.

Note: [offsetY](./offset.md) and [around](./around.md) affect the actual position.

### scaleX: `number`

Scale factor on the x-axis. A negative value represents mirroring along the x-axis.

### scaleY: `number`

Scale factor on the y-axis. A negative value represents mirroring along the y-axis.

### rotation: `number`

[Rotation angle](../interface/math/Math.md#rotation), ranging from `-180` to `180`.

### skewX: `number`

Skew angle on the x-axis, ranging from `-90` to `90`.

### skewY: `number`

Skew angle on the y-axis, ranging from `-90` to `90`.

## Key Methods

### setTransform ( matrix: [`IMatrixData`](../../api/interfaces/IMatrixData.md), resize?: `boolean`, transition?: [`ITranstion`](./transition.md#transition-itranstion) )

Set the local transformation matrix. It will be automatically decomposed into layout properties `x`, `y`, `scaleX`, `scaleY`, `rotation`, `skewX`, `skewY`.

The `resize` parameter converts scaling operations into width/height changes. The `transition` parameter enables [animation](../../guide/plugin/animate.md) transitions.

### getTransform ( relative?: [`ILocationType`](../../api/modules.md#ilocationtype) | [`UI`](../display/UI.md) = 'local' ): [`IMatrixData`](../../api/interfaces/IMatrixData.md)

Get the transformation matrix. Supports retrieving the matrix relative to any parent element via `relative`.

### transform ( matrix: [`IMatrixData`](../../api/interfaces/IMatrixData.md), resize?: `boolean`, transition?: [`ITranstion`](./transition.md#transition-itranstion) )

Apply a transformation operation, which is automatically decomposed into layout properties <badge>incremental operation</badge>.

The `resize` parameter converts scaling into width/height changes. The `transition` parameter enables animation transitions.

### transformWorld ( worldTransform: [`IMatrixData`](../../api/interfaces/IMatrixData.md), resize?: `boolean`, transition?: [`ITranstion`](../../api/interfaces/ITranstion.md) )

Same as `transform()`, but operates in the [world coordinate system](../../guide/advanced/coordinate.md#world-world-coordinate-system).

The `resize` parameter converts scaling into width/height changes. The `transition` parameter enables animation transitions.

## 归属

### [UI Element](../display/UI.md)
