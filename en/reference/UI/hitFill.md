<script setup>
import Case from '/component/Case.vue'
</script>

# hitFill

Further defines the interactivity of an element’s [fill](./fill.md).

## Key Property

### hitFill: `IHitType`

fill 的交互类型，默认为 path。

Setting it to `pixel` enables pixel-level hit detection for PNG / SVG images, filtering out transparent pixels.

```ts
type IHitType =
  | 'path' // Hit only the visible fill path shape
  | 'pixel' // Pixel-level hit detection on visible fill (excludes transparent pixels in PNG/SVG images)
  | 'all' // Always hit fill, even if not visible
  | 'none' // Never hit fill
```

## 归属

### [UI Element](../display/UI.md)

## Example

<case name="Hittable" index=2 editor=false></case>

### Invisible fill can still respond to interactions

Try dragging the rectangle.

:::code-group
<<< @/code/property/hit/all.ts [Leafer]
<<< @/code/property/hit/app/all.ts [App]
:::
