<script setup>
import Case from '/component/Case.vue'
</script>

# Ending Style

## Key Property

### ending: [`IAnimateEnding`](../../../../api/modules.md#ianimateending)

The style applied when the animation ends. Default is `'auto'`.

`from` represents the starting style, and `to` represents the ending style.

```ts
type IAnimateEnding = 'auto' | 'from' | 'to'
```

## 归属

### [Animate Class](../index.md)

## Examples

### Return to initial state after animation ends

:::code-group
<<< @/code/plugin/animate/options/ending/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/ending/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/ending/set/ease.ts [set]
<<< @/code/plugin/animate/options/ending/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/ending/ease.ts [Animate]
:::

### Keep final state after animation ends

:::code-group
<<< @/code/plugin/animate/options/ending/animation/to.ts [animation]
<<< @/code/plugin/animate/options/ending/transition/to.ts [transition]
<<< @/code/plugin/animate/options/ending/set/to.ts [set]
<<< @/code/plugin/animate/options/ending/animate/to.ts [animate]
<<< @/code/plugin/animate/options/ending/to.ts [Animate]
:::
