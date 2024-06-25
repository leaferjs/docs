<script setup>
import Case from '/component/Case.vue'
</script>

# animate

为元素添加动画和过渡效果。

## 示例

<case name="RectAnimate" index=0></case>

### 简单动画

可以通过以下方式实现动画，了解 [move()](/reference/property/transform.md#关键方法)、 [scaleOf()](/reference/property/transform.md#关键方法)、 [rotateOf()](/reference/property/transform.md#关键方法)。

<<< @/code/animate/simple.ts

AnimateEvent.FRAME 会在每一帧的最佳时机触发。
