# scaleFixed

Fixes the global scale of an element so it does not scale with the viewport zoom.

::: tip Note
The [scale-fixed plugin](../../plugin/in/scale-fixed/index.md) is required, or you can use [leafer-editor](../../guide/install/editor/start.md) which already includes this plugin.
:::

## Key Property

### scaleFixed: `'zoom-in'` | `number` | `false`

Controls whether the element’s global scale is fixed. Defaults to `false`.

Setting `'zoom-in'` or `1` means the element will not scale up when the viewport zooms in, but will still scale down when zooming out (to prevent elements from clustering).

When set to a value between `0` and `1`, the element will only start scaling down after the viewport zoom level drops below that threshold.

::: tip
This can be used together with the [around](./around.md) property for positioning. If you only want to fix stroke width, use [strokeScaleFixed](./stroke.md#strokescalefixed-zoom-in-number-boolean) instead.
:::

## Belongs to

### [UI Element](../display/UI.md)

## Example

### Element does not scale with zoom-in

::: code-group
<<< @/code/property/scaleFixed/index.ts [Leafer]
<<< @/code/property/scaleFixed/app/index.ts [App]
:::

### Start scaling only when canvas zoom reaches 0.5

::: code-group
<<< @/code/property/scaleFixed/min.ts [Leafer]
<<< @/code/property/scaleFixed/app/min.ts [App]
:::
