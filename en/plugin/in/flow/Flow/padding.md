<script setup>
import Case from '/component/Case.vue'
</script>

# 内边距

<case name="FlowPadding" count=2 height=160 editor=false></case>

## Key Properties

### padding: [`IFourNumber`](../../../../reference/interface/math/Math.md#ifournumber)

Container padding. Default is 0.

```ts
padding: [20, 10, 20, 10] // [top, right, bottom, left]
padding: [20, 10, 20] // [top, (right-left), bottom]
padding: [20, 10] // [(top-bottom), (right-left)]
padding: 20 // all sides
```

## 归属

### [Flow Element](../index.md)

## Example

<case name="FlowPadding" index=0 height=160 editor=false></case>

### Set padding

<<< @/code/plugin/flow/padding/padding.ts
