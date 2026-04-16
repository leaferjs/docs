# changeAttr

Modify an element property (static method), typically used to change default values.

## Key Properties

### changeAttr ( attrName: `string`, defaultValue: [`IValue`](../../../api/modules.md#ivalue) )

Modifies the default value of an element property (global operation, supports returning a function).

## 归属

### [UI Elements](../../display/UI.md)

## Example

### Change the default fill color of Text to red

All newly created Text elements will have a red fill color by default, without affecting other element types.

:::code-group
<<< @/code/property/custom/changeAttr.ts [Leafer]
<<< @/code/property/custom/app/changeAttr.ts [App]
:::

### Change the default fill color of Text to a dynamic color

:::code-group
<<< @/code/property/custom/changeAttr2.ts [Leafer]
<<< @/code/property/custom/app/changeAttr2.ts [App]
:::
