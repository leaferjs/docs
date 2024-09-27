# RotateEvent

旋转事件，可用于旋转视图或图形。

1. 移动端: 双指旋转
2. 触摸板: 双指旋转（仅 Safari 支持）

## 事件名称

### RotateEvent.START

开始旋转事件

`rotate.start`

### RotateEvent.ROTATE

旋转事件

`rotate`

### RotateEvent.END

结束旋转事件

`rotate.end`

## 关键属性

### rotation: `number`

此次旋转事件改变的角度

## 继承

### [UIEvent](./UIEvent.md)

<!-- ## API

### [RotateEvent](/api/classes/RotateEvent.md) -->

## 示例

::: code-group
<<< @/code/event-ui/rotate/simple.ts
<<< @/code/event-ui/rotate/simple.js
:::
