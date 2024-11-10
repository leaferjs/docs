<script setup>
import Case from '/component/Case.vue'
</script>

# Pen

像绘画一样，快速画出不同样式的路径组合。

<case name="Pen" editor=false></case>

## 关键属性

### pathElement：[`Path`](./Path.md)

当前子路径元素，setStyle() 自动创建。

## 关键方法

### setStyle ( data: `IPathInputData`)

设置画笔的样式，实际上是创建了一条 [子路径](./Path.md) 待用。

先为画笔设置样式，再绘制路径，支持 [Path](./Path.md) 和 [UI](./UI.md) 的所有属性样式。

### add ( ui: [`UI`](./UI.md))

添加图形元素。

### clear ( )

清空所有绘制的内容（移除 + 销毁）。

<!--@include: ../path/PathDrawer.md-->

## 继承元素

### [Group](./Group.md)

<!--
## API

### [Pen](/api/classes/Pen.md) -->

## 示例

<case name="Pen" index=0 editor=false></case>

### 画出不同颜色的形状

<<< @/code/display/Pen/color.ts

<case name="Pen" index=2 editor=false></case>

### 画曲线

<<< @/code/display/Pen/line.ts

<case name="Pen" index=3 editor=false></case>

### 结合图形组件

<<< @/code/display/Pen/add.ts

<case name="Pen" index=4 editor=false></case>

### 结合图片

<<< @/code/display/Pen/image.ts

<case name="Pen" index=5 editor=false></case>

### 结合文字

<<< @/code/display/Pen/text.ts
