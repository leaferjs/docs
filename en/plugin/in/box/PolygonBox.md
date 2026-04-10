# PolygonBox 元素

同时支持 [Polygon](../../../reference/display/Polygon.md) + [Box](../../../reference/display/Box.md) 元素的功能，可往里面添加子元素。

<br/>

:::tip 继承
PolygonBox &nbsp;>&nbsp; [Polygon](../../../reference/display/Polygon.md) 、[Box](../../../reference/display/Box.md) &nbsp;>&nbsp; [Group](../../../reference/display/Group.md) 、[Rect](../../../reference/display/Rect.md) &nbsp;>&nbsp; [UI](../../../reference/display/UI.md)
:::

:::tip 注意事项
需安装 [box插件](./index.md) 才能使用。
:::

## 示例

### 创建 PolygonBox

:::code-group
<<< @/code/display/PolygonBox/index.ts [Leafer]
<<< @/code/display/PolygonBox/app/index.ts [App]
:::
