<script setup>
import Case from '/component/Case.vue'
</script>

# 自动换行

<case name="FlowWrap" count=2 height=160 editor=false></case>

<case name="FlowWrap" index=2 count=2 height=160 editor=false></case>

## Key Properties

### flowWrap: [`IFlowWrap`](../../../../api/modules.md#iflowwrap)

是否自动换行， 默认不换行。

```ts
type IFlowWrap = boolean | 'reverse' // reverse means reversed row order
```

## 归属

### [Flow Element](../index.md)

## Example

<case name="FlowWrap" index=0 height=130 editor=false></case>

### Auto wrap along X axis

<<< @/code/plugin/flow/flowWrap/x.ts

<case name="FlowWrap" index=1 height=130  editor=false></case>

### Auto wrap along X axis (reverse row order)

<<< @/code/plugin/flow/flowWrap/x-reverse.ts

<case name="FlowWrap" index=2 height=130  editor=false></case>

### Auto wrap along Y axis

<<< @/code/plugin/flow/flowWrap/y.ts

<case name="FlowWrap" index=3 height=130  editor=false></case>

### Auto wrap along Y axis (reverse row order)

<<< @/code/plugin/flow/flowWrap/y-reverse.ts
