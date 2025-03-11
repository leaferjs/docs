<script setup>
import Case from '/component/Case.vue'
</script>

# 盒类型

<case name="FlowItemBox" count=2 height=160 editor=false></case>

## 关键属性

### itemBox: `'box'` | `'stroke'`

采用子元素的哪个 [盒类型](/guide/advanced/bounds.md) 来布局, 默认 box。

## 归属

### [Flow 元素](/plugin/in/flow/index.md)

## 示例

<case name="FlowItemBox" index=0 height=160 editor=false></case>

### 采用子元素的 box 盒类型布局

<<< @/code/plugin/flow/itemBox/box.ts

<case name="FlowItemBox" index=1 height=160 editor=false></case>

### 采用子元素的 stroke 盒类型布局（包含描边）

<<< @/code/plugin/flow/itemBox/stroke.ts
