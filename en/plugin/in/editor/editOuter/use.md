# Using Edit Tool

The third step of customizing an edit tool is: **using the edit tool**.

Elements of the same type generally use the same edit tool.

## Usage Steps

### 1. Set edit tool

Use the element’s static method `setEditOuter()` to set the edit tool name.

Implementation: this automatically modifies the getter method of the element’s `editOuter` property. A function can also be passed in.

### 2. Run and test

After selecting an element, the edit tool will add a new control point.

Dragging this control point will print logs to the console, and it will follow movement when scaling the viewport.

## FAQ

### 1. Cannot access custom property value?

Add the [createAttr()](../../../../reference/display/custom/base/attr.md#普通属性) decorator to custom properties. This resolves issues where, due to JS class inheritance execution order and overridden internal methods, property values cannot be accessed.

## Inheritance

### [EditTool](../EditTool.md)

## Example

::: code-group

<<< @/code/plugin/editor/editOuter/use/index.ts

<<< @/code/plugin/editor/editOuter/use/index.js
:::

## Congratulations 🎉

You have completed the basic learning of customizing edit tools. Go ahead and try building it yourself~

### [Custom Internal Editor](../editInner/register.md)
