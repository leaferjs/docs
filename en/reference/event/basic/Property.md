# PropertyEvent

Element property event. This event is only dispatched after [`leafer.ready`](./Leafer.md).

Event dispatch order: element itself → Leafer engine. It is also observed in the [render lifecycle](../../../guide/life/render.md).

::: tip Inheritance
PropertyEvent  >  [Event](../basic/Event.md)
:::

## Event Names

### PropertyEvent.CHANGE

Dispatched to both the element itself and the Leafer engine.

`property.change`

### PropertyEvent.LEAFER_CHANGE

Dispatched only to the Leafer engine.

`property.leafer_change`

### Additional Events

### PropertyEvent.SCROLL

Triggered when the element’s `scrollX` or `scrollY` properties change.

`property.scroll`

## Key Properties

### target: [`ILeaf`](../../../api/interfaces/ILeaf.md)

Target object.

### attrName: `string`

Property name.

### oldValue: `IValue`

Previous value.

### newValue: `IValue`

New value.

## Inherited Events

### PropertyEvent  >  [Event](../basic/Event.md)

<!-- ## API

### [PropertyEvent](../../../api/classes/PropertyEvent.md) -->

## Example

::: code-group
<<< @/code/event/leafer/property.ts
<<< @/code/event/leafer/property.js
:::
