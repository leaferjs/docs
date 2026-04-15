# Engine Lifecycle

From creating the engine to termination, it goes through processes such as creating elements, starting the engine, initial layout, engine ready, first render, view ready, [multiple render lifecycles](render.md), stop/restart, destruction, and more—forming the lifecycle of an engine.

<br/>

![Engine Lifecycle](/svg/leafer_life.svg)

<br/>

## Example

Different states in the lifecycle are notified through [LeaferEvent](../../reference/event/basic/Leafer.md). You can also listen to these events via the Leafer instance to implement your own product logic.

### Listen to ready event

<<< @/code/event/leafer/leafer.ts

## Next Step

### [Render Lifecycle](./render.md)
