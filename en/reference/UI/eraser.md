<script setup>
import Case from '/component/Case.vue'
</script>

# eraser

Eraser feature. A child element inside a Group can be designated as an eraser to create complex masking effects. Two erasing modes are supported.

<case name="Eraser" editor=false></case>

## Key Properties

### eraser: `boolean` ｜ `IEraserType`

When an element is set as an eraser, it will not be rendered itself, but it will erase elements underneath it within the same Group.

The default eraser type is `pixel`. You can set it to `path` for better performance.

```ts
type IEraserType =
  | 'path' // Path eraser: high performance, uses path clipping for erasing
  | 'pixel' // Pixel eraser: uses per-pixel alpha transparency, enables more complex visual effects
```

## Eraser Bounds

The bounds of an eraser are not included in the Group’s layout bounds, but it can still trigger interaction events. It is not affected by Group boundaries unless [hitChildren](./hit.md#hitchildren-boolean) is set to `false`.

## Belongs to

### [UI Elements](../display/UI.md)

## Examples

<case name="Eraser" index=0 editor=false></case>

### Set a ring as an eraser

::: code-group
<<< @/code/property/eraser/ui.ts [Leafer]
<<< @/code/property/eraser/app/ui.ts [App]
:::

<case name="Eraser" index=1 editor=false></case>

### Set a semi-transparent ring as an eraser

::: code-group
<<< @/code/property/eraser/opacity.ts [Leafer]
<<< @/code/property/eraser/app/opacity.ts [App]
:::

<case name="Eraser" index=2 editor=false></case>

### Set a circular group as an eraser

::: code-group
<<< @/code/property/eraser/group.ts [Leafer]
<<< @/code/property/eraser/app/group.ts [App]
:::

<case name="Eraser" index=5 editor=false></case>

### Set a path as an eraser

::: code-group
<<< @/code/property/eraser/path.ts [Leafer]
<<< @/code/property/eraser/app/path.ts [App]
:::
