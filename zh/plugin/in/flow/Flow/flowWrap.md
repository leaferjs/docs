<script setup>
import Case from '/component/Case.vue'
</script>

# 自动换行

<case name="FlowWrap" count=2 height=160 editor=false></case>

<case name="FlowWrap" index=2 count=2 height=160 editor=false></case>

## 关键属性

### flowWrap: [`IFlowWrap`](/api/modules.md#iflowwrap)

是否自动换行， 默认不换行。

```ts
type IFlowWrap = boolean | 'reverse' // reverse表示颠倒行顺序
```

## 归属

### [Flow 元素](/plugin/in/flow/index.md)

## 示例

<case name="FlowWrap" index=0 height=130 editor=false></case>

### 沿 X 轴自动换行

<<< @/code/plugin/flow/flowWrap/x.ts

<case name="FlowWrap" index=1 height=130  editor=false></case>

### 沿 X 轴自动换行（颠倒行顺序）

<<< @/code/plugin/flow/flowWrap/x-reverse.ts

<case name="FlowWrap" index=2 height=130  editor=false></case>

### 沿 Y 轴自动换行

<<< @/code/plugin/flow/flowWrap/y.ts

<case name="FlowWrap" index=3 height=130  editor=false></case>

### 沿 Y 轴自动换行（颠倒行顺序）

<<< @/code/plugin/flow/flowWrap/y-reverse.ts
