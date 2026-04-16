<script setup>
import Case from '/component/Case.vue'
</script>

# Events

## Key Property

### event: [`IAnimateEvents`](../../../../api/interfaces/IAnimateEvent.md)

Event listener object. Also supports the [AnimateEvent](../event/AnimateEvent.md) style.

```ts
interface IAnimateEvents {
  created?: IAnimateEventFunction // animation instance created event

  play?: IAnimateEventFunction // play animation event
  pause?: IAnimateEventFunction // pause animation event
  stop?: IAnimateEventFunction // stop animation event
  seek?: IAnimateEventFunction // seek animation event

  update?: IAnimateEventFunction // update animation event, triggered on every style change
  completed?: IAnimateEventFunction // animation completed event
}

interface IAnimateEventFunction {
  (animate?: Animate): void
}
```

## 归属

### [Animate Class](../index.md)

## Examples

### Listen to animation events

:::code-group
<<< @/code/plugin/animate/options/event/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/event/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/event/set/ease.ts [set]
<<< @/code/plugin/animate/options/event/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/event/ease.ts [Animate]
:::

### Listen to events via on()

Supports [listening and removing events](../../../../reference/UI/on.md) like elements.

:::code-group
<<< @/code/plugin/animate/options/event/animate/on.ts [animate]
<<< @/code/plugin/animate/options/event/on.ts [Animate]
:::
