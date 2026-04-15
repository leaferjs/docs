<script setup>
import Case from '/component/Case.vue'
</script>

# Corner

Polyline corner radius is supported by default. Curve corner radius requires a plugin.

::: tip Note
Corner radius between curves and polylines, or between polylines and curves, requires installing the [corner plugin](../../plugin/in/corner/index.md).
:::

## Key Properties

### cornerRadius: `number`

Corner radius.

<!-- ### cornerSmoothing: `number`

Planned feature.

The smoothing value for rounded corners, ranging from 0 to 1. A commonly used value in iOS guidelines is 0.6. -->

## Belongs to

### [UI Elements](../display/UI.md)

## Examples

<case name="Ellipse" index=5 editor=false></case>

### Draw a sector ring with rounded corners

::: code-group
<<< @/code/display/Ellipse/sectorRingCorner.ts [Leafer]
<<< @/code/display/Ellipse/app/sectorRingCorner.ts [App]
:::
