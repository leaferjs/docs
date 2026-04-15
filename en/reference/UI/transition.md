<script setup>
import Case from '/component/Case.vue'
</script>

# transition

Transition effect.

Unlike CSS, it can only be used for element state transitions, such as state, hoverStyle, pressStyle ...

In addition, element methods like [move()](./position.md#move-addx-number-ipointdata-addy-0-transition-itranstion) and [set()](./data.md#set-data-iuiinputdata-transition-itranstion) support animation transition parameters. Text also supports [count animation](../display/Text.md#文本-count-动画) and [typewriter animation](../display/Text.md#打字机动画).

::: tip Note
You need to install the [animation plugin](../../plugin/in/animate/index.md) to use this feature, or directly install [leafer-game](../../guide/install/game/start.md) (which already includes the animation plugin).
:::

<case name="AnimateColor" editor=false></case>

## Key Properties

### transition: [`ITranstion`](../../api/modules.md#itransition)

State transition / enter state transition, defaults to true. See [animation options](../../plugin/in/animate/index.md#动画选项属性) for details.

```ts
// Transition options: number represents duration, string represents easing, object represents animation options
type ITransition = boolean | number | IAnimateEasingName | IAnimateOptions
```

Learn more about [animation option properties](../../plugin/in/animate/index.md#动画选项属性).

```ts
// Animation options
interface IAnimateOptions {
  easing?: IAnimateEasing // easing function, default is ease

  delay?: number // delay time in seconds, default is 0
  duration?: number // animation duration in seconds, default is 0.2
  ending?: IAnimateEnding // animation end state, can be from, to, default auto

  reverse?: boolean // whether to reverse animation from to to -> from, default false
  swing?: boolean | number // whether to play swing loop, can set count (number of times reaching "to")

  loop?: boolean | number // whether to loop animation, can set number of loops, default false
  loopDelay?: number // delay time before next loop, default 0

  speed?: number // playback speed multiplier, higher means faster, default 1

  join?: boolean // whether to include previous element state as from keyframe
  autoplay?: boolean // whether to autoplay

  attrs?: string[] // list of element attributes involved in transition animation, default is all
  event?: IAnimateEvents // event listener
}
```

### transitionOut: [`ITranstion`](../../api/modules.md#itransition)

Transition effect when exiting state, uses transition if not set.

## Belongs To

### [UI Elements](../display/UI.md)

## Example

<case name="Transition" editor=false></case>

### Button with transition effect

::: code-group
<<< @/code/property/transition/button.ts [Leafer]
<<< @/code/property/transition/app/button.ts [App]
:::
