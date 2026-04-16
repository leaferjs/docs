<script setup>
import Case from '/component/Case.vue'
</script>

# Animate

Animation methods support delay, looping, and seek, and can be used to create transition animations, swing animations, keyframe animations, and path animations.

In addition, element methods such as [move()](./position.md#move-addx-number-ipointdata-addy-0-transition-itranstion) and [set()](./data.md#set-data-iuiinputdata-transition-itranstion) support animation transition parameters. Text also supports [count animations](../display/Text.md#文本-count-动画) and [typewriter animations](../display/Text.md#打字机动画).

:::tip Note
You need to install the [animation plugin](../../plugin/in/animate/index.md) to use this feature, or directly install [leafer-game](../../guide/install/game/start.md) (which already includes the animation plugin).
:::

<case name="Animate" editor=false></case>

## Key Methods

### animate ( keyframe?: [`IUIInputData`](../../api/interfaces/IUIInputData.md) | [`IKeyframe`](../../api/modules.md#ikeyframe)[] | [`IAnimation`](./animation.md), options?: [`ITranstion`](../../api/modules.md#itransition) ) : [`Animate`](../../plugin/in/animate/index.md)

Executes an animation method and returns an [animation instance](../../plugin/in/animate/index.md).

Keyframe object.

```ts
// Keyframe object
type IKeyframe = IUIInputData | IAnimateKeyframe

interface IAnimateKeyframe {
  style: IUIInputData // element style

  easing?: IAnimateEasing // easing function for this keyframe
  delay?: number // delay time for this keyframe
  duration?: number // fixed duration for this keyframe (overrides autoDuration)

  swing?: number // number of swing cycles (times reaching "to"), from -> to -> from -> to ..., default 0
  loop?: number // loop count, default 0

  // Distribute remaining time:
  // (total duration - sum of fixed durations) / total weight * current weight
  autoDelay?: number // weight for auto delay, default 0
  autoDuration?: number // weight for auto duration, default 1
}
```

Transition options.

```ts
// Transition options: object = animation config, number = duration, string = easing
type ITransition = IAnimateOptions | IAnimateEasingName | number
```

Learn more about [animation option properties](../../plugin/in/animate/index.md#动画选项属性).

```ts
// Animation options
interface IAnimateOptions {
  easing?: IAnimateEasing // easing function, default: ease

  delay?: number // delay time in seconds, default: 0
  duration?: number // duration in seconds, default: 0.2
  ending?: IAnimateEnding // final state: from, to, or auto (default)

  reverse?: boolean // reverse animation (to -> from), default: false
  swing?: boolean | number // swing loop (number of "to" hits), default: false

  loop?: boolean | number // loop playback, default: false
  loopDelay?: number // delay between loops, default: 0

  speed?: number // playback speed multiplier, default: 1

  join?: boolean // include current state as "from" keyframe
  autoplay?: boolean // auto start

  attrs?: string[] // properties to animate (default: all)
  event?: IAnimateEvents // animation events
}
```

### animate(): [`Animate`](../../plugin/in/animate/index.md)

Get the currently running animation instance.

### killAnimate()

Stop the current animation.

## 归属

### [UI Elements](../display/UI.md)

## Example

<case name="Animate" editor=false></case>

### Swing Loop Animation

:::code-group
<<< @/code/property/animate/rect.ts [Leafer]
<<< @/code/property/animate/app/rect.ts [App]
:::

<case name="AnimateColor" editor=false></case>

### Color Transition Animation

:::code-group
<<< @/code/property/animate/color.ts [Leafer]
<<< @/code/property/animate/app/color.ts [App]
:::

<case name="AnimateFrames" editor=false></case>

### Keyframe Animation

:::code-group
<<< @/code/property/animate/keyframes.ts [Leafer]
<<< @/code/property/animate/app/keyframes.ts [App]
:::
