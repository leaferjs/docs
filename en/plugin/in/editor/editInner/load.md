# Custom Control Points

The second step of customizing the internal editor is: **custom control points**.

Control points are generally used to adjust path nodes. Text editors need to replace control points by creating DOM elements, allowing full customization.

## Custom Steps

### 1. Create control points

Create custom control points in the `constructor()` or `onCreate()` method.

This method is automatically called when the internal editor instance is created.

### 2. Load control points

Add control points to the view in the `onLoad()` method.

When the user double-clicks an element, the internal editor opens and this method is automatically called to load the control points.

### 3. Update control points

Update the position and state of control points in the `onUpdate()` method.

当用户操作视图、元素时，会自动调用此方法更新。

### 4. Unload control points

Remove control points from the view in the `onUnload()` method.

This method is automatically called when the user exits the internal editor.

Path editors generally exit via a confirm button click, while text editors usually exit automatically when clicking outside the page.

## Inheritance

### [InnerEditor](../InnerEditor.md)

## Example

::: code-group

<<< @/code/plugin/editor/editInner/load/index.ts

<<< @/code/plugin/editor/editInner/load/index.js
:::

## Next Step

### [Using the Internal Editor](./use.md)
