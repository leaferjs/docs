# dim

Dim (fade) elements by reducing opacity. It can be used together with the [bright](./bright.md) property to highlight elements, making it suitable for product walkthrough and decomposition presentations.

In addition, configuring [bright](../../plugin/in/editor/config/style.md#bright-boolean) and [dimOthers](../../plugin/in/editor/config/style.md#bright-boolean) in the graphic editor allows highlighting selected elements while dimming others.

::: tip Note
You need to install the [bright plugin](../../plugin/in/bright/index.md) to use this feature.
:::

## Key Properties

### dim: `boolean` | `number`

Dim (fade) the element and all its child elements by applying opacity reduction. Default is `false`.

When set to `true`, opacity is automatically set to `0.2`. You can also set a custom opacity value.

### dimskip: `boolean`

Skip dimming for this element, keeping it highlighted without bringing it to the top layer. Default is `false`.

If you need to render the element on top, use the [bright](./bright.md) property instead.

## Belongs to

### [UI Elements](../display/UI.md)

## Examples

### Highlight main element and dim others

::: code-group
<<< @/code/property/dim/dim.ts [Leafer]
<<< @/code/property/dim/app/dim.ts [App]
:::

### Highlight element (render on top) and dim others

::: code-group
<<< @/code/property/bright/dim.ts [Leafer]
<<< @/code/property/bright/app/dim.ts [App]
:::
