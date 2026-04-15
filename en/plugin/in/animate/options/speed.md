<script setup>
import Case from '/component/Case.vue'
</script>

# Speed

## Key Property

### speed: `number`

Animation playback speed multiplier. Default is `1`.

For example, a 10-second animation with `speed = 5` will finish in 2 seconds.

## Belongs to

### [Animate Class](../index.md)

## Example

### Play animation at 5x speed

::: code-group
<<< @/code/plugin/animate/options/speed/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/speed/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/speed/set/ease.ts [set]
<<< @/code/plugin/animate/options/speed/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/speed/ease.ts [Animate]
:::
