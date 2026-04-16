# Using the Internal Editor

The third step of customizing the internal editor is: **using the internal editor**.

Elements of the same type generally use the same internal editor.

## Usage Steps

### 1. Set internal editor

Use the element’s static method `setEditInner()` to set the name of the internal editor.

Implementation: this automatically modifies the getter method of the element’s `editInner` property. A function can also be passed in.

### 2. Run and test

After selecting and double-clicking an element, the internal editor will open. It includes a control point and a confirm button.

Dragging this control point will print logs to the console, and it will follow movement when scaling the viewport.

Clicking the confirm button will exit the internal editor.

## FAQ

### 1. Cannot access custom property value?

Add the [createAttr()](../../../../reference/display/custom/base/attr.md#普通属性) decorator to custom properties. This resolves issues where, due to JS class inheritance execution order and overridden internal methods, property values cannot be accessed.

## Inheritance

### [InnerEditor](../InnerEditor.md)

## Example

::: code-group

<<< @/code/plugin/editor/editInner/use/index.ts

<<< @/code/plugin/editor/editInner/use/index.js
:::

## Congratulations 🎉

You have completed the basic learning of customizing the internal editor. Go ahead and try building it yourself~

### [Custom Editing Tool](../editOuter/register.md)
