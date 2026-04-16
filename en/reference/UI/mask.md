<script setup>
import Case from '/component/Case.vue'
</script>

# mask

Mask functionality. It allows you to designate an element inside a Group as a mask, enabling complex clipping effects. It supports 5 mask types.

<case name="Mask" editor=false></case>

## Key Property

### mask: `boolean` | `IMaskType`

When an element is set as a mask, it will not be rendered itself (except for `clipping` type). Elements above it within the same Group will be affected by the mask.

The default mask type is `pixel`. You can set it to `path` for better performance.

```ts
type IMaskType =
  | 'path' // Path mask, high performance, uses vector path clipping, does not render itself
  | 'pixel' // Pixel mask, uses per-pixel alpha transparency, can create complex effects, does not render itself
  | 'grayscale' // Grayscale mask, lower performance, converts color to grayscale then to alpha (black = transparent, white = opaque), does not render itself
  | 'clipping' // Clipping mask, same as Photoshop clipping mask, uses pixel alpha and renders itself
  | 'clipping-path' // Clipping path mask, high performance, similar to clipping but uses vector path clipping
```

## Mask Bounds

By default, the mask’s bounds will be used as the Group’s bounds. In this case, all child elements can still trigger interaction events and are not affected by the Group bounds, unless [hitChildren](./hit.md#hitchildren-boolean) is set to `false`.

## 归属

### [UI Element](../display/UI.md)

## Example

<case name="Mask" index=0 editor=false></case>

### 将圆环设为遮罩

:::code-group
<<< @/code/property/mask/ui.ts [Leafer]
<<< @/code/property/mask/app/ui.ts [App]
:::

<case name="Mask" index=1 editor=false></case>

### Use a semi-transparent ring as a mask

:::code-group
<<< @/code/property/mask/opacity.ts [Leafer]
<<< @/code/property/mask/app/opacity.ts [App]
:::

<case name="Mask" index=2 editor=false></case>

### Use a circle group as a mask

:::code-group
<<< @/code/property/mask/group.ts [Leafer]
<<< @/code/property/mask/app/group.ts [App]
:::

<case name="Mask" index=5 editor=false></case>

### Use a path as a mask

:::code-group
<<< @/code/property/mask/path.ts [Leafer]
<<< @/code/property/mask/app/path.ts [App]
:::

## Quick Mask Setup

<case name="Mask" index=0 editor=false></case>

You can quickly set a mask element for a Group via a custom function. By default, the mask will be added to the bottom of the Group.

:::code-group
<<< @/code/property/mask/fast.ts [Leafer]
<<< @/code/property/mask/app/fast.ts [App]
:::
