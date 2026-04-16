# leafer

The Leafer engine instance that the element belongs to.

## Read-only Properties

### leafer: [`Leafer`](../display/Leafer.md)

The Leafer engine instance that the element belongs to.

### app: [`App`](../display/Leafer.md) | [`Leafer`](../display/Leafer.md)

The App instance (root application) that the element belongs to. If not in an App structure, it will be a Leafer instance.

### isLeafer: `boolean`

Whether the element is a Leafer engine.

### leaferIsCreated: `boolean`

Whether the Leafer engine and its children have been [created](../display/Leafer.md#created-boolean) (initial creation completed).

### leaferIsReady: `boolean`

Whether the Leafer engine is [ready](../display/Leafer.md#ready-boolean) (initial layout completed).

### zoomLayer: [`Group`](../display/Group.md)

The Leafer engine’s [zoom/pan viewport layer](../display/Leafer.md#zoomlayer-group).

## Helper Method

### waitLeafer ( item: `function`, bind?: `object` )

Wait until the element has the [`leafer`](./leafer.md) property, then execute the `item` callback. You can bind `this` via the `bind` parameter.

If it already exists, it will be executed immediately.

## 归属

### [UI Element](../display/UI.md)

## Example

### Execute callback when element is added to the engine

:::code-group
<<< @/code/property/leafer/wait.ts [Leafer]
<<< @/code/property/leafer/app/wait.ts [App]
:::
