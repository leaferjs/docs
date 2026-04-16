<script setup>
import Case from '/component/Case.vue'
</script>

# Box Type

<case name="FlowItemBox" count=2 height=160 editor=false></case>

## Key Properties

### itemBox: `'box'` | `'stroke'`

Specifies which [box type](../../../../guide/advanced/bounds.md) of child elements is used for layout. Default is `box`.

## 归属

### [Flow Element](../index.md)

## Example

<case name="FlowItemBox" index=0 height=160 editor=false></case>

### Layout using child element's box type

<<< @/code/plugin/flow/itemBox/box.ts

<case name="FlowItemBox" index=1 height=160 editor=false></case>

### Layout using child element's stroke box type (including stroke)

<<< @/code/plugin/flow/itemBox/stroke.ts
