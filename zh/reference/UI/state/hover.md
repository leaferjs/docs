<script setup>
import Case from '/component/Case.vue'
</script>

# hover

pointer.enter 状态， 支持添加 [过渡效果](../transition.md)。

[Box](../../display/Box.md) / [Group ](../../display/Group.md)可通过设置 [button](./state.md#button-boolean) 属性，使子元素自动同步交互状态。

::: tip 注意事项
需安装 [交互状态插件](../../../plugin/in/state/index.md) 才能使用。
:::

## 关键属性

### hoverStyle: [`IUIInputData`](../../../api/interfaces/IUIInputData.md)

光标移入时的交互样式， 移出后自动还原。

## 归属

### [UI 元素](../../display/UI.md)

## 示例

<case name="HoverStyle" index=0 editor=false></case>

### 鼠标移入颜色加深

::: code-group
<<< @/code/property/state/hoverStyle.ts [Leafer]
<<< @/code/property/state/app/hoverStyle.ts [App]
:::
