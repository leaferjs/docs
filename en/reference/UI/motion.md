<script setup>
import Case from '/component/Case.vue'
</script>

# motion

Motion position.

It can be used together with [motionPath](./motionPath.md), [getMotionTotal()](./getMotionTotal.md), and [getMotionPoint()](./getMotionPoint.md).

::: tip Note
The [Motion Path Plugin](../../plugin/in/motion-path/index.md) must be installed to use this feature. Additionally, path animation requires the [Animation Plugin](../../plugin/in/animate/index.md).

Or you can directly install [leafer-game](../../guide/install/game/start.md) (which already includes both the animation and motion path plugins).
:::

## Key Properties

### motion: `number` | `IUnitData`

Defines the element’s position along a [motion path](./motionPath.md). Percentage values are supported. Defaults to empty.

```ts
rect.motion = {
  type: 'percent',
  value: 0.5, // 50%
}
```

### motionVertical: `IMotionVertical`

Controls how the element is aligned vertically relative to the motion path. The default value is `'below'`.

```ts
type IMotionVertical = IMotionVerticalType | IMotionVerticalData

type IMotionVerticalType =
  | 'above' // Position the element above the motion path
  | 'center' // Position the element on the center of the motion path
  | 'below' // Position the element below the motion path
  | number // Set the offset value

interface IMotionVerticalData {
  type: IMotionVerticalType // Alignment type
  offset: number // Offset value. Moves upward only when type is 'above'; otherwise moves downward.
}

// Position the element above the motion path
rect.motionVertical = 'above'

// Offset the element 20px downward
rect.motionVertical = 20

// Position the element above the motion path and offset it 20px upward
rect.motionVertical = {
  type: 'above',
  offset: 20,
}
```

### motionRotation: `number` | `boolean`

Offset rotation along the motion path. Adds an extra angle on top of the path direction. Defaults to `0`.

When the element moves, its `rotation` is automatically updated to match the path direction.

If set to `false`, the element’s `rotation` will not be modified.

## Belongs to

### [UI Element](../display/UI.md)

## Example

<case name="AnimatePath" editor=false height=240></case>

<<< @/code/plugin/animate/path.ts [Leafer]
