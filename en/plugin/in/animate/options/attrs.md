<script setup>
import Case from '/component/Case.vue'
</script>

# Transition Attributes

## Key Property

### attrs: `string[]`

List of element attributes participating in the animation transition. Defaults to all attributes.

## 归属

### [Animate Class](../index.md)

## Example

### Only x attribute participates in animation transition

:::code-group
<<< @/code/plugin/animate/options/attrs/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/attrs/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/attrs/set/ease.ts [set]
<<< @/code/plugin/animate/options/attrs/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/attrs/ease.ts [Animate]
:::
