<script setup>
import Case from '/component/Case.vue'
</script>

# transition

过渡效果。

与 CSS 略有不同，只能用于元素的状态过渡，如 state、hoverStyle、pressStyle ...

另外元素的 [move()](/reference/UI/position.md#move-addx-number-ipointdata-addy-0-transition-itranstion)、 [ set()](/reference/UI/data.md#set-data-iuiinputdata-transition-itranstion) 等方法支持添加动画过渡参数，文本支持 [count 动画](/reference/display/Text.md#文本-count-动画)、[打字机动画](/reference/display/Text.md#打字机动画)。

::: tip 注意事项
需安装 [动画插件](/plugin/in/animate/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)（已集成动画插件）。
:::

<case name="AnimateColor" editor=false></case>

## 关键属性

### transition： [`ITranstion`](/api/modules.md#itransition)

状态过渡 / 进入状态过渡， 默认为 true。详细了解 [动画选项](/plugin/in/animate/index.md#动画选项属性) 。

```ts
// 过渡选项，  number 表示duration， string 表示 easing， object 表示动画选项对象，
type ITransition = boolean | number | IAnimateEasingName | IAnimateOptions
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

### transitionOut： [`ITranstion`](/api/modules.md#itransition)

退出状态时的过渡效果，未设置时使用 transition。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="Transition" editor=false></case>

### 有过渡效果的按钮

<<< @/code/property/transition/button.ts
