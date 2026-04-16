<script setup>
import Case from '/component/Case.vue'
</script>

# selected

Selected state supports adding [transition effects](../transition.md).

[Box](../../display/Box.md) / [Group](../../display/Group.md) can use the [button](./state.md#button-boolean) property to let child elements automatically sync interaction states.

:::tip Note
You need to install the [state plugin](../../../plugin/in/state/index.md) to use this feature.
:::

## Key Properties

### selected: `boolean`

Whether the element is selected.

### selectedStyle: [`IUIInputData`](../../../api/interfaces/IUIInputData.md)

Style applied when `selected` is set to true. It is automatically restored when `selected` is set to false.

## 归属

### [UI Element](../../display/UI.md)

## Examples

:::code-group
<<< @/code/property/state/selectedStyle.ts [Leafer]
<<< @/code/property/state/app/selectedStyle.ts [App]
:::
