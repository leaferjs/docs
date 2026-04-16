<script setup>
import Case from '/component/Case.vue'
</script>

# Animate Class

Animation class with rich animation capabilities. Supports delay, looping, and seek. Can be used to create transition animations, swing animations, keyframe animations, path animations, and scrolling animations.

Supports creating animations via [animation](../../../reference/UI/animation.md), [transition](../../../reference/UI/transition.md), [animate() method](../../../reference/UI/animate.md), and [Animate instance](./index.md).

In addition, methods like [move()](../../../reference/UI/position.md#move-addx-number-ipointdata-addy-0-transition-itranstion) and [set()](../../../reference/UI/data.md#set-data-iuiinputdata-transition-itranstion) support adding animation transition parameters. Text also supports [count animation](../../../reference/display/Text.md#文本-count-动画) and [typewriter animation](../../../reference/display/Text.md#打字机动画).

<case name="AnimateFrames" editor=false></case>

:::tip Inheritance
Animate  >  [Eventer](../../../api/classes/Eventer.md)
:::

## Install Plugin

You need to install the animate plugin and the [color plugin](../color/index.md) to use it. [Click here to visit the Github repository](https://github.com/leaferjs/leafer-in/tree/main/packages/animate).

::: code-group

```sh [npm]
npm install @leafer-in/animate
npm install @leafer-in/color
```

```sh [pnpm]
pnpm add @leafer-in/animate
pnpm add @leafer-in/color
```

```sh [yarn]
yarn add @leafer-in/animate
yarn add @leafer-in/color
```

```sh [bun]
bun add @leafer-in/animate
bun add @leafer-in/color
```

:::

Or include via script tag and access plugin features using the global variable LeaferIN.animate.

::: code-group

```html [animate.min]
<script src="https://unpkg.com/@leafer-in/animate@2.0.8/dist/animate.min.js"></script>
<script src="https://unpkg.com/@leafer-in/color@2.0.8/dist/color.min.js"></script>
<script>
  const { Animate } = LeaferIN.animate
</script>
```

```html [animate]
<script src="https://unpkg.com/@leafer-in/animate@2.0.8/dist/animate.js"></script>
<script src="https://unpkg.com/@leafer-in/color@2.0.8/dist/color.js"></script>
<script>
  const { Animate } = LeaferIN.animate
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## Key Properties (Read-only)

### target: [`UI`](../../../reference/display/UI.md) ｜ `Object`

The target element of the animation. Supports plain objects.

## Animation Option Properties

Can be passed as initialization options when creating an animation. When accessed as properties of an Animate instance, they are read-only.

| Name                              | Description                                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [easing](./options/easing.md)     | Easing: the easing function of the animation, default is ease                                |
| [delay](./options/delay.md)       | Delay: the delay duration before the animation starts                                        |
| [duration](./options/duration.md) | Duration: total duration of the animation (excluding delay and loop time) |
| [speed](./options/speed.md)       | Speed: playback speed multiplier. A 10s animation with speed 5 plays in 2s   |
| [reverse](./options/reverse.md)   | Reverse: whether to reverse animation from to -> from                                        |
| [loop](./options/loop.md)         | Loop: whether to loop playback, can set count                                                |
| [loopDelay](./options/loop.md)    | Loop delay: delay time before the next loop starts                                           |
| [swing](./options/loop.md)        | Swing loop: whether to swing playback, can set the number of times reaching to               |
| [ending](./options/ending.md)     | Ending style: style at animation end, from means start style, to means end style             |
| [join](./options/join.md)         | Join keyframe: whether to include the element’s pre-animation state as from                  |
| [jump](./options/jump.md)         | Jump first frame: whether to jump to the first frame before delay                            |
| [autoplay](./options/autoplay.md) | Autoplay: whether to autoplay, default is true                                               |
| [attrs](./options/attrs.md)       | Transition attributes: list of element attributes participating in animation, default is all |
| [event](./options/event.md)       | Event: animation event listener object                                                       |

## More Properties

| Name                              | Description                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------- |
| Timing                            |                                                                                       |
| [duration](./Animate/time.md)     | Total duration of the animation (excluding delay and loop time)    |
| [time](./Animate/time.md)         | Elapsed time (relative to duration, excluding delay and loop time) |
| [looped](./Animate/time.md)       | 已经循环播放了多少次（计数）                                                                        |
| State                             |                                                                                       |
| [started](./Animate/state.md)     | Whether the animation has started                                                     |
| [running](./Animate/state.md)     | Whether the animation is currently playing                                            |
| [completed](./Animate/state.md)   | Whether the animation is completed                                                    |
| [destroyed](./Animate/state.md)   | Whether the animation is destroyed                                                    |
| Style                             |                                                                                       |
| [style](./Animate/style.md)       | Current animation style                                                               |
| [fromStyle](./Animate/style.md)   | from 帧状态的样式                                                                           |
| [toStyle](./Animate/style.md)     | to 帧状态的样式                                                                             |
| [endingStyle](./Animate/style.md) | Style at the end state                                                                |
| [frames](./Animate/style.md)      | Computed keyframe list used internally                                                |
| [keyframes](./Animate/style.md)   | Original keyframe list                                                                |

## Key Methods

<!-- ### init ( target: [UI](../../../reference/display/UI.md), keyframe: [`IUIInputData`](../../../api/interfaces/IUIInputData.md) | [`IKeyframe`](../../../api/modules.md#ikeyframe) [], options?: options?: [`ITranstion`](../../../api/modules.md#itransition), isTemp?: `boolean` )

重新初始化动画。 -->

| Name                                                 | Description                                                                                        |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [play()](./Animate/play.md)       | Play animation                                                                                     |
| [pause()](./Animate/pause.md)     | Pause animation                                                                                    |
| [stop()](./Animate/stop.md)       | Stop animation: force complete and pause                                           |
| [seek()](./Animate/seek.md)       | Seek animation: jump to a specific time (seconds) or percentage |
| [kill()](./Animate/kill.md)       | Kill animation: force complete and destroy                                         |
| [destroy()](./Animate/destroy.md) | Destroy animation: immediately destroy without completing, stays at current state  |

## Events

Animation events, listened via on().

| Name                                    | Description     |
| --------------------------------------- | --------------- |
| [AnimateEvent](./event/AnimateEvent.md) | Animation event |

<!-- ## API

### [Animate](../../../api/classes/Animate.md) -->

## Examples

<case name="Animate" editor=false></case>

### Swing Loop Animation

<<< @/code/plugin/animate/rect.ts

<case name="AnimateColor" editor=false></case>

### Color Transition Animation

<<< @/code/plugin/animate/color.ts

<case name="AnimateFrames" editor=false></case>

### Keyframe Animation

<<< @/code/plugin/animate/keyframes.ts

### Pause Animation

<<< @/code/plugin/animate/animate/pause.ts

### Seek Animation

<<< @/code/plugin/animate/animate/seek/value.ts

### Listen to Animation Events via on()

Supports [listening and removing events](../../../reference/UI/on.md) like elements, and also supports passing [event listener object](./options/event.md) during initialization.

:::code-group
<<< @/code/plugin/animate/options/event/animate/on.ts [animate]
<<< @/code/plugin/animate/options/event/on.ts [Animate]
:::
