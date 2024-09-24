<script setup>
import Case from '/component/Case.vue'
</script>

# hover

pointer.enter 状态， 支持添加 [过渡效果](/reference/property/transition.md)。

[Box](/reference/display/Box.md) / [Group ](/reference/display/Group.md)可通过设置 [button](/reference/property/state/state.md#button-boolean) 属性，使子元素自动同步交互状态。

::: tip 注意事项
需安装 [交互状态插件](/plugin/in/state/index.md) 才能使用。
:::

## 关键属性

### hoverStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

光标移入时的交互样式， 移出后自动还原。

## 归属

### [UI](/reference/display/UI.md#交互状态)

## 示例

<case name="HoverStyle" index=0 editor=false></case>

### 鼠标移入颜色加深

<<< @/code/property/state/hoverStyle.ts
