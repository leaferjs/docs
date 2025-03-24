# Custom

使用 canvas.context 自定义图形。

需要自己处理元素边界、光标碰撞、绘制样式，一般用来对接其他的 canvas 库。

## 注意事项

### 元素边界

我们通过定义明确的 [元素边界](/guide/advanced/bounds.md) 来进行局部渲染、高效检测光标碰撞。

根据情况确定是否需重写 `__updateBoxBounds()` 方法定义正确的 [boxBounds 边界](/reference/UI/bounds.md#boxbounds-iboundsdata)。

### 光标碰撞

我们首先会检测光标与元素边界是否碰撞，之后才会进行细节碰撞检测，从而可以达到从百万级的元素中快速拾取元素。

根据情况确定是否需重写元素 ` __drawHitPath()` 方法定义碰撞路径。

### 绘制样式

为了提高绘制性能，并没有在每一次绘制时进行 save() 与 restore() 操作，需注意：

1. 当描边时，需调用 `canvas.setStrokeOptions()` 重置为当前描边样式（如 dashPattern、strokeCap 等），否则可能会应用到之前的描边样式。

2. 当使用了 clip 和滤镜时需要进行还原操作，否则会影响后续元素的绘制。

## 示例

<<< @/code/display/Custom/demo.ts

## 恭喜 🎉

你已完成所有自定义元素的教程～
