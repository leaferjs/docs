# Custom

Custom shapes using paths.

## Notes

### Element Bounds

We define explicit [element bounds](../../../guide/advanced/bounds.md) for partial rendering and efficient cursor collision detection.

Depending on the situation, you may need to override the `__updateBoxBounds()` method to define the correct [boxBounds](../../UI/bounds.md#boxbounds-iboundsdata) boundary.

### Drawing Lines

If you want to draw non-closed paths, you need to change the default value of `strokeAlign` to `center` (UI default is inner stroke).

## Example

::: code-group

<<< @/code/display/Custom/line.ts [Custom Line]

<<< @/code/display/Custom/shape.ts [Custom Shape]
:::

## Next Step

### [Context Drawing](./context.md)
