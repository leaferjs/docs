# bright

Highlight elements by rendering them on top. Can be used together with the [dim](./dim.md) property to fade other elements, suitable for scenarios such as product walkthrough demonstrations.

In addition, configuring [bright](../../plugin/in/editor/config/style.md#bright-boolean) and [dimOthers](../../plugin/in/editor/config/style.md#bright-boolean) in the graphic editor can highlight the selected element and dim other content.

:::tip Note
You need to install the [bright plugin](../../plugin/in/bright/index.md) to use this feature.
:::

## Key Properties

### bright: `boolean`

Highlight the element and render it on top. It is not affected by `dim`. Default is `false`.

## 归属

### [UI Elements](../display/UI.md)

## Examples

### Highlight and render element on top

:::code-group
<<< @/code/property/bright/bright.ts [Leafer]
<<< @/code/property/bright/app/bright.ts [App]
:::

### Highlight and render on top while dimming other elements

:::code-group
<<< @/code/property/bright/dim.ts [Leafer]
<<< @/code/property/bright/app/dim.ts [App]
:::
