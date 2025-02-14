<script setup>
import Case from '/component/Case.vue'
</script>

# 交互状态

可以像 CSS 一样为元素增加 [hover](/reference/property/state/hover.md) 、 [press](/reference/property/state/press.md) 、 [focus](/reference/property/state/focus.md) 、 [selected](/reference/property/state/selected.md) 、 [disabled](/reference/property/state/disabled.md) 交互状态样式。

支持添加 [过渡效果](/reference/property/transition.md)，还可自定义复杂多样的元素、游戏状态 [state](/reference/property/state/state.md) 用于随时切换。
::: tip 注意事项
需安装 [交互状态插件](/plugin/in/state/index.md) 才能使用， [过渡效果](/reference/property/transition.md) 需安装 [动画插件](/plugin/in/animate/index.md) 。

或直接安装 [leafer-game](/guide/install/game/start.md)（已集成交互状态、动画插件）。

:::

<case name="Transition" editor=false></case>

<<< @/code/property/transition/button.ts

<case name="State" index=0 editor=false></case>

<<< @/code/property/state/state.ts

## 下一步

### [动画功能](/guide/plugin/animate.md)
