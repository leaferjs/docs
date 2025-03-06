# disabled

禁用状态， 支持添加 [过渡效果](/reference/UI/transition.md)。

[Box](/reference/display/Box.md) / [Group ](/reference/display/Group.md)可通过设置 [button](/reference/UI/state/state.md#button-boolean) 属性，使子元素自动同步交互状态。

::: tip 注意事项
需安装 [交互状态插件](/plugin/in/state/index.md) 才能使用。
:::

## 关键属性

### disabled： `boolean`

是否禁用。

### disabledStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

元素 `disabled` 设为 true 时的禁用样式， `disabled` 设为 false 后自动还原。

## 归属

### [UI](/reference/display/UI.md)

## 示例

<<< @/code/property/state/disabledStyle.ts
