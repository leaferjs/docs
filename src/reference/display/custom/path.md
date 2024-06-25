# Custom

使用路径自定义图形。

## 注意事项

### 元素边界

我们通过定义明确的 [元素边界](/guide/basic/bounds.md) 来进行局部渲染、高效检测光标碰撞。

根据情况确定是否需重写 `__updateBoxBounds()` 方法定义正确的 [boxBounds 边界](/reference/property/bounds.md#boxbounds-iboundsdata)。

### 绘制线条

如果想画非闭合的线条，需要修改 strokeAlign 属性的默认值为 `center`（UI 默认是内描边）。

## 示例

::: code-group

<<< @/code/display/Custom/line.ts [自定义线条]

<<< @/code/display/Custom/shape.ts [自定义图形]
:::

## 下一步

### [context 绘制](/reference/display/custom/context.md)
