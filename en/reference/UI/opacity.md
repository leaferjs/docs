# opacity

The opacity of an element.

When setting opacity on a Group, child elements are treated as a single unit, so no cumulative transparency effect will occur.

## Key Property

### opacity: `number`

The opacity of the element, ranging from `0` to `1`. Defaults to `1`.

## Computed Property (Read-only)

### worldOpacity: `number`

The opacity of the element in the global view (affected by parent elements).

When `visible` is `false`, this value will be `0`.

## 归属

### [UI Element](../display/UI.md)

## Example

### Set opacity

:::code-group
<<< @/code/property/opacity/opacity.ts [Leafer]
<<< @/code/property/opacity/app/opacity.ts [App]
:::
