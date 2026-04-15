# Application and Engine Configuration

### [Basics](./base.md)     [Viewport Type](./type.md)     [Canvas](./canvas.md)     [Pointer](./pointer.md)     [Multi-touch](./multiTouch.md)     [Touch](./touch.md)     [Wheel](./wheel.md)     Panning View     [Zoom View](./zoom.md)

##

Panning view related configuration. Changes made during engine runtime will take effect immediately via [app.config.move](../../display/Leafer.md#config-ileaferconfig).

:::tip Note
Under the [App structure](../../../guide/advanced/app.md), settings can only be configured on the [App](../../display/App.md) config.
:::

## Key Properties

### move.disabled: `boolean`

Whether to disable panning view interaction. Default is false.

### move.scroll: `boolean` ｜ `'x'` | `'y'` | `'limit'` | `'x-limit'` | `'y-limit'`

Whether to apply constraints to panning scroll behavior. Default is false.

Set to true: only one direction can be scrolled at a time.

Set to 'x': only horizontal scrolling is allowed.

Set to 'y': only vertical scrolling is allowed.

Set to 'limit': restrict scrolling within content boundaries, similar to browser/document-style scrolling behavior.

Set to 'x-limit': horizontal scrolling only, with boundary constraints.

Set to 'y-limit': vertical scrolling only, with boundary constraints.

## move.scrollSpread: [`IFourNumber`](../../interface/math/Math.md#ifournumber)

When restricting scroll range, this allows extending the boundary. Four directional values can be set individually. Default is 0.

```ts
scrollSpread: [20, 10, 20, 10] // [top, right, bottom, left]
scrollSpread: [20, 10, 20] // [top, (right-left), bottom]
scrollSpread: [20, 10] // [ (top-bottom), (right-left)]
scrollSpread: 20 // all
```

### move.drag: `boolean` | `'auto'`

Whether dragging triggers view panning. Default is false.

If set to true, all element interactions are disabled and any drag will pan the view. Typically used in preview mode.

If set to 'auto', element interactions are preserved. Draggable/editable elements can still be moved independently, while dragging on other areas will pan the view.

### move.dragAnimate: `boolean`

Whether to enable inertia animation when drag ends. Default is false.

### move.holdSpaceKey: `boolean`

Whether holding the Space key enables view panning via drag. Default is true.

### move.holdMiddleKey: `boolean`

Whether holding the middle mouse button enables view panning. Default is true.

### move.holdRightKey: `boolean`

Whether holding the right mouse button enables view panning. Default is false.

### move.dragEmpty: `boolean`

Whether dragging empty space triggers view panning. Default is false.

### move.dragOut: `boolean` | `number`

Whether the view should auto-pan when dragging an element to the edge of the viewport. Default is false.

When set to a number, it defines the pixel distance from the edge that triggers auto-panning.

### move.autoDistance: `number`

The distance (in pixels) the view auto-pans per frame when dragOut is active. Default is 2.

## Example

### Pan view directly during dragging (preview mode)

::: code-group
<<< @/code/app/config/app/drag.ts [App]
<<< @/code/app/config/drag.ts [Leafer]
:::

### Auto-pan when dragging to edges

::: code-group
<<< @/code/app/config/app/autoMove.ts [App]
<<< @/code/app/config/autoMove.ts [Leafer]
:::
