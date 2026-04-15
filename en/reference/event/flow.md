# Capture / Bubble

When an interaction event is triggered, all parent nodes of the target element can receive the event. The event flow starts from the root node, enters the capture phase, reaches the target element to complete capture, then starts from the target element and enters the bubble phase, finally reaching the root node to complete bubbling.

## Illustration

![Bubble and Capture](/svg/bubble.svg)

## Listen to capture events

::: code-group
<<< @/code/event/capture/on.ts
<<< @/code/event/capture/on.js
:::

## Remove capture events

::: code-group
<<< @/code/event/capture/off.ts
<<< @/code/event/capture/off.js
:::

## Event flow

<<< @/code/event/flow.ts

## Stop event propagation

Prevent the event from propagating to parent nodes

### stop ( )

::: code-group
<<< @/code/event/stop.ts
<<< @/code/event/stop.js
:::

## Immediately stop event propagation

Prevent the event from propagating to parent nodes and sibling listeners

### stopNow ( )

::: code-group
<<< @/code/event/stopNow.ts
<<< @/code/event/stopNow.js
:::
