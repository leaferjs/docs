# Event Handling

It provides a complete event handling mechanism similar to HTML, supporting [capture/bubble](../../reference/event/flow.md) phases, and also supports [simulated interaction](../../reference/event/simulation.md).

## Listening to Events

Add mouse enter/leave event effects to a rectangle:

:::code-group
<<< @/code/basic/event/hover.ts#listen
<<< @/code/basic/event/hover.js#listen
:::

## Initializing Events

Supports passing an [event](../../reference/UI/on.md) object during initialization (cannot be exported as JSON), for quickly binding events:

:::code-group
<<< @/code/basic/event/event.ts#listen
<<< @/code/basic/event/event.js#listen
:::

## Using Strings

Learn about the [naming conventions](../../reference/event/name.md) of event type strings.

```ts
rect.on('pointer.enter', onEnter)
rect.on('pointer.leave', onLeave)
```

## Removing Events

```ts
rect.off('pointer.enter', onEnter)
rect.off('pointer.leave', onLeave)
```

## Dispatching Events

```ts
rect.emit('pointer.enter', { current: rect })
```

## Understanding Element Interaction Properties

| Name                                                                              | Description                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Interaction                                                                       |                                                                                                                                                                                                                              |
| [hittable](../../reference/UI/hit.md)                                             | Whether the element responds to mouse, touch, or other pointer interactions, similar to the CSS `pointer-events` property                                                                                                    |
| [hitChildren](../../reference/UI/hitChildren.md)                                  | Further defines interactivity of child elements                                                                                                                                                                              |
| [hitSelf](../../reference/UI/hitSelf.md)                                          | Further defines interactivity of the element itself (excluding children)                                                                                                                                  |
| [hitFill](../../reference/UI/hitFill.md)                                          | Further defines interactivity of the element's [fill](../../reference/UI/fill.md). Setting to `pixel` enables pixel-level detection for PNG/SVG images, filtering transparent pixels                         |
| [hitStroke](../../reference/UI/hitStroke.md)                                      | Further defines interactivity of the element's [stroke](../../reference/UI/stroke.md)                                                                                                                                        |
| [editable](../../reference/UI/editable.md)                                        | Whether editing is allowed; requires installing the [graphic editor plugin](../../plugin/in/editor/index.md)                                                                                                                 |
| [draggable](../../reference/UI/draggable.md)                                      | 是否允许拖拽                                                                                                                                                                                                                       |
| [dragBounds](../../reference/UI/dragBounds.md)                                    | Restricts the draggable area of the element                                                                                                                                                                                  |
| [dragBoundsType](../../reference/UI/dragBounds.md#dragboundstype-idragboundstype) | Type of drag boundary, whether inside or outside the element                                                                                                                                                                 |
| [cursor](../../reference/UI/cursor.md)                                            | Cursor style when hovering over the element, supports all [CSS cursor names](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)                                                                                        |
| States                                                                            |                                                                                                                                                                                                                              |
| [states](../../reference/UI/state/state.md#states-istates)                        | State list for predefining complex element/game states, supporting switching at any time, and [transition effects](../../reference/UI/transition.md); requires installing the [state plugin](../../plugin/in/state/index.md) |
| [state](../../reference/UI/state/state.md#state-string)                           | Current state; requires installing the [state plugin](../../plugin/in/state/index.md)                                                                                                                                        |
| [button](../../reference/UI/state/state.md#button-boolean)                        | Marks element as a button; child elements will automatically sync interaction states such as state, hover, press; requires installing the [state plugin](../../plugin/in/state/index.md)                                     |
| [hoverStyle](../../reference/UI/state/hover.md#hoverstyle-iuiinputdata)           | Style applied when hovered; automatically restored on mouse leave; requires installing the [state plugin](../../plugin/in/state/index.md)                                                                                    |
| [pressStyle](../../reference/UI/state/press.md#pressstyle-iuiinputdata)           | Style applied when pressed; automatically restored on release; requires installing the [state plugin](../../plugin/in/state/index.md)                                                                                        |
| [focusStyle](../../reference/UI/state/focus.md#focusstyle-iuiinputdata)           | Style applied when focused via `focus()`; restored when focus is lost; requires installing the [state plugin](../../plugin/in/state/index.md)                                                                                |
| [selected](../../reference/UI/state/selected.md#selected-boolean)                 | Whether selected; requires installing the [state plugin](../../plugin/in/state/index.md)                                                                                                                                     |
| [selectedStyle](../../reference/UI/state/selected.md#selectedstyle-iuiinputdata)  | Style applied when `selected` is true; restored when false; requires installing the [state plugin](../../plugin/in/state/index.md)                                                                                           |
| [disabled](../../reference/UI/state/disabled.md#disabled-boolean)                 | Whether disabled; requires installing the [state plugin](../../plugin/in/state/index.md)                                                                                                                                     |
| [disabledStyle](../../reference/UI/state/disabled.md#disabledstyle-iuiinputdata)  | Style applied when `disabled` is true; restored when false; requires installing the [state plugin](../../plugin/in/state/index.md)                                                                                           |

## Element Event Methods

| Name                                                                                                                                                                         | Description                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [on()](../../reference/UI/on.md#on-type-string-string-listener-ieventlistener-options-ieventoption)                                                       | Listen to events                                                                                                                                                                |
| [on\_()](../../reference/UI/on.md#on-type-string-string-listener-ieventlistener-bind-iobject-options-ieventoption-ieventlistenerid) | Listen to events with a bound `this` context for the listener, returns an event id, used with [off\_()](../../reference/UI/off.md#off) |
| [once()](../../reference/UI/on.md#once-type-string-string-listener-ieventlistener-capture-boolean)                                                        | Listen to an event only once                                                                                                                                                    |
| [off()](../../reference/UI/off.md)                                                                                                                        | Remove event listener                                                                                                                                                           |
| [off\_()](../../reference/UI/off.md)                                                                                                | Remove event listener, used with [on\_()](../../reference/UI/on.md#on_)                                                                |
| [emit()](../../reference/UI/emit.md)                                                                                                                      | Manually dispatch event                                                                                                                                                         |
| [emitEvent()](../../reference/UI/emit.md)                                                                                                                 | Manually dispatch event; parameter must be an `IEvent` object                                                                                                                   |

## Related Events

### [Naming Rules](../../reference/event/name.md)    [Capture/Bubble](../../reference/event/flow.md)    [Simulated Interaction](../../reference/event/simulation.md)

## Common Events

### [PointerEvent](../../reference/event/ui/Pointer.md)    [DragEvent](../../reference/event/ui/Drag.md)    [DropEvent](../../reference/event/ui/Drop.md)    [SwipeEvent](../../reference/event/ui/Swipe.md)

### [MoveEvent](../../reference/event/ui/Move.md)    [ZoomEvent](../../reference/event/ui/Zoom.md)    [RotateEvent](../../reference/event/ui/Rotate.md)

### [ImageEvent](../../reference/event/basic/Image.md)    [ChildEvent](../../reference/event/basic/Child.md)    [PropertyEvent](../../reference/event/basic/Property.md)    [BoundsEvent](../../reference/event/basic/Bounds.md)

### [LeaferEvent](../../reference/event/basic/Leafer.md)    [ResizeEvent](../../reference/event/basic/Resize.md)    [KeyEvent](../../reference/event/ui/Key.md)

### [RenderEvent](../../reference/event/basic/Render.md)    [LayoutEvent](../../reference/event/basic/Layout.md)    [WatchEvent](../../reference/event/basic/Watch.md)

## Next Step

### [Remove Elements](./remove.md)
