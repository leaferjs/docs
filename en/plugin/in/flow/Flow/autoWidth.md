<script setup>
import Case from '/component/Case.vue'
</script>

# Auto Width

<case name="FlowAutoSize" count=2 height=160 editor=false></case>

## Key Properties

### autoWidth: `number`

Auto width weight. Distributes remaining width to this element (ignores `width`), similar to Flex grow / shrink. Default is 0.

When set to a value greater than 0, the element will automatically expand its width. Usually set to 1. Percentage-based width support will be added in the future.

## 归属

### [UI Element](../../../../reference/display/UI.md)

## Example

<case name="FlowAutoSize" index=0 height=130 editor=false></case>

### Auto Width

<<< @/code/plugin/flow/autoWidth/width.ts

<case name="FlowAutoSize" index=1 height=130 editor=false></case>

### Auto Width and Height

<<< @/code/plugin/flow/autoWidth/both.ts
