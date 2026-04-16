# focus

Focus state supports adding [transition effects](../transition.md).

[Box](../../display/Box.md) / [Group](../../display/Group.md) can use the [button](./state.md#button-boolean) property to let child elements automatically sync interaction states.

:::tip Note
You need to install the [state plugin](../../../plugin/in/state/index.md) to use this feature.
:::

## Key Properties

### focusStyle: [`IUIInputData`](../../../api/interfaces/IUIInputData.md)

Style applied when the element is focused via `focus()`. It is automatically restored when the element loses focus.

## Key Methods

### focus ( value?: `boolean` )

Focuses the element. Only one element in a single App can be focused at the same time. When a new element is focused, the previously focused element will lose focus.

## 归属

### [UI Element](../../display/UI.md)

## Examples

:::code-group
<<< @/code/property/state/focusStyle.ts [Leafer]
<<< @/code/property/state/app/focusStyle.ts [App]
:::
