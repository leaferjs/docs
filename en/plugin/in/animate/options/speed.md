<script setup>
import Case from '/component/Case.vue'
</script>

# Speed

## Key Property

### speed: `number`

Animation playback speed multiplier. Default is `1`.

1 个 10 秒的动画，如果 speed 为 5，则 2 秒就能播完。

## 归属

### [Animate Class](../index.md)

## Example

### Play animation at 5x speed

:::code-group
<<< @/code/plugin/animate/options/speed/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/speed/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/speed/set/ease.ts [set]
<<< @/code/plugin/animate/options/speed/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/speed/ease.ts [Animate]
:::
