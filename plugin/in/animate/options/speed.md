<script setup>
import Case from '/component/Case.vue'
</script>

# 速度

## 关键属性

### speed: `number`

动画的播放倍速，默认为 1。

1 个 10 秒的动画，如果 speed 为 5，则 2 秒就能播完。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 以 5 倍速播放动画

::: code-group
<<< @/code/plugin/animate/options/speed/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/speed/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/speed/set/ease.ts [set]
<<< @/code/plugin/animate/options/speed/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/speed/ease.ts [Animate]
:::
