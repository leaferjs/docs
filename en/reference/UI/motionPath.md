<script setup>
import Case from '/component/Case.vue'
</script>

# motionPath

Motion path.

It can be used together with [motion](./motion.md), [getMotionTotal()](./getMotionTotal.md), and [getMotionPoint()](./getMotionPoint.md).

::: tip Note
The [Motion Path Plugin](../../plugin/in/motion-path/index.md) must be installed to use this feature. Additionally, path animation requires the [Animation Plugin](../../plugin/in/animate/index.md).

Or you can directly install [leafer-game](../../guide/install/game/start.md) (which already includes the motion path plugin).
:::

## Key Properties

### motionPath: `boolean`

Whether to set the element as a motion path.

When enabled, other elements within the same Group can move along this path by setting their [motion](./motion.md) value. It is usually used together with the [around](./around.md) property to reposition the element.

### motionPrecision: `number`

Sets the precision of the motion path, used to control the accuracy when sampling points along the path. Defaults to `1` (meaning 1px precision).

Smaller values provide higher accuracy but consume more performance. Adjust based on actual needs.

## Belongs to

### [UI Element](../display/UI.md)

## Example

<case name="AnimateCar" editor=false></case>

<<< @/code/plugin/animate/car.ts
