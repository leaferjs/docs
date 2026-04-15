# Custom Control Points

The second step of customizing the edit tool is: **custom control points**.

Control points are generally used to control the shape of elements, such as controlling the four corners of a rounded rectangle or the number of sides of a polygon.

## Custom Steps

### 1. Create control points

Create custom control points in the `constructor()` or `onCreate()` method (optional).

This method is automatically called when the edit tool instance is created.

### 2. Load control points

Add control points to the view in the `onLoad()` method.

When the user selects an element, the edit tool switches and this method is automatically called to load the control points.

### 3. Update control points

Update the position and state of control points in the `onUpdate()` method.

This method is automatically called when the user interacts with the view or elements.

### 4. Unload control points

Remove control points from the view in the `onUnload()` method.

This method is automatically called when the user switches to another edit tool.

## Inheritance

### [EditTool](../EditTool.md)

## Example

::: code-group

<<< @/code/plugin/editor/editOuter/load/index.ts

<<< @/code/plugin/editor/editOuter/load/index.js
:::

## Next Step

### [Using Edit Tool](./use.md)
