<script setup>
import Case from '/component/Case.vue'
</script>

# hittable

Whether the element responds to mouse, touch, or other pointer device interactions, similar to the CSS `pointer-events` property.

You can set the default pointer collision radius in the [engine configuration](../config/app/pointer.md#pointer-hitradius-number), or set it individually per element using [hitRadius](#hitradius-number).

## Key Property

### hittable: `boolean`

Whether the element responds to interaction events. Defaults to `true`.

<!-- 若设为 false, 自身和子元素将不再响应交互事件。 -->

This can be further refined using [hitChildren](./hitChildren.md), [hitSelf](./hitSelf.md), [hitFill](./hitFill.md), and [hitStroke](./hitStroke.md). Note that [hitFill](./hitFill.md) supports pixel-level hit detection.

## Auxiliary Properties

### hitBox: `boolean`

Whether the element's [boxBounds](./bounds.md#boxbounds-iboundsdata) area always responds to interaction events (including transparent pixels). Defaults to `false`.

It is typically used for Text elements with padding. Group does not support this property.

### hitRadius: `number`

Sets the collision radius for the pointer. When the pointer is within the `hitRadius` range of the element, the engine can prioritize picking the element.

## Key Method

### hit ( worldPoint: [`IPointData`](../interface/math/Math#ipointdata), hitRadius: `number` = 0 ): `boolean`

Quickly checks whether a world coordinate point ([world coordinate system](../../guide/advanced/coordinate.md#world-world-coordinate-system)) collides with the element. Supports specifying a collision radius via `hitRadius`.

## 归属

### [UI Element](../display/UI.md)

## Example

### Disable interaction for an element

:::code-group
<<< @/code/property/hit/hittable.ts [Leafer]
<<< @/code/property/hit/app/hittable.ts [App]
:::
