<script setup>
import Case from '/component/Case.vue'
</script>

# 定位

## 关键方法

### seek ( time: `number` | [`IPercentData`](/api/interfaces/IPercentData.md) )

定位跳转到指定时间，支持设置具体时间（以秒为单位），或百分比（相对 duration 总时长）。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 使用秒数定位跳转

<<< @/code/plugin/animate/animate/seek/value.ts

### 使用百分比定位跳转

<<< @/code/plugin/animate/animate/seek/percent.ts
