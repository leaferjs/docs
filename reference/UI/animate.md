<script setup>
import Case from '/component/Case.vue'
</script>

# animate

动画方法，支持延时、循环和 seek，可制作过渡动画、摇摆动画、关键帧动画、路径动画。

另外元素的 [move()](/reference/UI/position.md#move-addx-number-ipointdata-addy-0-transition-itranstion)、 [ set()](/reference/UI/data.md#set-data-iuiinputdata-transition-itranstion) 等方法支持添加动画过渡参数，文本支持 [count 动画](/reference/display/Text.md#文本-count-动画)、[打字机动画](/reference/display/Text.md#打字机动画)。 。

::: tip 注意事项
需安装 [动画插件](/plugin/in/animate/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)（已集成动画插件）。
:::

<case name="Animate" editor=false></case>

## 关键方法

### animate ( keyframe?: [`IUIInputData`](/api/interfaces/IUIInputData.md) | [`IKeyframe`](/api/modules.md#ikeyframe)[] | [`IAnimation`](/reference/UI/animation.md), options?: [`ITranstion`](/api/modules.md#itransition) ) : [`Animate`](/plugin/in/animate/index.md)

执行动画方法，并返回 [动画实例](/plugin/in/animate/index.md)。

关键帧对象。

```ts
// 关键帧对象
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

过渡选项。

```ts
// 过渡选项，  object 表示动画选项对象， number 表示duration，  string 表示  easing
type ITransition = IAnimateOptions | IAnimateEasingName | number
```

深入了解 [动画选项属性](/plugin/in/animate/index.md#动画选项属性)。

```ts
// 动画选项
interface IAnimateOptions {
  easing?: IAnimateEasing // 缓动方式，默认为 ease

  delay?: number // 延迟时间，以秒为单位， 默认为 0
  duration?: number // 动画时长，以秒为单位，默认为 0.2
  ending?: IAnimateEnding // 动画结束时的状态，可设置from、to，默认auto

  reverse?: boolean // 是否反向动画 to -> from，默认为 false
  swing?: boolean | number // 是否摇摆循环播放，可设置次数（到达 to 的次数） from -> to，to -> from -> to ... ，默认 false

  loop?: boolean | number // 是否循环播放，可设置次数，默认为 false
  loopDelay?: number // 进入下一次循环播放的延迟时间，默认为0

  speed?: number // 动画播放的倍速，值越大播放越快，默认为 1 倍速

  join?: boolean //  是否加入动画前的元素状态作为 from 关键帧
  autoplay?: boolean // 是否自动播放

  attrs?: string[] // 参与动画过渡效果的元素属性列表， 默认为所有
  event?: IAnimateEvents // 监听事件
}
```

### animate(): [`Animate`](/plugin/in/animate/index.md)

获取当前运行的动画实例。

### killAnimate()

结束当前动画。

## 归属

### [UI 元素](/reference/display/UI.md)

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
