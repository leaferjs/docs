# 模拟交互

可用于自动化测试、回放用户操作，以及你能想到的...

像操控交互设备一样，与引擎进行交互，自动触发其他复合事件，如 pointerDown 之后 pointerUp 触发 tap 事件， pointerDown 之后 pointerMove 触发 drag 事件。

如果只是想简单的触发一个交互事件，可以使用元素的 [emit()](/reference/UI/emit.md) 方法。

## 关键方法

所有的模拟方法在 leafer.interaction 实例上。

### pointerDown ( data: [`IPointerEvent`](/api/interfaces/IPointerEvent.md) )

按下指针。

### pointerMove ( data: [`IPointerEvent`](/api/interfaces/IPointerEvent.md) )

移动指针。

### pointerUp ( data?: [`IPointerEvent`](/api/interfaces/IPointerEvent.md) )

抬起指针。

### zoom ( data: [`IZoomEvent`](/api/interfaces/IZoomEvent.md) )

缩放操作。

### move ( data: [`IMoveEvent`](/api/interfaces/IMoveEvent.md) )

平移操作。

### rotate ( data: [`IRotateEvent`](/api/interfaces/IRotateEvent.md) )

旋转操作。

## 示例

### 模拟点击

依次模拟鼠标点击左键、中建、右键， 将会自动触发一次 tap 事件

<<< @/code/interaction/pointer-down.ts

### 模拟 drag 事件

<<< @/code/interaction/drag.ts

### 模拟缩放

<<< @/code/interaction/zoom.ts

### 模拟平移

<<< @/code/interaction/move.ts

### 模拟旋转

::: code-group
<<< @/code/interaction/rotate.ts
<<< @/code/interaction/rotate.js
:::
