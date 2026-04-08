# PathBox 元素

同时支持 [Path](../../../reference/display/Path.md) + [Box](../../../reference/display/Box.md) 元素的功能，可往里面添加子元素。

<br/>

::: tip 继承
PathBox &nbsp;>&nbsp; [Path](../../../reference/display/Path.md) 、[Box](../../../reference/display/Box.md) &nbsp;>&nbsp; [Group](../../../reference/display/Group.md) 、[Rect](../../../reference/display/Rect.md) &nbsp;>&nbsp; [UI](../../../reference/display/UI.md)
:::

::: tip 注意事项
需安装 [box插件](./index.md) 才能使用。
:::

## 示例

### 创建 PathBox

::: code-group
<<< @/code/display/PathBox/index.ts [Leafer]
<<< @/code/display/PathBox/app/index.ts [App]
:::
