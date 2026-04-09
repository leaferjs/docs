<script setup>
import Case from '/component/Case.vue'
</script>

# selected

选中状态， 支持添加 [过渡效果](../transition.md)。

[Box](../../display/Box.md) / [Group ](../../display/Group.md)可通过设置 [button](./state.md#button-boolean) 属性，使子元素自动同步交互状态。

:::tip 注意事项
需安装 [交互状态插件](../../../plugin/in/state/index.md) 才能使用。
:::

## 关键属性

### selected： `boolean`

是否选中。

### selectedStyle: [`IUIInputData`](../../../api/interfaces/IUIInputData.md)

元素 `selected` 设为 true 时的选中样式， `selected` 设为 false 后自动还原。

## 归属

### [UI 元素](../../display/UI.md)

## 示例

:::code-group
<<< @/code/property/state/selectedStyle.ts [Leafer]
<<< @/code/property/state/app/selectedStyle.ts [App]
:::
