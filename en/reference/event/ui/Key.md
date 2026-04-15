# KeyEvent

Keyboard event.

Keyboard events can only be listened to on the Leafer engine.

::: tip Inheritance
KeyEvent  >  [UIEvent](./UIEvent.md)  >  [Event](../basic/Event.md)
:::

## Event Names

### KeyEvent.DOWN

Key down event. Triggered continuously when holding the key.

`key.down`

### KeyEvent.HOLD <Badge type="tip" text="new" />

Key hold event. Triggered only once during a long press.

`key.hold`

### KeyEvent.UP

Key up event.

`key.up`

## Key Properties

### key: `string`

Value of the physical key.

### code: `string`

Physical key code, can distinguish between keys like `ShiftLeft` and `ShiftRight`.

## Key Methods

### Keyboard.isHoldSpaceKey(): `boolean`

Whether the Space key is being held down.

### Keyboard.isHold(code: `string`): `boolean`

Whether a specific physical key is being held down.

## Inherited Events

### KeyEvent  >  [UIEvent](./UIEvent.md)  >  [Event](../basic/Event.md)

<!--
## API

### [KeyEvent](../../../api/classes/KeyEvent.md) -->
