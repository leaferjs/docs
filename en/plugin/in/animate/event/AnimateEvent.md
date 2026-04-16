# AnimateEvent

Animation event

## Event Names

### AnimateEvent.CREATED

Animation instance created event.

`created`

### AnimateEvent.PLAY

Play animation event.

`play`

### AnimateEvent.PAUSE

Pause animation event.

`pause`

### AnimateEvent.STOP

Stop animation event.

`stop`

### AnimateEvent.SEEK

Seek animation event.

`seek`

### AnimateEvent.UPDATE

Update animation event. Triggered on every style change.

`update`

### AnimateEvent.COMPLETED

Animation completed event.

`completed`

## Example

Supports [listening and removing events](../../../../reference/UI/on.md) like elements, and also supports passing [event listener object](../options/event.md) during initialization.

:::code-group
<<< @/code/plugin/animate/options/event/on.ts [Animate]
<<< @/code/plugin/animate/options/event/animate/on.ts [animate]
:::
