# UIEvent

所有交互事件的基类。

::: tip 继承
UIEvent &nbsp;>&nbsp; [Event](../basic/Event.md)
:::

## 关键属性

### x: `number`

在 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 中的 x 轴位置。

### y: `number`

在 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 中的 y 轴位置。

### path: [`ILeafList`](/api/interfaces/ILeafList.md)

事件流经的对象列表。

### throughPath?: [`ILeafList`](/api/interfaces/ILeafList.md)

事件穿透的对象列表，不受层级覆盖影响，从上到下只要碰撞到区域就算。

当[配置引擎](/reference/config/app/pointer.md#获取穿透路径)获取穿透列表，且有点击操作时才存在此属性。

### altKey: `boolean`

是否按下 alt 键。

### ctrlKey: `boolean`

是否按下 ctrl 键。

### shiftKey: `boolean`

是否按下 shift 键。

### spaceKey: `boolean`

是否按下 空格 键。

### buttons: `number`

事件触发时哪些鼠标按键被按下，如果同时多个按键被按下，则为相加的值:

- 0: 没有按键或者是没有初始化
- 1: 鼠标左键
- 2: 鼠标右键
- 4: 鼠标滚轮（中键）
- 8: 第四按键 (通常是“浏览器后退”按键)
- 16 : 第五按键 (通常是“浏览器前进”)

### left: `boolean`

是否按下鼠标左键。

### middle: `boolean`。

是否按下鼠标滚轮（中键）。

### right: `boolean`

是否按下鼠标右键。

### origin: `object`

原生事件对象。

## 转换坐标方法

x, y 属性的转换。

### getPagePoint ( ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件在 page 坐标系中的位置。

### getBoxPoint ( relative?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件相对于 relative 元素的 [box 坐标](/guide/advanced/coordinate.md#box-坐标系) 位置，relative 元素 不存在时为当前侦听元素。

### getInnerPoint ( relative?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件相对于 relative 元素的 [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) 位置，relative 元素 不存在时为当前侦听元素。

### getLocalPoint ( relative?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件相对于 relative 元素的 [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) 位置，relative 元素 不存在时为当前侦听元素。

<!-- ## 继承事件

### [Event](../basic/Event.md) -->

<!--
## API

### [UIEvent](/api/classes/UIEvent.md) -->
