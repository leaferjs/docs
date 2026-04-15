# Element Lifecycle

The lifecycle of an element covers the entire process from creation, addition, mounting, removal, unmounting, to destruction. These can be listened to during initialization.

<br/>

![Lifecycle](/svg/ui_life.svg)

<br/>

## Example

Different states in the lifecycle are notified through [ChildEvent](../../reference/event/basic/Child.md) and [PropertyEvent](../../reference/event/basic/Property.md).

### Listening to element lifecycle events

Listen during initialization

<<< @/code/life/ui/index.ts

Listen via `on`

<<< @/code/life/ui/on.ts

## Next Step

### [Engine Lifecycle](./leafer.md)
