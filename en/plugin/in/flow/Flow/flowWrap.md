<script setup>
import Case from '/component/Case.vue'
</script>

# Auto Wrap

<case name="FlowWrap" count=2 height=160 editor=false></case>

<case name="FlowWrap" index=2 count=2 height=160 editor=false></case>

## Key Properties

### flowWrap: [`IFlowWrap`](../../../../api/modules.md#iflowwrap)

Whether to enable automatic wrapping. Default is no wrapping.

```ts
type IFlowWrap = boolean | 'reverse' // reverse means reversed row order
```

## Belongs To

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
