# dim

突出主体、淡化其他元素（半透明）。

## 关键属性

### dim: `boolean` | `number`

淡化（半透明），通过叠加透明度来淡化元素，默认为 false。

设为 true 时会自动设置 0.2 的透明度，也可设置一个透明度数值。

### dimskip : `number`

跳过淡化，用于突出显示主体元素。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 突出主体、淡化其他元素

::: code-group
<<< @/code/property/dim/dim.ts [Leafer]
<<< @/code/property/dim/app/dim.ts [App]
:::
