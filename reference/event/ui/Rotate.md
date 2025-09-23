# RotateEvent

旋转事件，一般用于 [视口交互](/guide/advanced/viewport.md) 中旋转 视图 或 元素。

1. 移动端: 双指旋转
2. 触摸板: 双指旋转（仅 Safari 支持）

::: tip 继承
RotateEvent &nbsp;>&nbsp; [PointerEvent](./Pointer) &nbsp;>&nbsp; [UIEvent](./UIEvent.md) &nbsp;>&nbsp; [Event](../basic/Event.md)

<br/>

需安装 [视口插件](/plugin/in/viewport/index.md) 才能使用， 或直接安装 [leafer-editor](/guide/install/editor/start.md)（已集成此插件）。
:::

## 事件名称

### RotateEvent.START

开始旋转事件。

`rotate.start`

### RotateEvent.ROTATE

旋转事件。

`rotate`

### RotateEvent.END

结束旋转事件。

`rotate.end`

## 关键属性

### rotation: `number`

此次旋转事件改变的角度。

### totalRotation: `number`

本轮旋转事件改变的总角度。

### multiTouch: `boolean`

是否为多点触屏派发。

<!-- ## 继承事件

### [UIEvent](./UIEvent.md) -->

<!-- ## API

### [RotateEvent](/api/classes/RotateEvent.md) -->

## 示例

::: code-group
<<< @/code/event-ui/rotate/simple.ts
<<< @/code/event-ui/rotate/simple.js
:::
