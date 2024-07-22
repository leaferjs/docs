# MoveEvent

移动事件，一般用于[视窗交互](/guide/app/window.md)中平移视图。

1. 移动端: 双指滑动
2. 触摸板: 双指滑动
3. 鼠标: 滚轮（纵向平移），Shift + 滚轮（横向平移），鼠标中键 + 拖拽 (自由移动)
4. 拖拽: 拖拽元素到达视图边界时，会自动平移视图，以实现向外拖拽

## 事件名称

### MoveEvent.START

开始移动事件

`move.start`

### MoveEvent.MOVE

移动事件

`move`

### MoveEvent.END

结束移动事件

`move.end`

## 关键属性

### moveType: `'move'` | `'drag'`

移动视图的类型，drag 表示通过拖拽事件移动，move 表示通过滚轮、双指滑动事件移动

### moveX: `number`

此次移动事件偏移的 X 轴距离（世界坐标）

### moveY: `number`

此次移动事件偏移的 Y 轴距离（世界坐标）

## 坐标转换方法

moveX, moveY 属性的坐标转换。

### getPageMove ( ): [`IPointData`](/reference/interface/math/Math#ipointdata)

获取在 page 坐标系中的偏移距离。

### getInnerMove ( target?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math#ipointdata)

获取相对于 target [内部坐标](/guide/basic/coordinate.md#inner) 的偏移距离，target 不存在时为当前侦听元素。

### getLocalMove ( relative?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math#ipointdata)

获取相对于 target [本地坐标](/guide/basic/coordinate.md#local) 的偏移距离，target 不存在时为当前侦听元素。

## 继承

### [DragEvent](./Drag)

## API

### [MoveEvent](/api/classes/MoveEvent.md)

## 示例

<<< @/code/event-ui/move/simple.ts
