<script setup>
import Case from '/component/Case.vue'
</script>

# PathCreator

通过绘制方法生成路径数据。

## 关键属性

### path: [`IPathCommandData`](../interface/ui/PathData.md)

数字路径数据。

所有绘制方法都是往 path 里面添加数据。

<!--@include: ../path/PathDrawer.md-->

## 示例

<case name="Pen" index=2></case>

### 创建新路径进行绘制

<<< @/code/path/drawer/curve.ts

### 在字符串路径上继续绘制

<<< @/code/path/drawer/join-string.ts

### 在数字路径上继续绘制

<<< @/code/path/drawer/join-array.ts
