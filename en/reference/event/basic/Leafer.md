# LeaferEvent

Leafer events.

To understand the event trigger order, please refer to the [engine lifecycle](../../../guide/life/leafer.md) diagram.

::: tip Inheritance
LeaferEvent  >  [Event](../basic/Event.md)
:::

## Event Names

### LeaferEvent.START

Start engine.

`leafer.start`

### LeaferEvent.BEFORE_READY

Before engine is ready.

`leafer.before_ready`

### LeaferEvent.READY

Engine ready (first layout completed).

`leafer.ready`

### LeaferEvent.AFTER_READY

After engine is ready.

`leafer.after_ready`

### LeaferEvent.VIEW_READY

View ready (first render completed).

`leafer.view_ready`

### LeaferEvent.STOP

Stop engine.

`leafer.stop`

### LeaferEvent.RESTART

Restart engine.

`leafer.restart`

### LeaferEvent.END

End (engine is about to be destroyed).

`leafer.end`

### View Events

### LeaferEvent.TRANSFORM

Triggered when the Leafer instance viewport properties change: x, y, scaleX, scaleY, rotation, skew [viewport properties](../../display/Leafer.md#viewport-properties-viewport).

In App architecture, this event must be listened to on sub-Leafer instances such as `app.tree`.

`leafer.transform`

### LeaferEvent.MOVE

Triggered when x, y viewport properties change.

In App architecture, this event must be listened to on sub-Leafer instances such as `app.tree`.

`leafer.move`

### LeaferEvent.SCALE

Triggered when scale, scaleX, scaleY viewport properties change.

In App architecture, this event must be listened to on sub-Leafer instances such as `app.tree`.

`leafer.scale`

### LeaferEvent.ROTATE

Triggered when rotation changes.

In App architecture, this event must be listened to on sub-Leafer instances such as `app.tree`.

`leafer.rotate`

### LeaferEvent.SKEW

Triggered when skew changes.

In App architecture, this event must be listened to on sub-Leafer instances such as `app.tree`.

`leafer.skew`

### Interaction Mode

### LeaferEvent.UPDATE_MODE

Triggered when Leafer's [mode](../../display/App.md#mode-ileafermode) changes.

In App architecture, this event must be listened to on the app instance.

`leafer.update_mode`

```ts
app.on_(LeaferEvent.UPDATE_MODE, (data: { mode: ILeaferMode }) => {
  if (data.mode && data.mode !== 'normal') this.cancel()
})
```

## Inherited Events

### LeaferEvent  >  [Event](../basic/Event.md)

<!-- ## API

### [LeaferEvent](../../../api/classes/LeaferEvent.md) -->

## Example

### Listen to Leafer events

<<< @/code/event/leafer/leafer.ts

### Listen to Leafer scale change event

<<< @/code/event/leafer/scale.ts
