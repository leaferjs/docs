<script setup>
import Case from '/component/Case.vue'
</script>

# Layout Direction

<case name="Flow" count=2 height=160 editor=false></case>

<case name="Flow" index=2 count=2 height=160 editor=false></case>

## Key Properties

### flow: `boolean` | [`IFlowType`](../../../../api/modules.md#iflowtype)

Whether to enable automatic layout. You can further specify the layout axis direction as x or y. Default is x-axis.

```ts
type IFlowType = 'x' | 'y' | 'x-reverse' | 'y-reverse' // axis direction, reverse means opposite direction
```

## Belongs To

### [Flow Element](../index.md)

## Example

<case name="Flow" index=0 height=130 editor=false></case>

### Auto layout along X axis

<<< @/code/plugin/flow/flow/x.ts

<case name="Flow" index=1 height=130  editor=false></case>

### Auto layout along X axis (reverse)

<<< @/code/plugin/flow/flow/x-reverse.ts

<case name="Flow" index=2 height=130  editor=false></case>

### Auto layout along Y axis

<<< @/code/plugin/flow/flow/y.ts

<case name="Flow" index=3 height=130  editor=false></case>

### Auto layout along Y axis (reverse)

<<< @/code/plugin/flow/flow/y-reverse.ts
