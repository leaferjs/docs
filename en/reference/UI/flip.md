# flip

Mirror / flip an element.

## Core Method

### flip(axis: `'x'` | `'y'`, transition?: [`ITranstion`](./transition.md#transition-itranstion))

Flip (mirror) the element along a given axis in the **world coordinate system**.

The `transition` parameter enables animated transitions via the animation system.

```ts
// Flip along X axis
rect.flip('x')

// With animation transition
rect.flip('x', true)

rect.flip('x', 2) // 2-second transition
```

## 归属

### [UI Element](../display/UI.md)

## Examples

### 按 X 轴镜像元素

:::code-group
<<< @/code/property/flip/flip.ts [Leafer]
<<< @/code/property/flip/app/flip.ts [App]
:::

### Flip along X axis with transition animation

:::code-group
<<< @/code/property/flip/transition.ts [Leafer]
<<< @/code/property/flip/app/transition.ts [App]
:::
