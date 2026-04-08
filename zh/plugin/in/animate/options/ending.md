<script setup>
import Case from '/component/Case.vue'
</script>

# 结束样式

## 关键属性

### ending: [`IAnimateEnding`](/api/modules.md#ianimateending)

动画结束时的样式，默认为 'auto'。

from 表示起点样式，to 表示终点样式。

```ts
type IAnimateEnding = 'auto' | 'from' | 'to'
```

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 动画结束时回到起始状态

::: code-group
<<< @/code/plugin/animate/options/ending/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/ending/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/ending/set/ease.ts [set]
<<< @/code/plugin/animate/options/ending/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/ending/ease.ts [Animate]
:::

### 动画结束时保持结束状态

::: code-group
<<< @/code/plugin/animate/options/ending/animation/to.ts [animation]
<<< @/code/plugin/animate/options/ending/transition/to.ts [transition]
<<< @/code/plugin/animate/options/ending/set/to.ts [set]
<<< @/code/plugin/animate/options/ending/animate/to.ts [animate]
<<< @/code/plugin/animate/options/ending/to.ts [Animate]
:::
