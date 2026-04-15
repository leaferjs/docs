# Custom

Custom shapes using `canvas.context`.

You need to manually handle element bounds, cursor hit testing, and drawing styles. This is typically used for integrating other canvas libraries.

## Notes

### Element Bounds

We define explicit [element bounds](../../../guide/advanced/bounds.md) for partial rendering and efficient cursor collision detection.

Depending on the situation, you may need to override the `__updateBoxBounds()` method to define the correct [boxBounds](../../UI/bounds.md#boxbounds-iboundsdata) boundary.

### Cursor Hit Testing

We first check whether the cursor intersects the element bounds. Only then do we perform detailed hit testing, enabling fast picking of elements from millions of items.

Depending on the situation, you may need to override the element’s `__drawHitPath()` method to define the hit-testing path.

### Drawing Styles

To improve rendering performance, `save()` and `restore()` are not called on every draw. Please note the following:

1. When drawing strokes, you must call `canvas.setStrokeOptions()` to reset the current stroke style (e.g. `dashPattern`, `strokeCap`, etc.), otherwise previous stroke styles may be applied.

2. When using clipping or filters, you must manually restore the state, otherwise it may affect the rendering of subsequent elements.

## Example

<<< @/code/display/Custom/demo.ts

## Congratulations 🎉

You have completed the full custom element tutorial.
