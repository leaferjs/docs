<script setup>
import Case from '/component/Case.vue'
</script>

# Rect Element

Draw rectangles and rounded rectangles.

<case name="Rect" editor=false></case>

<br/>

::: tip Inheritance
Rect  >  [UI](./UI.md)
:::

## Key Properties

### width: `number`

Width.

### height: `number`

Height.

## Corner Properties

### cornerRadius: [`IFourNumber`](../interface/math/Math.md#ifournumber)

Corner radius. You can set each of the 4 corners independently. Default is `0`.

```ts
cornerRadius: [20, 10, 20, 10] // [topLeft, topRight, bottomRight, bottomLeft]
cornerRadius: [20, 10, 20] // [topLeft, (topRight-bottomLeft), bottomRight]
cornerRadius: [20, 10] // [ (topLeft-bottomRight), (topRight-bottomLeft)]
cornerRadius: 20 // all corners
```

## Stroke Properties

### strokeWidth: [`IFourNumber`](../interface/math/Math.md#ifournumber)

Stroke width. You can set each side independently. Default is `0`.

See more about [stroke styles](../UI/stroke.md).

```ts
strokeWidth: [20, 10, 20, 10] // [top, right, bottom, left]
strokeWidth: [20, 10, 20] // [top, (right-left), bottom]
strokeWidth: [20, 10] // [ (top-bottom), (right-left)]
strokeWidth: 20 // all sides
```

## Inheritance

### Rect  >  [UI](./UI.md)

<!-- ## API

### [Rect](../../api/classes/Rect.md) -->

## Examples

<case name="Rect" index=0 editor=false></case>

### Draw Rectangle

::: code-group
<<< @/code/display/Rect/rect.ts [Leafer]
<<< @/code/display/Rect/app/rect.ts [App]
:::

<case name="Rect" index=1 editor=false></case>

### Draw Rounded Rectangle

::: code-group
<<< @/code/display/Rect/corner.ts [Leafer]
<<< @/code/display/Rect/app/corner.ts [App]
:::

<case name="Rect" index=4 editor=false></case>

### Draw Rectangle with Different Corners

::: code-group
<<< @/code/display/Rect/corners.ts [Leafer]
<<< @/code/display/Rect/app/corners.ts [App]
:::
