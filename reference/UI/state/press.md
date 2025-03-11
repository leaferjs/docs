<script setup>
import Case from '/component/Case.vue'
</script>

# press

pointer.down 状态， 支持添加 [过渡效果](/reference/UI/transition.md)。

[Box](/reference/display/Box.md) / [Group ](/reference/display/Group.md)可通过设置 [button](/reference/UI/state/state.md#button-boolean) 属性，使子元素自动同步交互状态。

::: tip 注意事项
需安装 [交互状态插件](/plugin/in/state/index.md) 才能使用。
:::

## 关键属性

### pressStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

光标按下时的交互样式， 抬起后自动还原。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="PressStyle" index=0   editor=false></case>

### 鼠标按下颜色加深

<<< @/code/property/state/pressStyle.ts
