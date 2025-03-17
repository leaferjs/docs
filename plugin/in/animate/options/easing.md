<script setup>
import Case from '/component/Case.vue'
</script>

# 缓动方式

## 关键属性

### easing: [`IAnimateEasing`](/api/modules.md#ianimateeasing)

动画的缓动方式，默认为 ease，查看 [动画曲线示意图](https://easings.net/)。

```ts
type IAnimateEasing =
  | 'ease' // 默认值，慢速开始，中间快，缓慢结束
  | 'linear' // 线性缓动，匀速进行

  // 缓动
  | 'ease-in' // 缓慢开始，之后加快
  | 'ease-out' // 开始快，缓慢结束
  | 'ease-in-out' // 缓慢开始和结束

  // 三角函数
  | 'sine-in'
  | 'sine-out'
  | 'sine-in-out'
  // 二次方
  | 'quad-in'
  | 'quad-out'
  | 'quad-in-out'
  // 三次方
  | 'cubic-in'
  | 'cubic-out'
  | 'cubic-in-out'
  // 四次方
  | 'quart-in'
  | 'quart-out'
  | 'quart-in-out'
  // 五次方
  | 'quint-in'
  | 'quint-out'
  | 'quint-in-out'
  // 指数
  | 'expo-in'
  | 'expo-out'
  | 'expo-in-out'
  // 平方根
  | 'circ-in'
  | 'circ-out'
  | 'circ-in-out'
  // 拉力
  | 'back-in'
  | 'back-out'
  | 'back-in-out'
  // 多次回弹
  | 'elastic-in'
  | 'elastic-out'
  | 'elastic-in-out'
  // 重力反弹
  | 'bounce-in'
  | 'bounce-out'
  | 'bounce-in-out'
  | ICubicBezierEasing
  | IStepsEasing

interface ICubicBezierEasing {
  name: 'cubic-bezier' // 三次贝塞尔曲线 0,0, x1,y1, x2,y2, 1,1
  value: [number, number, number, number] // [x1, y1, x2, y2]
}

interface IStepsEasing {
  name: 'steps' // 步长动画
  // 第一个参数为步数
  // 第二个参数为取整步数的数学方法 Math.floor(t * steps) / steps， 默认为 floor
  value: number | [number, 'floor' | 'round' | 'ceil']
}
```

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

<case name="AnimateEasing" index=0 height=80 editor=false></case>

### ease

慢速开始，中间快，缓慢结束

::: code-group
<<< @/code/plugin/animate/options/easing/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/easing/set/ease.ts [set]
<<< @/code/plugin/animate/options/easing/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/easing/ease.ts [Animate]
:::

<case name="AnimateEasing" index=1 height=80 editor=false></case>

### linear

匀速进行

::: code-group
<<< @/code/plugin/animate/options/easing/animation/linear.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/linear.ts [transition]
<<< @/code/plugin/animate/options/easing/set/linear.ts [set]
<<< @/code/plugin/animate/options/easing/animate/linear.ts [animate]
<<< @/code/plugin/animate/options/easing/linear.ts [Animate]
:::

<case name="AnimateEasing" index=2 height=80 editor=false></case>

### back-in

拉力进入

::: code-group
<<< @/code/plugin/animate/options/easing/animation/back-in.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/back-in.ts [transition]
<<< @/code/plugin/animate/options/easing/set/back-in.ts [set]
<<< @/code/plugin/animate/options/easing/animate/back-in.ts [animate]
<<< @/code/plugin/animate/options/easing/back-in.ts [Animate]
:::

<case name="AnimateEasing" index=3 height=80 editor=false></case>

### elastic-out

多次回弹结束

::: code-group
<<< @/code/plugin/animate/options/easing/animation/elastic-out.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/elastic-out.ts [transition]
<<< @/code/plugin/animate/options/easing/set/elastic-out.ts [set]
<<< @/code/plugin/animate/options/easing/animate/elastic-out.ts [animate]
<<< @/code/plugin/animate/options/easing/elastic-out.ts [Animate]
:::

<case name="AnimateEasing" index=4 height=80 editor=false></case>

### bounce-out

重力反弹结束

::: code-group
<<< @/code/plugin/animate/options/easing/animation/bounce-out.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/bounce-out.ts [transition]
<<< @/code/plugin/animate/options/easing/set/bounce-out.ts [set]
<<< @/code/plugin/animate/options/easing/animate/bounce-out.ts [animate]
<<< @/code/plugin/animate/options/easing/bounce-out.ts [Animate]
:::

<case name="AnimateEasing" index=5 height=80 editor=false></case>

### cubic-bezier

自定义三次贝塞尔曲线 `0,0, x1,y1, x2,y2, 1,1` 动画

::: code-group
<<< @/code/plugin/animate/options/easing/animation/cubic-bezier.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/cubic-bezier.ts [transition]
<<< @/code/plugin/animate/options/easing/set/cubic-bezier.ts [set]
<<< @/code/plugin/animate/options/easing/animate/cubic-bezier.ts [animate]
<<< @/code/plugin/animate/options/easing/cubic-bezier.ts [Animate]
:::

<case name="AnimateEasing" index=6 height=80 editor=false></case>

### steps

步长动画

::: code-group
<<< @/code/plugin/animate/options/easing/animation/steps.ts [animation]
<<< @/code/plugin/animate/options/easing/transition/steps.ts [transition]
<<< @/code/plugin/animate/options/easing/set/steps.ts [set]
<<< @/code/plugin/animate/options/easing/animate/steps.ts [animate]
<<< @/code/plugin/animate/options/easing/steps.ts [Animate]
:::
