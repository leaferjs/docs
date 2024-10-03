<script setup>
import Case from '/component/Case.vue'
</script>

# 交互状态

可以像 CSS 一样为元素增加 [hover](/reference/property/state/hover) 、 [press](/reference/property/state/press) 、 [focus](/reference/property/state/focus) 、 [selected](/reference/property/state/selected) 、 [disabled](/reference/property/state/disabled) 交互状态样式。

支持添加 [过渡效果](/reference/property/transition.md)，还可自定义复杂多样的元素、游戏状态 [state](/reference/property/state/state) 用于随时切换。
::: tip 注意事项
需安装 [交互状态插件](/plugin/in/state/) 才能使用， [过渡效果](/reference/property/transition.md) 需安装 [动画插件](/plugin/in/animate/) 。

:::

<case name="Transition" editor=false></case>

<<< @/code/property/transition/button.ts

## 下一步

### [动画功能](/guide/plugin/animate)
