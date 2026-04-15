# String Names

It is recommended to use event name constants first, but you can also use string names instead of event constants.

## Naming Rules

The string names corresponding to event name constants follow these rules:

```ts
PointerEvent.DOWN = 'pointer.down' // eventType.eventName, improves readability

ZoomEvent.ZOOM = 'zoom'  // when event type and name are the same, it can be omitted
ZoomEvent.START = 'zoom.start'
ZoomEvent.END = 'zoom.end'

// Exceptions:
// The following PointerEvent events do not require the "pointer" prefix
'tap'｜'double_tap'｜'long_press'｜'long_tap'
```

### Custom Names

Globally modify the string names corresponding to event constants. This is generally used to maintain compatibility with existing business code. Currently, only events that inherit from UIEvent are supported.

::: code-group
<<< @/code/event/changeName.ts
<<< @/code/event/changeName.js
:::
