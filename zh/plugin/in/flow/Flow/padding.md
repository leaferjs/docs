<script setup>
import Case from '/component/Case.vue'
</script>

# 内边距

<case name="FlowPadding" count=2 height=160 editor=false></case>

## 关键属性

### padding: [`IFourNumber`](/reference/interface/math/Math.md#ifournumber)

容器的内边距, 默认为 0。

```ts
padding: [20, 10, 20, 10] // [top, right, bottom, left]
padding: [20, 10, 20] // [top, (right-left), bottom]
padding: [20, 10] // [ (top-bottom), (right-left)]
padding: 20 // all
```

## 归属

### [Flow 元素](/plugin/in/flow/index.md)

## 示例

<case name="FlowPadding" index=0 height=160 editor=false></case>

### 设置内边距

<<< @/code/plugin/flow/padding/padding.ts
