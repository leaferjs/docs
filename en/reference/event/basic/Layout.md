# LayoutEvent

Layout event.

To understand the trigger order of events, please refer to the [render lifecycle](../../../guide/life/render.md) diagram.

::: tip Inheritance
LayoutEvent  >  [Event](../basic/Event.md)
:::

## Key Properties

### data: [`ILayoutBlockData`](../../../api/interfaces/ILayoutBlockData.md)[]

Layout data.

### times: `number`

Number of layout executions (the index of this layout within the current layout cycle).

## Event Names

### LayoutEvent.REQUEST

Request layout.

`layout.request`

### LayoutEvent.START

Start a new layout cycle.

`layout.start`

### LayoutEvent.BEFORE

Before a single layout pass.

`layout.before`

### LayoutEvent.LAYOUT

Single layout pass (may occur multiple times).

`layout`

### LayoutEvent.AFTER

After a single layout pass.

`layout.after`

### LayoutEvent.AGAIN

Prepare for another layout pass.

`layout.again`

### LayoutEvent.END

End of the layout cycle.

`layout.end`

## Inherited Events

### LayoutEvent  >  [Event](../basic/Event.md)

<!--
## API

### [LayoutEvent](../../../api/classes/LayoutEvent.md) -->

## Example

<<< @/code/event/leafer/layout.ts
