# Add Attributes

The **3rd step** in creating a custom element is: **adding attributes**.

Attributes are divided into **normal attributes** and **data attributes**. Here we mainly focus on **data attributes** (attributes that can be exported to JSON).

## Steps to Add

### 1. Add the attribute in the interface

You need to add the attribute in both the input data interface and the data processing (computed data) interface (can be ignored in JS).

### 2. Add the attribute in the element

After adding a data attribute, you also need to assign an [attribute handler](#attribute-handler), otherwise it will not be included in JSON export.

## Attribute Handler

Automatically generates setter/getter functions with related business logic for data attributes. Common types:

### [boundsType](../../../../api/modules.md#boundstype)

Bounding box type.

When this property changes, it triggers **re-layout and re-rendering** of the element.

### [surfaceType](../../../../api/modules.md#boundstype)

Surface type.

When this property changes, it triggers **re-rendering only**, without layout recalculation.

### [dataType](../../../../api/modules.md#datatype)

Data type.

When this property changes, it triggers **no layout or rendering update**.

## Normal Attributes

#### createAttr ( defaultValue: `any` )

Creates a normal attribute. This data will **not be included in exported JSON**, and is only converted into getter/setter.

It can solve issues where class inheritance execution order causes overridden internal methods to fail when accessing properties.

::: code-group

```ts
import { createAttr } from '@leafer-ui/core' // import cross-platform core package

class Custom {
  @createAttr(true)
  public canUse: number // converted to getter/setter, default value is true
}
```

```js
import { createAttr } from '@leafer-ui/core' // import cross-platform core package

class Custom {
  canUse = true
}

createAttr(true)(Custom.prototype, 'canUse') // converted to getter/setter, default value is true
```

:::

## Special Handling

### set logic handling

You can define custom set logic for an element in the data processing class using `set + propertyName`.

If a data attribute has no special logic, you only need to create an empty data processing class, and everything will be handled automatically internally.

```ts
// set handler for width
export class CustomData extends RectData {
  _width: number // private variable for computed data

  // Automatically becomes the setter for width and is removed internally, so do NOT call super.setWidth(value)
  setWidth(value: number): void {
    this._width = Math.ceil(value)
    // this.__leaf can be used to access the element instance
  }
}
```

### Naming rules for data processing variables

1. Variables without underscore: computed getter/setter variables, auto-generated, cannot be manually set.

2. Single underscore variables: private computed data variables, auto-generated as needed, can be set.

3. Other variables MUST use double underscore `__` prefix, otherwise issues may occur.

```ts
// other variable naming
export class CustomData extends RectData {
  __isAutoSize: number // non-data attribute, used for business logic
}
```

## Example

::: code-group

<<< @/code/display/Custom/base/attr/index.ts

<<< @/code/display/Custom/base/attr/index.js
:::

## Next Step

### [Add Methods](./method.md)
