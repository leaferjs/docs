# Creating the Leafer Engine

The [Leafer](../../reference/display/Leafer.md) engine is a tree-structured system (providing layout, rendering, and other management capabilities) that can run independently. As the root node, you can add child elements to it, and child elements can be further nested through [Group](../../reference/display/Group.md) / [Box](../../reference/display/Box.md), forming a complex rendering tree.

<br/>

![leafer](/svg/leafer.svg)

<br/>

## Creating a Fixed-Size Leafer

The `view` parameter supports `window`, `div`, and `canvas` DOM elements. Note that when `view` is an `id` string, you do not need to include the `#` symbol.

::: code-group
<<< @/code/basic/leafer/fixed/window.ts [window]
<<< @/code/basic/leafer/fixed/div.ts [div]
<<< @/code/basic/leafer/fixed/canvas.ts [canvas]
<<< @/code/basic/leafer/fixed/id.ts [id]
:::

## Creating an Auto-Layout Leafer

When the parent element size of the canvas changes, it will automatically resize. [Learn more](../../reference/config/app/canvas.md#auto-layout).

If the provided `view` is a `div`, that div will be used as the auto-layout container (the div must have auto width/height information).

If the provided `view` is a `canvas`, the parent element of the canvas will be used as the auto-layout container.

::: code-group
<<< @/code/basic/leafer/auto/full.ts [full]
<<< @/code/basic/leafer/auto/padding-left.ts [padding-left]
<<< @/code/basic/leafer/auto/padding.ts [padding]
:::

## Creating a Growing Leafer

The canvas size will grow and automatically fit the actual content, useful for quickly embedding Leafer elements into HTML. [Learn more](../../reference/config/app/canvas.md#auto-grow).

Note that this feature is not currently supported in the [App structure](../advanced/app.md).

::: code-group
<<< @/code/basic/leafer/grow/grow.ts [grow]
<<< @/code/basic/leafer/grow/grow-width.ts [grow-width]
<<< @/code/basic/leafer/grow/grow-height.ts [grow-height]
:::

## Details

### [Leafer](../../reference/display/Leafer.md)

## Configuration

### [Base](../../reference/config/app/base.md)    [Viewport Type](../../reference/config/app/type.md)    [Canvas](../../reference/config/app/canvas.md)    [Pointer](../../reference/config/app/pointer.md)    [Touch](../../reference/config/app/touch.md)    [Wheel](../../reference/config/app/wheel.md)

## Next Step

### [Creating Elements](./display.md)
