# Application and Engine Configuration

### [Basics](./base.md)     Viewport Type     [Canvas](./canvas.md)     [Pointer](./pointer.md)     [Multi-touch](./multiTouch.md)     [Touch](./touch.md)     [Wheel](./wheel.md)     [Panning View](./move.md)     [Zoom View](./zoom.md)

##

Initialize viewport type. It cannot be changed during runtime.

:::tip Note
Under the [App structure](../../../guide/advanced/app.md), this must be configured on the config of a child Leafer layer (e.g. ground, tree, sky layers).
:::

## Key Properties

### type: `string`

Viewport type with built-in scene logic. Default is block scene type.

Current available types include block, viewport, custom, design, document. More scene types will be added in the future.

```ts
type ILeaferType =
  | 'block' // block-style embedded scene
  | 'viewport' // basic viewport scene
  | 'editor' // graphic editing scene
  | 'design' // design scene
  | 'board' // whiteboard scene
  | 'document' // document scene
  | 'app' // application scene
  | 'website' // website scene
  | 'game' // game scene
  | 'player' // animation playback scene
  | 'chart' // chart scene
  | 'custom' // custom
```

## block scene type

Elements inside [Leafer](../../display/Leafer.md) can behave like standard HTML block elements embedded in a browser page and respond to interaction events.

On mobile devices, when elements are not draggable/editable and no DragEvent.DRAG listener is attached, dragging will directly scroll the page. See [touch configuration](./touch.md#touchpreventdefault-boolean-auto).

<<< @/code/app/config/type/block.ts

## viewport type

Zoom and pan view via mouse wheel or touchpad gestures. This will also disable the native browser right-click menu ([pointer.preventDefaultMenu](./pointer.md#pointer-preventdefaultmenu-boolean)).

### Pan operations

1. Mobile / touchpad: two-finger drag.
2. Mouse: scroll wheel (vertical), Shift + scroll wheel (horizontal).

See [app.config.move](./move.md) for more configuration options covering various scenarios.

### Zoom operations

1. Mobile / touchpad: pinch gesture.
2. Mouse: Ctrl / Command + scroll wheel.

See [app.config.zoom](./zoom.md) / [app.config.wheel](./wheel.md) for more configuration options.

## custom viewport type

Based on the [viewport type](#viewport-type), you can customize zoom and pan handling logic.

## design viewport type

Based on the [viewport type](#viewport-type), adds support for holding the middle mouse button or Space + drag to pan the view, and limits zoom range to 0.01–256. Suitable for graphic editing and design tools.

## document viewport type

Based on the [viewport type](#viewport-type), restricts scrolling within valid content areas and limits zoom range to 1–∞. Suitable for document-based applications.
