# Custom

Customize shapes by inheriting from other elements (recommended).

This approach is suitable for scenarios where you want to add custom data properties to elements. For drawing complex effects, you can achieve it by inheriting [Pen](../Pen.md) / [Group](../Group.md).

## Example

### Inherit Rect

<<< @/code/display/Custom/Rect/index.ts

### Inherit Pen

<<< @/code/display/Custom/Pen/index.ts

### Inherit Group

In custom elements, you may not need to export child-level JSON. You can set the [childlessJSON](../Group.md#childlessjson-boolean) property to `true`.

<<< @/code/display/Custom/Group/index.ts

## Next Step

### [Path Drawing](./path.md)
