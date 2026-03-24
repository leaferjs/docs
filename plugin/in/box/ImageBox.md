# ImageBox 元素

同时支持 [Image](/reference/display/Image.md) + [Box](/reference/display/Box.md) 元素的功能，可往里面添加子元素。

<br/>

::: tip 继承
ImageBox &nbsp;>&nbsp; [Image](/reference/display/Image.md) 、[Box](/reference/display/Box.md) &nbsp;>&nbsp; [Group](/reference/display/Group.md) 、[Rect](/reference/display/Rect.md) &nbsp;>&nbsp; [UI](/reference/display/UI.md)
:::

::: tip 注意事项
需安装 [box插件](/plugin/in/box/index.md) 才能使用。
:::

## 示例

### 创建 ImageBox

::: code-group
<<< @/code/display/ImageBox/index.ts [Leafer]
<<< @/code/display/ImageBox/app/index.ts [App]
:::
