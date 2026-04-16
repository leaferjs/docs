<script setup>
import Case from '/component/Case.vue'
</script>

# Corner

Polyline corner radius is supported by default. Curve corner radius requires a plugin.

:::tip Note
Corner radius between curves and polylines, or between polylines and curves, requires installing the [corner plugin](../../plugin/in/corner/index.md).
:::

## Key Properties

### cornerRadius: `number`

Corner radius.

<!-- ### cornerSmoothing: `number`

计划开发的功能。

平滑圆角所对应的数值，取值范围为 0 ～ 1，常用的 iOS 规范为 0.6。 -->

## 归属

### [UI Elements](../display/UI.md)

## Examples

<case name="Ellipse" index=5 editor=false></case>

### Draw a sector ring with rounded corners

:::code-group
<<< @/code/display/Ellipse/sectorRingCorner.ts [Leafer]
<<< @/code/display/Ellipse/app/sectorRingCorner.ts [App]
:::
