# addAttr

Add a new element property (static method). Once added, the property can be tracked for changes and exported in JSON.

## Key Properties

### addAttr ( attrName: `string`, defaultValue: [`IValue`](../../../api/modules.md#ivalue), typeFn?: [IAttrDecorator](../../../api/interfaces/IAttrDecorator.md) )

Adds a new element property (global operation). `defaultValue` is the default value (supports returning a function), and `typeFn` is a data decorator (defaults to [boundsType](../../../api/modules.md#boundstype)).

## Data Decorators

Data processing methods that automatically generate setter/getter functions with related business logic for properties.

### [boundsType](../../../api/modules.md#boundstype)

Bounds type.

When the property changes, it triggers element re-layout and re-rendering.

### [surfaceType](../../../api/modules.md#boundstype)

Surface type.

When the property changes, it triggers re-rendering only, without layout updates.

### [dataType](../../../api/modules.md#datatype)

Data type.

When the property changes, it does not trigger layout or rendering.

## Belongs To

### [UI Elements](../../display/UI.md)

## Example

### Add a custom float property to Text

::: code-group
<<< @/code/property/custom/addAttr.ts [Leafer]
<<< @/code/property/custom/app/addAttr.ts [App]
:::

### Add a dynamic float property to Text

::: code-group
<<< @/code/property/custom/addAttr2.ts [Leafer]
<<< @/code/property/custom/app/addAttr2.ts [App]
:::

### Add a dataType property to Text

::: code-group
<<< @/code/property/custom/addAttr-datatype.ts [Leafer]
<<< @/code/property/custom/app/addAttr-datatype.ts [App]
:::
