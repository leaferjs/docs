# Register Edit Tool

The first step of customizing an edit tool is: **registering an edit tool**.

Edit tools are generally used to control the size and shape of elements, and are automatically loaded when an element is selected.

## Notes

In a TypeScript environment, you need to enable decorator support in the `tsconfig.json` configuration file:

::: code-group

```json [tsconfig.json]
{
  "compilerOptions": {
    "experimentalDecorators": true // enable decorator support
  }
}
```

:::

## Registration Steps

### 1. Register edit tool

Register the edit tool via the `registerEditTool()` method.

Implementation: the edit tool's tag property is used as a key to store the edit tool class.

### 2. Define tag name

Define a globally unique [tag](../../../../reference/UI/tag.md) name.

When loading an edit tool, the system uses the tag property to locate and instantiate the corresponding edit tool class.

## Inheritance

### [EditTool](../EditTool.md)

## Example

::: code-group

<<< @/code/plugin/editor/editOuter/register/index.ts

<<< @/code/plugin/editor/editOuter/register/index.js
:::

## Next Step

### [Custom Control Points](./load.md)
