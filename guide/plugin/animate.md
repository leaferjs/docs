<script setup>
import Case from '/component/Case.vue'
</script>

# 动画

动画功能，支持延时、摇摆循环、seek、[动画事件](/plugin/in/animate/Animate#event-ianimateevents)，可制作过渡动画、关键帧动画、路径动画。

支持以 [animation](/reference/property/animation.md)、[transition](/reference/property/transition.md)、[animate() 方法](/reference/property/animate.md)、[Animate 实例](/plugin/in/animate/Animate.md) 等方式创建动画。

另外元素的 [move()](/reference/property/position.md#move-addx-number-ipointdata-addy-0-transition-itranstion)、 [ set()](/reference/property/data.md#set-data-iuiinputdata-transition-itranstion) 方法支持添加动画过渡参数，文本支持 [count 动画](/reference/display/Text.md#文本-count-动画)、[打字机动画](/reference/display/Text.md#打字机动画) 。

::: tip 注意事项
需安装 [动画插件](/plugin/in/animate/) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)（已集成动画插件）。

:::

<case name="AnimatePage" editor=false></case>

<<< @/code/property/animation/page.ts

<case name="AnimateColor" editor=false></case>

<<< @/code/property/animation/color.ts

<case name="AnimateFrames" editor=false></case>

<<< @/code/property/animation/keyframes.ts

## 下一步

### [运动路径](/guide/plugin/motion-path)
