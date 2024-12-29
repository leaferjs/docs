# focus

聚焦状态， 支持添加 [过渡效果](/reference/property/transition.md)。

[Box](/reference/display/Box.md) / [Group ](/reference/display/Group.md)可通过设置 [button](/reference/property/state/state.md#button-boolean) 属性，使子元素自动同步交互状态。

::: tip 注意事项
需安装 [交互状态插件](/plugin/in/state/index.md) 才能使用。
:::

## 关键属性

### focusStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

元素 focus() 时的聚焦样式， 失去焦点后自动还原。

## 关键方法

### focus ( value?: `boolean` )

聚焦元素操作，单个 App 只能同时有一个元素聚焦，当一个元素聚焦时，之前元素会失焦。

## 归属

### [UI](/reference/display/UI.md)

## 示例

<<< @/code/property/state/focusStyle.ts
