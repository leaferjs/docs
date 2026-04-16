<script setup>
import Case from '/component/Case.vue'
</script>

# press

`pointer.down` state supports adding [transition effects](../transition.md).

[Box](../../display/Box.md) / [Group](../../display/Group.md) can use the [button](./state.md#button-boolean) property to let child elements automatically sync interaction states.

:::tip Note
You need to install the [state plugin](../../../plugin/in/state/index.md) to use this feature.
:::

## Key Properties

### pressStyle: [`IUIInputData`](../../../api/interfaces/IUIInputData.md)

光标按下时的交互样式， 抬起后自动还原。

## 归属

### [UI Element](../../display/UI.md)

## Examples

<case name="PressStyle" index=0   editor=false></case>

### Darken color on mouse press

:::code-group
<<< @/code/property/state/pressStyle.ts [Leafer]
<<< @/code/property/state/app/pressStyle.ts [App]
:::
