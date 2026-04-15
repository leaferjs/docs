<script setup>
import Case from '/component/Case.vue'
</script>

# hitStroke

Further defines the interactivity of an element’s [stroke](./stroke.md).

## Key Property

### hitStroke: `IHitType`

The hit detection type for `stroke`. Defaults to `path`.

Setting it to `pixel` enables pixel-level hit detection for PNG / SVG images, filtering out transparent pixels.

```ts
type IHitType =
  | 'path' // Hit only the visible stroke path shape
  | 'pixel' // Pixel-level hit detection on visible stroke (excludes transparent pixels in PNG/SVG images)
  | 'all' // Always hit stroke, even if not visible
  | 'none' // Never hit stroke
```

## Belongs to

### [UI Element](../display/UI.md)

## Example

<case name="Hittable" index=1 editor=false></case>

### Only stroke responds to interactions

Try dragging the rectangle.

::: code-group
<<< @/code/property/hit/stroke-visible.ts [Leafer]
<<< @/code/property/hit/app/stroke-visible.ts [App]
:::
