<script setup>
import Case from '/component/Case.vue'
</script>

# Auto Layout

Similar to Flex, the auto layout system is simpler and more intuitive, allowing you to quickly arrange content automatically.

::: tip Note
You must install the [auto layout plugin](../../plugin/in/flow/index.md) to use this feature.
:::

<br/>

Direction

<case name="Flow" count=6 height=160 editor=false></case>

<br/>

Wrap

<case name="FlowWrap" count=2 height=160 editor=false></case>

<case name="FlowWrap" index=2 count=2 height=160 editor=false></case>

<br/>

Alignment

<case name="FlowAlign" count=3 height=160 editor=false></case>

<case name="FlowAlign" index=3 count=3 height=160 editor=false></case>

<case name="FlowAlign" index=6 count=3 height=160 editor=false></case>

<br/>

Inline alignment

<case name="FlowYAlign" index=9 count=3 height=160 editor=false></case>

<case name="FlowAlign" index=9 count=3 height=160 editor=false></case>

<br/>

Spacing

<case name="FlowGap" count=3 height=160 editor=false></case>

<case name="FlowGap" index=3 count=2 height=160 editor=false></case>

<br/>

Auto size

<case name="FlowAutoSize" count=2 height=160 editor=false></case>

<case name="FlowAutoSize" index=2 count=2 height=160 editor=false></case>

<<< @/code/plugin/flow/x.ts

## Next Step

### [Graphics Editor](./editor.md)
