<script setup>
import Case from '/component/Case.vue'
</script>

# 加入关键帧

## 关键属性

### join: `boolean`

是否加入动画前的元素状态作为 from 关键帧。

只有一个关键帧时，强制为 true，进行 from -> to 动画。

多个关键帧时，默认为 false，会按预设的关键帧列表进行动画。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 加入动画前的元素状态作为 from 关键帧

::: code-group
<<< @/code/plugin/animate/options/join/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/join/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/join/ease.ts [Animate]
:::
