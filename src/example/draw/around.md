<script setup>
import Case from '/component/Case.vue'
</script>

# 居中绘制内容

绘制海报的时候，有一些元素是居中轴显示的，内容的宽度会随时变化，这个时候我们可以 通过居中绘制，让内容以这个坐标点为中心自适应对齐，深入了解 [around](/reference/property/around.md) 属性。

<case name="Around" index=0 editor=false></case>

### 围绕坐标(50,50) 为中心绘制红色矩形

<<< @/code/property/around/center.ts
