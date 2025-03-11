<script setup>
import Case from '/component/Case.vue'
</script>

# 加入布局

<case name="FlowIn" count=2 height=160 editor=false></case>

## 关键属性

### inFlow: `boolean`

元素是否加入自动布局, 默认会加入（父元素为自动布局的情况下）。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="FlowIn" index=1 height=160 editor=false></case>

### 元素不加入自动布局

<<< @/code/plugin/flow/inFlow/out.ts
