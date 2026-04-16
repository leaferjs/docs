<script setup>
import Case from '/component/Case.vue'
</script>

# Animation

The animation system supports delay, oscillating loops, seek, and [animation events](../../plugin/in/animate/index.md#event-ianimateevents), enabling transition animations, keyframe animations, and path animations.

Animations can be created using [animation](../../reference/UI/animation.md), [transition](../../reference/UI/transition.md), the [animate() method](../../reference/UI/animate.md), or the [Animate instance](../../plugin/in/animate/index.md).

In addition, element methods such as [move()](../../reference/UI/position.md#move-addx-number-ipointdata-addy-0-transition-itranstion) and [set()](../../reference/UI/data.md#set-data-iuiinputdata-transition-itranstion) support animation transition parameters. Text also supports [count animations](../../reference/display/Text.md#文本-count-动画) and [typewriter animations](../../reference/display/Text.md#打字机动画).

:::tip Note
You must install the [animation plugin](../../plugin/in/animate/index.md) to use this feature, or install [leafer-game](../install/game/start.md) directly (which already includes the animation plugin).

:::

<case name="AnimatePage" editor=false></case>

<<< @/code/property/animation/page.ts

<case name="AnimateColor" editor=false></case>

<<< @/code/property/animation/color.ts

<case name="AnimateFrames" editor=false></case>

<<< @/code/property/animation/keyframes.ts

<case name="Arrow" index=24 editor=false></case>

<<< @/code/plugin/arrow/animate.ts

## Next Step

### [Interaction State](./state.md)
