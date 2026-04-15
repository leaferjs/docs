# Register Internal Editor

The first step of customizing the internal editor is: **registering an internal editor**.

Internal editors are generally used to edit internal details such as text and paths, and are opened by double-clicking elements.

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

### 1. Register internal editor

Register the internal editor via the `registerInnerEditor()` method.

Implementation: the editor tool's tag property is used as a key to store the internal editor class.

### 2. Define tag name

Define a globally unique [tag](../../../../reference/UI/tag.md) name.

When loading an internal editor, the system uses the tag property to locate and instantiate the corresponding internal editor class.

## Inheritance

### [InnerEditor](../InnerEditor.md)

## Example

::: code-group

<<< @/code/plugin/editor/editInner/register/index.ts

<<< @/code/plugin/editor/editInner/register/index.js
:::

## Next Step

### [Custom Control Points](./load.md)
