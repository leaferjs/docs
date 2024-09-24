<script setup>
import Case from '/component/Case.vue'
</script>

# animate

动画方法。

需安装 [动画 插件](/plugin/in/animate/index.md) 才能使用。

<case name="Animate" editor=false></case>

## 关键方法

### animate ( keyframe?: [`IUIInputData`](/api/interfaces/IUIInputData.md) | [`IKeyframe`](/api/modules.md#ikeyframe)[] | [`IAnimation`](/reference/property/animation.md), options?: [`ITranstion`](/api/modules.md#itransition) ) : [`Animate`](/plugin/in/animate/Animate.md)

执行动画方法，并返回 [动画实例](/plugin/in/animate/Animate.md)。详细了解 [动画选项](/plugin/in/animate/Animate.md#动画选项-只读) 。

```ts
// 关键帧
type IKeyframe = IUIInputData | IAnimateKeyframe

interface IAnimateKeyframe {
  style: IUIInputData // 元素样式

  easing?: IAnimateEasing // 单独设置关键帧缓动方式
  delay?: number // 单独设置关键帧延迟播放时长。
  duration?: number // 单独设置关键帧的固定时长，设置后将忽略 autoDuration

  // 分配剩余时间：（总时长 - 总关键帧固定时长）/ 总权重 * 当前权重
  autoDelay?: number // 自动 delay 的权重， 默认为 0
  autoDuration?: number // 自动 duration 的权重， 默认为 1
}

// 过渡选项，  object 表示动画选项对象， number 表示duration，  string 表示  easing
type ITransition = IAnimateOptions | IAnimateEasingName | number

// 动画选项
interface IAnimateOptions {
  easing?: IAnimateEasing // 缓动方式，默认为 ease
  direction?: IAnimateDirection // 动画方向，可设置反向、摇摆循环，默认正向

  delay?: number // 延迟时间，以秒为单位， 默认为 0
  duration?: number // 动画时长，以秒为单位，默认为 0.2
  ending?: IAnimateEnding // 动画结束时的状态，可设置from、to，默认normal

  loop?: boolean | number // 是否循环播放，可设置循环次数，默认为 false
  loopDelay?: number // 进入下一次循环播放的延迟时间，默认为0

  speed?: number // 动画播放的倍速，值越大播放越快，默认为 1 倍速

  join?: boolean //  是否加入动画前的元素状态作为 from 关键帧
  autoplay?: boolean // 是否自动播放

  attrs?: string[] // 参与动画过渡效果的元素属性列表， 默认为所有
  event?: IAnimateEvents // 监听事件
}
```

### animate(): [`Animate`](/plugin/in/animate/Animate.md)

获取当前运行的动画实例。

### killAnimate()

结束当前动画。

## 归属

### [UI](/reference/display/UI.md#交互状态)

## 示例

<case name="Animate" editor=false></case>

### 摇摆循环动画

<<< @/code/property/animate/rect.ts

<case name="AnimateColor" editor=false></case>

### 颜色过渡动画

<<< @/code/property/animate/color.ts

<case name="AnimateFrames" editor=false></case>

### 关键帧动画

<<< @/code/property/animate/keyframes.ts
