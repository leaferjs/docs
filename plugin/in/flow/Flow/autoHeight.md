<script setup>
import Case from '/component/Case.vue'
</script>

# 自动高度

<case name="FlowAutoSize" index=2 count=2 height=160 editor=false></case>

## 关键属性

### autoHeight: `number`

自动高度权重，分配剩余高度给此元素（忽略 height），类似 Flex 的 grow / shrink，默认为 0。

设为大于 0 的值会自动扩充高度，一般设为 1，后面会支持百分比高度。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="FlowAutoSize" index=2 height=130 editor=false></case>

### 自动高度

<<< @/code/plugin/flow/autoHeight/height.ts

<case name="FlowAutoSize" index=3 height=130 editor=false></case>

### 自动高度和高度

<<< @/code/plugin/flow/autoHeight/both.ts
