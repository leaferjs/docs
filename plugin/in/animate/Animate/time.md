<script setup>
import Case from '/component/Case.vue'
</script>

# 计时

## 关键属性（只读）

### duration: `number`

动画的总时长（不包含 delay 和循环时间）。

### time: `number`

已经播放的时长（相对 duration，不包含 delay 和循环时间）。

### looped: `number`

已经循环播放了多少次（计数）。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

<<< @/code/plugin/animate/animate/time.ts
