<script setup>
import Case from '/component/Case.vue'
</script>

# innerShadow

The inner shadow of an element.

<case name="InnerShadow" editor=false></case>

## Key Property

### innerShadow: [`ShadowEffect`](../interface/ui/Effect.md#shadoweffect) | [`ShadowEffect`](../interface/ui/Effect.md#shadoweffect)[]

Inner shadow. Multiple inner shadows can be stacked.

```ts
interface ShadowEffect {
  x: number
  y: number
  blur: number
  spread?: number
  color: Color
  blendMode?: BlendMode
  visible?: boolean
  scaleFixed?: 'zoom-in' | false // Whether to keep the original scale during zooming; "zoom-in" means it is fixed only when zooming in (still scales down when zooming out)
}
```

## Belongs to

### [UI Element](../display/UI.md)

## Example

<case name="InnerShadow" index=0 editor=false></case>

### Draw inner shadow

::: code-group
<<< @/code/property/innerShadow/blur.ts [Leafer]
<<< @/code/property/innerShadow/app/blur.ts [App]
:::
