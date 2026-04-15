# disabled

Disabled state supports adding [transition effects](../transition.md).

[Box](../../display/Box.md) / [Group](../../display/Group.md) can use the [button](./state.md#button-boolean) property to let child elements automatically sync interaction states.

::: tip Note
You need to install the [state plugin](../../../plugin/in/state/index.md) to use this feature.
:::

## Key Properties

### disabled: `boolean`

Whether the element is disabled.

### disabledStyle: [`IUIInputData`](../../../api/interfaces/IUIInputData.md)

Style applied when `disabled` is set to true. It will automatically restore when `disabled` is set to false.

## Belongs To

### [UI Element](../../display/UI.md)

## Examples

::: code-group
<<< @/code/property/state/disabledStyle.ts [Leafer]
<<< @/code/property/state/app/disabledStyle.ts [App]
:::
