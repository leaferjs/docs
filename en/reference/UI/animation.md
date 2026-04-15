<script setup>
import Case from '/component/Case.vue'
</script>

# Animation

Animation properties support delay, looping, and seek, and can be used to create transition animations, swing animations, keyframe animations, and path animations.

In addition, element methods such as [move()](./position.md#move-addx-number-ipointdata-addy-0-transition-itranstion) and [set()](./data.md#set-data-iuiinputdata-transition-itranstion) support animation transition parameters. Text also supports [count animations](../display/Text.md#文本-count-动画) and [typewriter animations](../display/Text.md#打字机动画).

::: tip Note
You need to install the [animation plugin](../../plugin/in/animate/index.md) to use this feature, or directly install [leafer-game](../../guide/install/game/start.md) (which already includes the animation plugin).
:::

<case name="AnimateFrames" editor=false></case>

## Key Properties

### animation： [`IAnimation`](../../api/modules.md#ianimation) | [`IAnimation`](../../api/modules.md#ianimation)[]

Animation / entrance animation, supports multiple animations stacking.

```ts
type IAnimation = IStyleAnimation | IKeyframesAnimation

// Style transition animation
interface IStyleAnimation extends IAnimateOptions {
  style: IUIInputData // element style
  // ...animation options
}
```

Learn more about [animation option properties](../../plugin/in/animate/index.md#动画选项属性).

```ts
// Animation options
interface IAnimateOptions {
  easing?: IAnimateEasing // easing function, default: ease

  delay?: number // delay time in seconds, default: 0
  duration?: number // animation duration in seconds, default: 0.2
  ending?: IAnimateEnding // final state of animation: from/to/auto (default)

  reverse?: boolean // reverse animation (to -> from), default: false
  swing?: boolean | number // swing loop playback (number of times reaching "to"), default: false

  loop?: boolean | number // loop playback, default: false
  loopDelay?: number // delay between loops, default: 0

  speed?: number // playback speed multiplier, default: 1

  join?: boolean // include element's pre-animation state as "from" keyframe
  autoplay?: boolean // auto play

  attrs?: string[] // properties included in animation (default: all)
  event?: IAnimateEvents // animation events
}
```

Keyframe animation.

```ts
// Keyframe animation
interface IKeyframesAnimation extends IAnimateOptions {
  keyframes: IKeyframe[] // list of keyframes
  // ...animation options
}

// Keyframe object
type IKeyframe = IUIInputData | IAnimateKeyframe

interface IAnimateKeyframe {
  style: IUIInputData // element style

  easing?: IAnimateEasing // easing for this keyframe
  delay?: number // delay for this keyframe
  duration?: number // fixed duration for this keyframe (overrides autoDuration)

  swing?: number // swing count (times reaching "to"), from -> to -> from -> to ..., default 0
  loop?: number // loop count, default 0

  // Distribute remaining time:
  // (total duration - fixed keyframe durations) / total weight * current weight
  autoDelay?: number // weight for auto delay, default 0
  autoDuration?: number // weight for auto duration, default 1
}
```

### animationOut： [`IAnimation`](../../api/modules.md#ianimation) | [`IAnimation`](../../api/modules.md#ianimation)[]

Exit animation, supports multiple animations stacking. Triggered when the element is removed or when [visible](./visible.md) becomes 0.

## Belongs to

### [UI Elements](../display/UI.md)

## Examples

### Entrance and Exit Animations

Can be used to build page transition effects and element enter/leave effects.

<case name="AnimatePage" editor=false></case>

::: code-group
<<< @/code/property/animation/page.ts [Leafer]
<<< @/code/property/animation/app/page.ts [App]
:::

<case name="Animate" editor=false></case>

### Swing Loop Animation

::: code-group
<<< @/code/property/animation/rect.ts [Leafer]
<<< @/code/property/animation/app/rect.ts [App]
:::

<case name="AnimateColor" editor=false></case>

### Color Transition Animation

::: code-group
<<< @/code/property/animation/color.ts [Leafer]
<<< @/code/property/animation/app/color.ts [App]
:::

<case name="AnimateFrames" editor=false></case>

### Keyframe Animation

::: code-group
<<< @/code/property/animation/keyframes.ts [Leafer]
<<< @/code/property/animation/app/keyframes.ts [App]
:::

<case name="Arrow" index=24 editor=false></case>

### Dashed Arrow Animation

<<< @/code/plugin/arrow/animate.ts
