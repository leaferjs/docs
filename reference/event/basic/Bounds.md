# BoundsEvent

元素包围盒变化事件。

元素包围盒的变化比较频繁，为了不影响性能，引擎只会通知事件，不会构造事件实例。

::: tip 继承
BoundsEvent &nbsp;>&nbsp; [Event](../basic/Event.md)
:::

## 事件名称

### BoundsEvent.RESIZE

元素的 [内部坐标系](/guide/advanced/coordinate.md#inner-内部坐标系) 包围盒及 自身 scale 变化事件。

元素的宽高、路径变化（包含自身 scale 属性变化），支持 Group、Box 等组元素。

`bounds.resize`

### BoundsEvent.INNER

元素的 [内部坐标系](/guide/advanced/coordinate.md#inner-内部坐标系) 包围盒变化事件。

元素宽高、路径变化，支持 Group、Box 等组元素。

`bounds.inner`

### BoundsEvent.LOCAL

元素的 [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) 包围盒变化事件。

元素的位置、宽高、路径、scale、旋转、skew 等变化触发，支持 Group、Box 等组元素。

`bounds.local`

### BoundsEvent.WORLD

元素的 [世界坐标系](/guide/advanced/coordinate.md#world-世界坐标系) 包围盒变化事件。

元素在视图中的渲染位置、大小产生了变化就会触发，如视图平移缩放、上层父元素变化都会影响，支持 Group、Box 等组元素。

`bounds.world`

## 示例

::: code-group
<<< @/code/event/bounds/rect.ts
<<< @/code/event/bounds/rect.js
:::
