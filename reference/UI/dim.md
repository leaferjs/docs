# dim

淡化元素（半透明），可与[bright](./bright.md) 突出元素属性结合使用，适用于产品拆解演示等场景。

另外图形编辑器配置 [bright](/plugin/in/editor/config/style.md#bright-boolean)、 [dimOthers](/plugin/in/editor/config/style.md#bright-boolean)，可突出显示选中元素，淡化其他内容。

::: tip 注意事项
需安装 [突出显示元素插件](/plugin/in/bright/index.md) 才能使用。
:::

## 关键属性

### dim: `boolean` | `number`

淡化（半透明）自身及所有子元素，通过叠加透明度来淡化元素，默认为 false。

设为 true 时会自动设置 0.2 的透明度，也可设置一个透明度数值。

### dimskip: `boolean`

跳过淡化，突出显示元素，但不会置顶渲染，默认为 false。

如需置顶渲染可用 [bright](./bright.md) 属性。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 突出主体、淡化其他元素

::: code-group
<<< @/code/property/dim/dim.ts [Leafer]
<<< @/code/property/dim/app/dim.ts [App]
:::

### 突出显示(置顶渲染)、淡化其他元素

::: code-group
<<< @/code/property/bright/dim.ts [Leafer]
<<< @/code/property/bright/app/dim.ts [App]
:::
