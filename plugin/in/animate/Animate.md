<script setup>
import Case from '/component/Case.vue'
</script>

# Animate

动画元素。

<case name="AnimateFrames" editor=false></case>

## 关键属性 （只读）

### target: [`UI`](/reference/display/UI.md) ｜ `Object`

动画目标元素，支持普通对象。

### keyframes: [`IKeyframe`](/api/modules.md#ikeyframe)[]

动画关键帧列表。

```ts
type IKeyframe = IUIInputData | IAnimateKeyframe

interface IAnimateKeyframe {
  style: IUIInputData // 元素样式

  easing?: IAnimateEasing // 单独设置关键帧缓动方式
  delay?: number // 单独设置关键帧延迟播放时长。
  duration?: number // 单独设置关键帧的固定时长，设置后将忽略 autoDuration

  swing?: number // 摇摆次数（到达 to 的次数），from -> to，to -> from -> to ... ，默认 0
  loop?: number // 循环次数，默认为 0

  // 分配剩余时间：（总时长 - 总关键帧固定时长）/ 总权重 * 当前权重
  autoDelay?: number // 自动 delay 的权重， 默认为 0
  autoDuration?: number // 自动 duration 的权重， 默认为 1
}
```

## 动画选项（只读）

### easing: [`IAnimateEasing`](/api/modules.md#ianimateeasing)

动画的缓动方式，默认为 ease，查看 [动画曲线示意图](https://easings.net/)。

```ts
type IAnimateEasing = IAnimateEasingName | ICubicBezierEasing | IStepsEasing

type IAnimateEasingName =
  | 'linear'
  | 'ease' // 默认值，慢速开始，中间快，缓慢结束

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
  // 单次回弹
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

### delay: `number`

动画延迟播放的时长。

### duration: `number`

动画的总时长（不包含 delay 和循环时间）。

### ending: [`IAnimateEnding`](/api/modules.md#ianimateending)

动画结束时的样式，默认为 'auto'。

from 表示起点样式，to 表示终点样式。

```ts
type IAnimateEnding = 'auto' | 'from' | 'to'
```

### reverse?: `boolean`

是否反向动画 to -> from，默认为 false

### swing?: `boolean` | `number`

是否摇摆循环播放，可设置次数（到达 to 的次数）， from -> to，to -> from -> to ... ，默认 false

### loop: `boolean` | `number`

是否循环播放，可设置次数，默认为 false。

### loopDelay: `number`

进入下一次循环播放的延迟时间。

### speed: `number`

动画的播放倍速，默认为 1。

1 个 10 秒的动画，如果 speed 为 2，则 5 秒就能播完。

### join: `boolean`

是否加入动画前的元素状态作为 from 关键帧。

只有一个关键帧时，强制为 true，进行 from -> to 动画。

多个关键帧时，默认为 false，会按预设的关键帧列表进行动画。

### autoplay: `boolean`

是否自动播放。

### attrs: `string` []

参与动画过渡的元素属性列表， 默认为所有。

### event: [`IAnimateEvents`](/api/interfaces/IAnimateEvent.md)

监听事件。

```ts
interface IAnimateEvents {
  created?: IAnimateEventFunction

  play?: IAnimateEventFunction
  pause?: IAnimateEventFunction
  stop?: IAnimateEventFunction
  seek?: IAnimateEventFunction

  update?: IAnimateEventFunction
  completed?: IAnimateEventFunction
}

interface IAnimateEventFunction {
  (animate?: IAnimate): void
}

// 示例
const animateOptions = {
  ease: 'bounce-in',
  duration: 2,
  event: {
    update(animate?: IAnimate) {
      // 更新中...
    },
    completed() {
      // 动画已完成
    },
  },
}
```

## 时长属性（只读）

### duration: `number`

动画的总时长（不包含 delay 和循环时间）。

### time: `number`

已经播放的时长（相对 duration，不包含 delay 和循环时间）。

### looped: `number`

已经循环播放了多少次（计数）。

## 状态属性（只读）

### started: `boolean`

动画是否开始。

### running: `boolean`

动画是否正在播放。

### completed: `boolean`

动画是否完成。

### destroyed: `boolean`

动画是否销毁。

## 计算属性（只读）

### style: [`IUIInputData`](/api/interfaces/IUIInputData.md)

当前动画状态的样式。

### fromStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

from 帧状态的样式。

### toStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

to 帧状态的样式。

### endingStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

结束状态的样式

### frames: [`IComputedKeyframe`](/api/interfaces/IComputedKeyframe.md) []

实际用于内部动画的计算关键帧列表。

## 关键方法

### play ( )

播放动画。

### pause ( )

暂停动画。

### stop ( )

停止动画。

### seek ( time: `number` | [`IPercentData`](/api/interfaces/IPercentData.md) )

滑动到指定时间，支持设置具体时间（以秒为单位），或百分比（相对 duration 总时长）。

```ts
interface IPercentData {
  type: 'percent'
  value: number
}

// 假如总时长 duration 为6秒

animate.seek(3) // 3秒

animate.seek({
  type: 'percent',
  value: 0.5, // 50% = 3秒
})
```

### kill ( )

强行完成并销毁动画。

### init ( target: [UI](/reference/display/UI.md), keyframe: [`IUIInputData`](/api/interfaces/IUIInputData.md) | [`IKeyframe`](/api/modules.md#ikeyframe) [], options?: options?: [`ITranstion`](/api/modules.md#itransition), isTemp?: `boolean` )

重新初始化动画。

### destroy ( )

销毁动画。

## 事件支持

支持像元素一样 [监听、移除事件](/reference/property/on)，支持监听以下事件：

```ts
interface IAnimateEvents {
  created?: IAnimateEventFunction

  play?: IAnimateEventFunction
  pause?: IAnimateEventFunction
  stop?: IAnimateEventFunction
  seek?: IAnimateEventFunction

  update?: IAnimateEventFunction
  completed?: IAnimateEventFunction
}

interface IAnimateEventFunction {
  (animate?: IAnimate): void
}

animate.on('created', (animate) => {
  // 创建完成
  console.log(animate)
})
```

<!-- ## API

### [Animate](/api/classes/Animate.md) -->

## 示例

<case name="Animate" editor=false></case>

### 摇摆循环动画

<<< @/code/plugin/animate/rect.ts

<case name="AnimateColor" editor=false></case>

### 颜色过渡动画

<<< @/code/plugin/animate/color.ts

<case name="AnimateFrames" editor=false></case>

### 关键帧动画

<<< @/code/plugin/animate/keyframes.ts
