<script setup>
import Case from '/component/Case.vue'
</script>

# Box

创建 Box。支持 [Group](./Group.md) 的功能和 [Rect](./Rect.md) 的外观样式， 类似于 HTML5 中的 DIV，可以不断嵌套 。

<case name="Box" editor=false></case>

## 关键属性

### width: `number`

宽度，不设置宽高时会自适应内容。

### height: `number`

高度，不设置宽高时会自适应内容。

### overflow: `IOverflow`

如何显示超出宽高的内容，默认为 show。

```ts
type IOverflow = 'show' | 'hide'
```

## 滚动属性

用于 Box / Frame 滚动内部元素，可实现滚动条效果。

### scrollX: `number`

内部元素在 x 轴上的滚动量。

### scrollY: `number`

内部元素在 y 轴上的滚动量。

## 编辑属性

### textBox: `boolean`

是否为文本框，默认为 false。

为文本框时，可在编辑器中双击 Box 元素直接编辑内部的 [editable](/reference/property/editable.md) 子文本，适用于输入框、便利贴、脑图、流程图等编辑文本的场景。

## 路径模式

### [path 优先模式](/reference/property/path.md)

## 继承

### [Group](./Group.md) + [Rect](./Rect.md)

<!-- ## API

### [Box](/api/classes/Box.md) -->

## 示例

<case name="Box" index=0 editor=false></case>

### 创建 Box

<<< @/code/display/Box/create.ts

<case name="Box" index=1 editor=false></case>

### 隐藏超出宽高的内容

<<< @/code/display/Box/overflow.ts

<case name="Box" index=6 editor=false></case>

### 创建自适应背景的文本

<<< @/code/display/Box/text.ts
