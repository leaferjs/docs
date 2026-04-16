<script setup>
import Case from '/component/Case.vue'
</script>

# Alignment

<case name="FlowAlign" count=3 height=160 editor=false></case>

<case name="FlowAlign" index=3 count=3 height=160 editor=false></case>

<case name="FlowAlign" index=6 count=3 height=160 editor=false></case>

## Key Properties

### flowAlign: [`IFlowAlign`](../../../../api/modules.md#iflowalign) | [`IFlowAxisAlign`](../../../../api/interfaces/IFlowAxisAlign.md)

Defines how child elements are aligned. Default is `top-left`.

```ts
type IFlowAlign =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'
  | IBaseLineAlign

// baseline support in future
type IBaseLineAlign = 'baseline-left' | 'baseline-center' | 'baseline-right'
```

You can further configure axis alignment within each line.

```ts
interface IFlowAxisAlign {
  content?: IFlowAlign
  x?: IAxisAlign // x-axis alignment within a row, default is from
  y?: IAxisAlign // y-axis alignment within a row, default is from
}

// from means align to the start of the axis, to means align to the end
type IAxisAlign = 'from' | 'center' | 'to'
```

Row Y-axis alignment

<case name="FlowAlign" index=9 count=3 height=160 editor=false></case>

Row X-axis alignment

<case name="FlowYAlign" index=9 count=3 height=160 editor=false></case>

## 归属

### [Flow Element](../index.md)

## Example

<case name="FlowAlign" index=0 height=130 editor=false></case>

### Top-left alignment

<<< @/code/plugin/flow/flowAlign/top-left.ts

<case name="FlowAlign" index=1 height=130 editor=false></case>

### Top-center alignment

<<< @/code/plugin/flow/flowAlign/top.ts

<case name="FlowAlign" index=2 height=130 editor=false></case>

### Top-right alignment

<<< @/code/plugin/flow/flowAlign/top-right.ts

<case name="FlowAlign" index=3 height=130 editor=false></case>

### Left alignment

<<< @/code/plugin/flow/flowAlign/left.ts

<case name="FlowAlign" index=4 height=130 editor=false></case>

### 居中对齐

<<< @/code/plugin/flow/flowAlign/center.ts

<case name="FlowAlign" index=5 height=130 editor=false></case>

### Right alignment

<<< @/code/plugin/flow/flowAlign/right.ts

<case name="FlowAlign" index=6 height=130 editor=false></case>

### Bottom-left alignment

<<< @/code/plugin/flow/flowAlign/bottom-left.ts

<case name="FlowAlign" index=7 height=130 editor=false></case>

### Bottom-center alignment

<<< @/code/plugin/flow/flowAlign/bottom.ts

<case name="FlowAlign" index=8 height=130 editor=false></case>

### Bottom-right alignment

<<< @/code/plugin/flow/flowAlign/bottom-right.ts

<case name="FlowAlign" index=9 height=130 editor=false></case>

### Center alignment with row top alignment

<<< @/code/plugin/flow/flowAlign/y/from.ts

<case name="FlowAlign" index=10 height=130 editor=false></case>

### 居中对齐，且行内居中对齐

<<< @/code/plugin/flow/flowAlign/y/center.ts

<case name="FlowAlign" index=11 height=130 editor=false></case>

### Center alignment with row bottom alignment

<<< @/code/plugin/flow/flowAlign/y/to.ts
