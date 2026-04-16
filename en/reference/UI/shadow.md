<script setup>
import Case from '/component/Case.vue'
</script>

# shadow

The outer shadow of an element.

<case name="Shadow" editor=false></case>

## Key Property

### shadow: [`ShadowEffect`](../interface/ui/Effect.md#shadoweffect) | [`ShadowEffect`](../interface/ui/Effect.md#shadoweffect)[]

Outer shadow. Supports multiple shadow stacking and `boxShadow` effects.

```ts
interface ShadowEffect {
  x: number
  y: number
  blur: number
  spread?: number
  color: Color
  blendMode?: BlendMode
  visible?: boolean
  scaleFixed?: 'zoom-in' | false // whether shadow keeps fixed scale when zooming; "zoom-in" means fixed only when zooming in (still scales down when zooming out)
  box?: boolean // behaves like CSS3 boxShadow; only renders shadow outside the shape
}
```

## 归属

### [UI Element](../display/UI.md)

## Example

<case name="Shadow" index=1 editor=false></case>

### Render shadow

:::code-group
<<< @/code/property/shadow/offset.ts [Leafer]
<<< @/code/property/shadow/app/offset.ts [App]
:::

<case name="Shadow" index=0 editor=false></case>

### Render boxShadow effect

:::code-group
<<< @/code/property/shadow/box.ts [Leafer]
<<< @/code/property/shadow/app/box.ts [App]
:::

### Shadow does not scale with canvas zoom

<<< @/code/plugin/editor/frame/transparent.ts
