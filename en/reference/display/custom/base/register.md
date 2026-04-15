# Register Element

The first step of a custom element is: **registering the element**.

After successful registration, it can be imported and exported as [JSON](../../../UI/json.md).

## Notes

In a TypeScript environment, you need to enable decorator support in the `tsconfig.json` configuration file:

::: code-group

```json [tsconfig.json]
{
  "compilerOptions": {
    "experimentalDecorators": true // Enable decorator support
  }
}
```

:::

To build cross-platform elements, you need to import `@leafer-ui/core` (cross-platform core package, used to replace the `leafer-ui` package) and `@leafer-ui/interface` (interfaces) as external dependencies.

```ts
import { Rect } from '@leafer-ui/core'

export class CustomRect extends Rect {}
```

## Registration Steps

### 1. Register Element

Register the element via the `registerUI()` method.

Implementation principle: store the element class using its `tag` property as the key.

### 2. Define Tag Name

Define a globally unique [tag](../../../UI/tag.md) name.

When importing JSON, the corresponding element class is located via the `tag` property and instantiated.

## Example

::: code-group

<<< @/code/display/Custom/base/register/index.ts

<<< @/code/display/Custom/base/register/index.js
:::

## Next Step

### [Register Data](./data.md)
