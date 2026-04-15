# Register Data

The **2nd step** in creating a custom element is: **registering the data processing class**.

The element’s `ui.__` property is automatically created as an instance of the data processing class, which is used to compute and store multiple states of data attributes.

## Registration Steps

### 1. Define data interfaces

You need to define interfaces for both input data and computed data (can be ignored in JS).

**Naming conventions:**

Input data interface: `I + ElementName + InputData`, e.g. `IRectInputData`

Data processing interface: `I + ElementName + Data`, e.g. `IRectData`

### 2. Define the data processing class

This class should extend the previously defined base data class.

**Naming convention:** `ElementName + Data`, e.g. `RectData`

### 3. Register the data processing class

Make sure to register it **before other data attributes**. The data instance will be automatically created when the element is instantiated.

### 4. Define initial input data

This is mainly used for TypeScript type checking and autocomplete when creating elements (can be ignored in JS).

## Understanding Data Structure

### [Data layering structure](../../../UI/data.md#数据分层结构)

## Example

::: code-group

<<< @/code/display/Custom/base/data/index.ts

<<< @/code/display/Custom/base/data/index.js
:::

## Next Step

### [Add Attributes](./attr.md)
