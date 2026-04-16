<script setup>
import Case from '/component/Case.vue'
</script>

# Motion Path

Allows elements to move along another path, or perform stroke and growth animations.

It provides properties and methods such as [motionPath](../../reference/UI/motionPath.md), [motion](../../reference/UI/motion.md), [getMotionTotal()](../../reference/UI/getMotionTotal.md), and [getMotionPoint()](../../reference/UI/getMotionPoint.md).

:::tip Note
You must install the [motion path plugin](../../plugin/in/motion-path/index.md) to use this feature. Additionally, path animation requires the [animation plugin](../../plugin/in/animate/index.md).

Alternatively, you can install [leafer-game](../install/game/start.md), which already includes the motion path plugin.
:::

<case name="AnimateCar" editor=false ></case>

<<< @/code/plugin/animate/car.ts

<case name="AnimatePath" editor=false height=240></case>

<<< @/code/plugin/animate/path.ts

## Next Step

### [Robot Game Element](./robot.md)
