<script setup>
import Case from '/component/Case.vue'
</script>

# transition

过渡效果。

与 CSS 略有不同，只能用于元素的状态过渡，如 state、hoverStyle、pressStyle ...

::: tip 注意事项
需安装 [动画插件](/plugin/in/animate/index.md) 才能使用。
:::

<case name="AnimateColor" editor=false></case>

## 关键属性

### transition： [`ITranstion`](/api/modules.md#itransition)

状态过渡 / 进入状态过渡， 默认为 true。详细了解 [动画选项](/plugin/in/animate/Animate.md#动画选项-只读) 。

```ts
// 过渡选项，  number 表示duration， string 表示 easing， object 表示动画选项对象，
type ITransition = boolean | number | IAnimateEasingName | IAnimateOptions

// 动画选项
interface IAnimateOptions {
  easing?: IAnimateEasing // 缓动方式，默认为 ease

  delay?: number // 延迟时间，以秒为单位， 默认为 0
  duration?: number // 动画时长，以秒为单位，默认为 0.2
  ending?: IAnimateEnding // 动画结束时的状态，可设置from、to，默认auto

  reverse?: boolean // 是否反向动画 to -> from，默认为 false
  swing?: boolean // 是否摇摆循环播放 from -> to，to -> from ... ，默认 false

  loop?: boolean | number // 是否循环播放，可设置循环次数，默认为 false
  loopDelay?: number // 进入下一次循环播放的延迟时间，默认为0

  speed?: number // 动画播放的倍速，值越大播放越快，默认为 1 倍速

  join?: boolean //  是否加入动画前的元素状态作为 from 关键帧
  autoplay?: boolean // 是否自动播放

  attrs?: string[] // 参与动画过渡效果的元素属性列表， 默认为所有
  event?: IAnimateEvents // 监听事件
}
```

### transitionOut： [`ITranstion`](/api/modules.md#itransition)

退出状态时的过渡效果，未设置时使用 transition。

## 归属

### [UI](/reference/display/UI.md#交互状态)

## 示例

<case name="Transition" editor=false></case>

### 有过渡效果的按钮

<<< @/code/property/transition/button.ts
