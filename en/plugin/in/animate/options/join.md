<script setup>
import Case from '/component/Case.vue'
</script>

# Join Keyframe

## Key Property

### join: `boolean`

Whether to include the element’s state before the animation starts as the `from` keyframe.

When there is only one keyframe, it is forced to `true`, performing a `from -> to` animation.

When there are multiple keyframes, the default is `false`, and the animation will follow the predefined keyframe list.

## Belongs to

### [Animate Class](../index.md)

## Example

### Include pre-animation element state as from keyframe

::: code-group
<<< @/code/plugin/animate/options/join/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/join/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/join/ease.ts [Animate]
:::
