<script setup>
import Case from '/component/Case.vue'
</script>

# 过渡属性

## 关键属性

### attrs: `string` []

参与动画过渡的元素属性列表， 默认为所有。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 只有 x 属性参与动画过渡

::: code-group
<<< @/code/plugin/animate/options/attrs/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/attrs/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/attrs/set/ease.ts [set]
<<< @/code/plugin/animate/options/attrs/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/attrs/ease.ts [Animate]
:::
