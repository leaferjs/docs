<script setup>
import Case from '/component/Case.vue'
</script>

# hover

`pointer.enter` state supports adding [transition effects](../transition.md).

[Box](../../display/Box.md) / [Group](../../display/Group.md) can use the [button](./state.md#button-boolean) property to let child elements automatically sync interaction states.

::: tip Note
You need to install the [state plugin](../../../plugin/in/state/index.md) to use this feature.
:::

## Key Properties

### hoverStyle: [`IUIInputData`](../../../api/interfaces/IUIInputData.md)

Interaction style applied when the pointer enters the element. It is automatically restored when the pointer leaves.

## Belongs To

### [UI Element](../../display/UI.md)

## Examples

<case name="HoverStyle" index=0 editor=false></case>

### Darken color on mouse hover

::: code-group
<<< @/code/property/state/hoverStyle.ts [Leafer]
<<< @/code/property/state/app/hoverStyle.ts [App]
:::
