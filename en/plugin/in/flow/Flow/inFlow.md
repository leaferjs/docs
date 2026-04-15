<script setup>
import Case from '/component/Case.vue'
</script>

# Join Layout

<case name="FlowIn" count=2 height=160 editor=false></case>

## Key Properties

### inFlow: `boolean`

Whether the element participates in automatic layout. By default, it is included (when the parent uses auto layout).

## Belongs To

### [UI Element](../../../../reference/display/UI.md)

## Example

<case name="FlowIn" index=1 height=160 editor=false></case>

### Element excluded from auto layout

<<< @/code/plugin/flow/inFlow/out.ts
