<script setup>
import Case from '/component/Case.vue'
</script>

# Spacing

<case name="FlowGap"  count=3 height=160 editor=false></case>

<case name="FlowGap" index=3 count=2 height=160 editor=false></case>

## Key Properties

### gap: [`IGap`](../../../../api/modules.md#igap) | [`IPointGap`](../../../../api/interfaces/IPointGap.md)

Spacing between child elements. Default is 0.

```ts
// Setting auto / fit will evenly distribute remaining space as gap.
// auto has a minimum value of 0, fit allows negative values.
type IGap = number | 'auto' | 'fit'

interface IPointGap {
  x?: IGap // set x-axis gap separately
  y?: IGap // set y-axis gap separately
}
```

## Belongs To

### [Flow Element](../index.md)

## Example

<case name="FlowGap"  index=0 height=130 editor=false></case>

### Fixed numeric gap

<<< @/code/plugin/flow/gap/gap.ts

<case name="FlowGap"  index=1 height=130 editor=false></case>

### Auto distribute remaining space as gap

<<< @/code/plugin/flow/gap/auto.ts

<case name="FlowGap"  index=2 height=130 editor=false></case>

### Auto distribute remaining space as gap (allow negative values)

<<< @/code/plugin/flow/gap/fit.ts

<case name="FlowGap"  index=3 height=130 editor=false></case>

### Set X-axis and Y-axis gaps separately

<<< @/code/plugin/flow/gap/y/gap.ts

<case name="FlowGap"  index=4 height=130 editor=false></case>

### Auto distribute remaining Y-axis space as gap

<<< @/code/plugin/flow/gap/y/auto.ts
