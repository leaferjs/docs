<script setup>
import Case from '/component/Case.vue'
</script>

# Auto Height

<case name="FlowAutoSize" index=2 count=2 height=160 editor=false></case>

## Key Properties

### autoHeight: `number`

Auto height weight. Distributes remaining height to this element (ignores `height`), similar to Flex grow / shrink. Default is 0.

When set to a value greater than 0, the element will automatically expand its height. Usually set to 1. Percentage-based height support will be added in the future.

## Belongs To

### [UI Element](../../../../reference/display/UI.md)

## Example

<case name="FlowAutoSize" index=2 height=130 editor=false></case>

### Auto Height

<<< @/code/plugin/flow/autoHeight/height.ts

<case name="FlowAutoSize" index=3 height=130 editor=false></case>

### Auto Height and Height

<<< @/code/plugin/flow/autoHeight/both.ts
