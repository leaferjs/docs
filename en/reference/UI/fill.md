<script setup>
import Case from '/component/Case.vue'
</script>

# fill

Fill, similar to `background-color` in HTML5 or `color` for text.

<case name="Fill" editor=false></case>

## Key Properties

### fill: `string` | [`Paint`](../interface/ui/Paint) ｜ [`Paint`](../interface/ui/Paint.md)[]

Sets the fill for backgrounds or text.

Supports [solid color](./paint/solid.md), [linear gradient](./paint/linear.md), [radial gradient](./paint/radial.md), [angular gradient](./paint/angular.md), and [image pattern fill](./paint/image.md), etc. Multiple fills can be layered together.

## Belongs to

### [UI Elements](../display/UI.md)

## Examples

<case name="Fill" index=0 editor=false></case>

### Solid fill

::: code-group
<<< @/code/property/fill/solid/a.ts [Leafer]
<<< @/code/property/fill/solid/app/a.ts [App]
:::

<case name="Fill" index=1 editor=false></case>

### Gradient fill

Supports [linear gradient](./paint/linear.md), [radial gradient](./paint/radial.md), [angular gradient](./paint/angular.md), etc.

::: code-group
<<< @/code/property/fill/linear/a.ts [Leafer]
<<< @/code/property/fill/linear/app/a.ts [App]
:::

<case name="Fill" index=5 editor=false></case>

### Image pattern fill

[Image fill](./paint/image.md) supports cover, contain, clip, and tile modes.

::: code-group
<<< @/code/property/fill/image/cover.ts [Leafer]
<<< @/code/property/fill/image/app/cover.ts [App]
:::

<case name="Fill" index=4 editor=false></case>

### Multiple fills overlay

Fill opacity currently only applies to [color objects](../interface/ui/Color.md#rgb) and images.

::: code-group
<<< @/code/property/fill/mutil/a.ts [Leafer]
<<< @/code/property/fill/mutil/app/a.ts [App]
:::
