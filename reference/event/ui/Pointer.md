# PointerEvent

鼠标、手写笔、触摸屏点击事件，支持 [右键菜单](#右键菜单-1) 事件。

当原生 PointerEvent 事件不存在时，使用其他原生事件替代的优先级:

PointerEvent > TouchEvent > MouseEvent

::: tip 继承
PointerEvent &nbsp;>&nbsp; [UIEvent](./UIEvent.md) &nbsp;>&nbsp; [Event](../basic/Event.md)

<br/>

[ script 标签引入](/guide/install/ui/start.md#通过-script-标签引入) 需用别名 **MyPointerEvent** 代替。
:::

## 新特性

### 多种点击事件同时只触发一个

`tap`、`double_tap`、`long_press` /`long_tap` 事件同时监听，根据实际情况默认只触发最匹配的一个, 也可以 [配置](./Pointer.md#同时派发多种点击事件) 同时触发。

### 事件配对触发

元素 `pointer.down` 事件触发后，保证元素一定会触发 `pointer.up` 事件, 不用担心因为拖拽、事件取消等原因导致配对中断。

### 新增属性

[left](./UIEvent.md#left-boolean)、 [middle](./UIEvent.md#left-boolean)、[right](./UIEvent.md#left-boolean)、[spaceKey](./UIEvent.md#spacekey-boolean)。

### 右键菜单

[PointerEvent.MENU](#右键菜单-1)

## 事件名称

### 基础事件

### PointerEvent.DOWN

按下事件。

`pointer.down`

### PointerEvent.MOVE

光标移动事件。

`pointer.move`

### PointerEvent.UP

抬起事件。

`pointer.up`

### PointerEvent.OVER

over 事件。

`pointer.over`

### PointerEvent.OUT

out 事件。

`pointer.out`

### PointerEvent.ENTER

进入事件。

`pointer.enter`

### PointerEvent.LEAVE

离开事件。

`pointer.leave`

### 复合事件

### PointerEvent.TAP

快速点击事件。

`tap`

### PointerEvent.DOUBLE_TAP

快速双击事件。

`double_tap`

### PointerEvent.LONG_PRESS

长按事件，长按中触发。

`long_press`

### PointerEvent.LONG_TAP

长按抬起事件，长按 UP 后马上触发。

`long_tap`

### PointerEvent.CLICK

点击事件， 推荐使用`tap`代替。

`click`

### PointerEvent.DOUBLE_CLICK

双击事件，推荐使用`double_tap`代替。

`double_click`

## 右键菜单

### PointerEvent.MENU

右键菜单事件，同 HTML 的 contextmenu 事件，按下时触发。

`pointer.menu`

### PointerEvent.MENU_TAP

右键 tap 事件, 抬起后触发。

`pointer.menu_tap`

## 关键属性

### x: `number`

在 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 中的 x 轴位置。

### y: `number`

在 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 中的 y 轴位置。

### width: `number`

接触面的宽度。

### height: `number`

接触面的高度。

### pointerType: `string`

触发事件的设备类型（鼠标，手写笔，触摸屏等）:

- "mouse"
- "pen"
- "touch"

### multiTouch: `boolean`

是否多点触屏中，非小程序版需开启 [app.config.pointer.touch](/reference/config/app/pointer.md#pointer-touch-boolean)

### pressure: `number`

按压的压力值，取值范围: 0 ～ 1.

### tangentialPressure?: `number`

pen（手写笔） 按压的切向压力值，取值范围: -1 ～ 1.

当 pointerType 为 'pen' 时才存在此属性.

### tiltX?: `number`

pen 与 y 轴构成的平面，和 y-z 平面之间的夹角， 取值范围: -90, 90.

### tiltY?: `number`

pen 与 x 轴构成的平面，和 x-z 平面之间的夹角， 取值范围: -90, 90.

### twist?: `number`

pen 围绕自身主轴顺时针旋转的角度，取值范围是 [0, 359] 度。

### isCancel: `boolean`

是否为取消（原生事件 pointer.cancel 或其他原因导致的取消）触发的 PointerEvent.UP 事件

## 转换坐标方法

x, y 属性的转换。

### getPagePoint ( ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件在 page 坐标系中的位置。

### getBoxPoint ( relative?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件相对于 relative 元素的 [box 坐标](/guide/advanced/coordinate.md#box-坐标系) 位置，relative 元素不存在时为当前侦听元素。

### getInnerPoint ( relative?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件相对于 relative 元素的 [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) 位置，relative 元素不存在时为当前侦听元素。

### getLocalPoint ( relative?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件相对于 relative 元素的 [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) 位置，relative 元素不存在时为当前侦听元素。

<!--
## 继承事件

### [UIEvent](./UIEvent.md) -->

<!-- ## API

### [PointerEvent](/api/classes/PointerEvent.md) -->

## 示例

### 多种点击事件同时只触发一个

同时监听 `tap`、`double_tap`、`long_tap` 事件， 默认只会触发其中之一。

<<< @/code/event-ui/pointer/tap.ts

### 同时派发多种点击事件

配置应用的 `pointer.tapMore` 为 true, `tap`、`double_tap`、`long_tap` 事件会同时触发。

<<< @/code/event-ui/pointer/tapMulti.ts

### 图形编辑器中显示右键菜单

::: code-group
<<< @/code/event-ui/pointer/editor-menu.ts
<<< @/code/event-ui/pointer/editor-menu.js
:::
