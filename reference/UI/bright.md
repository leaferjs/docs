# bright

突出显示元素，置顶渲染，可与 [dim](/reference/UI/dim.md) 淡化元素属性结合使用，适用于产品拆解演示等场景。

另外图形编辑器配置 [bright](/plugin/in/editor/config/style.md#bright-boolean)、 [dimOthers](/plugin/in/editor/config/style.md#bright-boolean)，可突出显示选中元素，淡化其他内容。

::: tip 注意事项
需安装 [突出显示元素插件](/plugin/in/bright/index.md) 才能使用。
:::

## 关键属性

### bright: `boolean`

突出显示元素，会置顶渲染，不受 dim 影响，默认为 false。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 突出显示，置顶渲染元素

::: code-group
<<< @/code/property/bright/bright.ts [Leafer]
<<< @/code/property/bright/app/bright.ts [App]
:::

### 突出显示并置顶渲染，淡化其他元素

::: code-group
<<< @/code/property/bright/dim.ts [Leafer]
<<< @/code/property/bright/app/dim.ts [App]
:::
