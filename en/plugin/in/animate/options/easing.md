<script setup>
import Case from '/component/Case.vue'
</script>

# 缓动方式

## Key Property

### easing: [`IAnimateEasing`](../../../../api/modules.md#ianimateeasing)

Animation easing function. Default is `ease`. See [animation easing chart](https://easings.net/).

```ts
type IAnimateEasing =
  | 'ease' // default, slow start, fast middle, slow end
  | 'linear' // linear easing, constant speed

  // easing
  | 'ease-in' // slow start, then faster
  | 'ease-out' // fast start, slow end
  | 'ease-in-out' // slow start and end

  // sine
  | 'sine-in'
  | 'sine-out'
  | 'sine-in-out'
  // quadratic
  | 'quad-in'
  | 'quad-out'
  | 'quad-in-out'
  // cubic
  | 'cubic-in'
  | 'cubic-out'
  | 'cubic-in-out'
  // quartic
  | 'quart-in'
  | 'quart-out'
  | 'quart-in-out'
  // quintic
  | 'quint-in'
  | 'quint-out'
  | 'quint-in-out'
  // exponential
  | 'expo-in'
  | 'expo-out'
  | 'expo-in-out'
  // circular
  | 'circ-in'
  | 'circ-out'
  | 'circ-in-out'
  // back
  | 'back-in'
  | 'back-out'
  | 'back-in-out'
  // elastic
  | 'elastic-in'
  | 'elastic-out'
  | 'elastic-in-out'
  // bounce
  | 'bounce-in'
  | 'bounce-out'
  | 'bounce-in-out'
  | ICubicBezierEasing
  | IStepsEasing

interface ICubicBezierEasing {
  name: 'cubic-bezier' // cubic bezier curve 0,0, x1,y1, x2,y2, 1,1
  value: [number, number, number, number] // [x1, y1, x2, y2]
}

interface IStepsEasing {
  name: 'steps' // step animation
  // first param: steps count
  // second param: rounding method for steps Math.floor(t * steps) / steps, default is floor
  value: number | [number, 'floor' | 'round' | 'ceil']
}
```

## 归属

### [Animate Class](../index.md)

## Examples

<case name="AnimateEasing" index=0 height=80 editor=false></case>

### ease

Slow start, fast middle, slow end

:::code-group
<<< @/code/plugin/animate/options/easing/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/easing/set/ease.ts [set]
<<< @/code/plugin/animate/options/easing/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/easing/ease.ts [Animate]
:::

<case name="AnimateEasing" index=1 height=80 editor=false></case>

### linear

Constant speed

:::code-group
<<< @/code/plugin/animate/options/easing/animation/linear.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/linear.ts [transition]
<<< @/code/plugin/animate/options/easing/set/linear.ts [set]
<<< @/code/plugin/animate/options/easing/animate/linear.ts [animate]
<<< @/code/plugin/animate/options/easing/linear.ts [Animate]
:::

<case name="AnimateEasing" index=2 height=80 editor=false></case>

### back-in

拉力进入

:::code-group
<<< @/code/plugin/animate/options/easing/animation/back-in.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/back-in.ts [transition]
<<< @/code/plugin/animate/options/easing/set/back-in.ts [set]
<<< @/code/plugin/animate/options/easing/animate/back-in.ts [animate]
<<< @/code/plugin/animate/options/easing/back-in.ts [Animate]
:::

<case name="AnimateEasing" index=3 height=80 editor=false></case>

### elastic-out

多次回弹结束

:::code-group
<<< @/code/plugin/animate/options/easing/animation/elastic-out.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/elastic-out.ts [transition]
<<< @/code/plugin/animate/options/easing/set/elastic-out.ts [set]
<<< @/code/plugin/animate/options/easing/animate/elastic-out.ts [animate]
<<< @/code/plugin/animate/options/easing/elastic-out.ts [Animate]
:::

<case name="AnimateEasing" index=4 height=80 editor=false></case>

### bounce-out

重力反弹结束

:::code-group
<<< @/code/plugin/animate/options/easing/animation/bounce-out.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/bounce-out.ts [transition]
<<< @/code/plugin/animate/options/easing/set/bounce-out.ts [set]
<<< @/code/plugin/animate/options/easing/animate/bounce-out.ts [animate]
<<< @/code/plugin/animate/options/easing/bounce-out.ts [Animate]
:::

<case name="AnimateEasing" index=5 height=80 editor=false></case>

### cubic-bezier

Custom cubic-bezier easing `0,0, x1,y1, x2,y2, 1,1`

:::code-group
<<< @/code/plugin/animate/options/easing/animation/cubic-bezier.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/cubic-bezier.ts [transition]
<<< @/code/plugin/animate/options/easing/set/cubic-bezier.ts [set]
<<< @/code/plugin/animate/options/easing/animate/cubic-bezier.ts [animate]
<<< @/code/plugin/animate/options/easing/cubic-bezier.ts [Animate]
:::

<case name="AnimateEasing" index=6 height=80 editor=false></case>

### steps

Step-based animation

:::code-group
<<< @/code/plugin/animate/options/easing/animation/steps.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/steps.ts [transition]
<<< @/code/plugin/animate/options/easing/set/steps.ts [set]
<<< @/code/plugin/animate/options/easing/animate/steps.ts [animate]
<<< @/code/plugin/animate/options/easing/steps.ts [Animate]
:::
