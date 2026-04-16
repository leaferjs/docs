<script setup>
import Case from '/component/Case.vue'
</script>

# Interaction States

You can add interaction states to elements just like CSS, such as [hover](../../reference/UI/state/hover.md), [press](../../reference/UI/state/press.md), [focus](../../reference/UI/state/focus.md), [selected](../../reference/UI/state/selected.md), and [disabled](../../reference/UI/state/disabled.md).

It also supports adding [transition effects](../../reference/UI/transition.md), and you can define complex custom element or game states using [state](../../reference/UI/state/state.md) for dynamic switching at any time.
You must install the [interaction state plugin](../../plugin/in/state/index.md) to use this feature. The [transition effect](../../reference/UI/transition.md) requires the [animation plugin](../../plugin/in/animate/index.md).

Alternatively, you can install [leafer-game](../install/game/start.md), which already includes both interaction state and animation plugins.

:::

<case name="Transition" editor=false></case>

<<< @/code/property/transition/button.ts

<case name="State" index=0 editor=false></case>

<<< @/code/property/state/state.ts

## Next Step

### [Motion Path](./motion-path.md)
