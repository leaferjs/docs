<script setup>
import Case from '/component/Case.vue'
</script>

# 自动宽度

<case name="FlowAutoSize" count=2 height=160 editor=false></case>

## 关键属性

### autoWidth: `number`

自动宽度权重，分配剩余宽度给此元素（忽略 width），类似 Flex 的 grow / shrink，默认为 0。

设为大于 0 的值会自动扩充宽度，一般设为 1，后面会支持百分比宽度。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="FlowAutoSize" index=0 height=130 editor=false></case>

### 自动宽度

<<< @/code/plugin/flow/autoWidth/width.ts

<case name="FlowAutoSize" index=1 height=130 editor=false></case>

### 自动宽度和高度

<<< @/code/plugin/flow/autoWidth/both.ts
