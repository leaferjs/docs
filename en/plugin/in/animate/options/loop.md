<script setup>
import Case from '/component/Case.vue'
</script>

# Loop

## Key Properties

### loop: `boolean | number`

Whether the animation should loop. You can also set the number of loops. Default is `false`.

### loopDelay: `number`

Delay time before starting the next loop cycle.

### swing?: `boolean | number`

Whether to enable swing looping. You can also set the number of cycles (number of times reaching `to`).
Pattern: `from -> to -> from -> to ...`
Default is `false`.

## 归属

### [Animate Class](../index.md)

## Examples

### Loop

:::code-group
<<< @/code/plugin/animate/options/loop/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/loop/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/loop/set/ease.ts [set]
<<< @/code/plugin/animate/options/loop/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/loop/ease.ts [Animate]
:::

### Loop 2 times

:::code-group
<<< @/code/plugin/animate/options/loop/animation/count.ts [animation]
<<< @/code/plugin/animate/options/loop/transition/count.ts [transition]
<<< @/code/plugin/animate/options/loop/set/count.ts [set]
<<< @/code/plugin/animate/options/loop/animate/count.ts [animate]
<<< @/code/plugin/animate/options/loop/count.ts [Animate]
:::

### Loop delay

:::code-group
<<< @/code/plugin/animate/options/loop/animation/delay.ts [animation]
<<< @/code/plugin/animate/options/loop/transition/delay.ts [transition]
<<< @/code/plugin/animate/options/loop/set/delay.ts [set]
<<< @/code/plugin/animate/options/loop/animate/delay.ts [animate]
<<< @/code/plugin/animate/options/loop/delay.ts [Animate]
:::

### Swing loop

:::code-group
<<< @/code/plugin/animate/options/loop/animation/swing.ts [animation]
<<< @/code/plugin/animate/options/loop/transition/swing.ts [transition]
<<< @/code/plugin/animate/options/loop/animate/swing.ts [animate]
<<< @/code/plugin/animate/options/loop/swing.ts [Animate]
:::
