<script setup>
import Case from '/component/Case.vue'
</script>

# 动画

动画功能，支持延时、摇摆循环、seek、[动画事件](/plugin/in/animate/index.md#event-ianimateevents)，可制作过渡动画、关键帧动画、路径动画。

支持以 [animation](/reference/UI/animation.md)、[transition](/reference/UI/transition.md)、[animate() 方法](/reference/UI/animate.md)、[Animate 实例](/plugin/in/animate/index.md) 等方式创建动画。

另外元素的 [move()](/reference/UI/position.md#move-addx-number-ipointdata-addy-0-transition-itranstion)、 [ set()](/reference/UI/data.md#set-data-iuiinputdata-transition-itranstion) 等方法支持添加动画过渡参数，文本支持 [count 动画](/reference/display/Text.md#文本-count-动画)、[打字机动画](/reference/display/Text.md#打字机动画)。 。

::: tip 注意事项
需安装 [动画插件](/plugin/in/animate/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)（已集成动画插件）。

:::

<case name="AnimatePage" editor=false></case>

<<< @/code/property/animation/page.ts

<case name="AnimateColor" editor=false></case>

<<< @/code/property/animation/color.ts

<case name="AnimateFrames" editor=false></case>

<<< @/code/property/animation/keyframes.ts

<case name="Arrow" index=24 editor=false></case>

<<< @/code/plugin/arrow/animate.ts

## 下一步

### [交互状态](/guide/plugin/state.md)
