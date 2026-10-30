# position

元素的坐标定位属性，相对父元素进行绝对定位。

## 关键属性

### x: `number`

x 轴位置。

注意 [offsetX](./offset.md)、[around](./around.md) 会改变元素的实际位置。

### y: `number`

y 轴位置。

注意 [offsetY](./offset.md)、[around](./around.md) 会改变元素的实际位置。

### position: [`IAlign`](../../api/modules.md#ialign) | `IInset`

position 布局，相对父级或指定元素进行方位、四周边缘定位，需安装 [position 插件](../../plugin/in/position/index.md) 才能使用。

会自动修改元素的 x、y、width、height 属性，父级必须为有宽高属性的 [Box](../display/Box.md)、[Frame](../display/Frame.md) 元素。

![方向图](/svg/deriction.svg)

```ts
// 相对父级方位定位
type IAlign =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'

rect.position = 'center' // 在父级的居中位置显示，会自动修改元素的 x、y 属性

// 相对父级四周边缘定位，类似 CSS 的绝对定位功能
interface IInset {
    id?: string // 相对父容器下的指定 id 元素定位，支持跨多层级
    align?: IAlign // 相对父级方位定位，优先采用

    top?: number | IUnitData
    left?: number | IUnitData
    bottom?: number | IUnitData
    right?: number | IUnitData
}

rect.position = { top: 20, right: 20  bottom: 20, left: 20, } // 距离父级四周各20px, 会自动修改元素的 x、y、width、height 属性
rect.position = { left: 20, right: 20 } // 距离父级左右边缘各20px, 会自动修改元素的 x、width 属性
rect.position = { top: 20, bottom: 20 } // 距离父级上下边缘各20px, 会自动修改元素的 y、height 属性
rect.position = { right: 20 } // 距离父级右边20px, 会自动修改元素的 x 属性
rect.position = { bottom: 20 } // 距离父级底部20px, 会自动修改元素的 y 属性

// 相对指定 id 元素定位
rect.position = { id: 'rect2', align: 'center' } // 在指定 rect2 元素的居中位置显示，会自动修改元素的 x、y 属性
rect.position = { id: 'rect2', top: 20, left: 20, right: 20, bottom: 20 }, // 距离 rect2 元素四周各20px, 会自动修改元素的 x、y、width、height 属性 // [!code hl]

// 使用百分比
interface IUnitData {
  type: 'percent' ｜ 'px'
  value: number
}

rect.position = { bottom: { value: 0.2, type: 'percent' } },  // 距离父级底部 20%, 会自动修改元素的 y 属性
```

## 关键方法

### move ( addX: `number` | [`IPointData`](../interface/math/Math#ipointdata), addY = 0, transition?: [`ITranstion`](./transition.md#transition-itranstion))

位移元素 <badge>增量操作</badge>， 支持直接传入 [坐标对象](../interface/math/Math.md#ipointdata)。

[`transition`](./transition.md#transition-itranstion) 参数表示是否进行 [动画](../../guide/plugin/animate.md) 过渡。

```ts
// 沿 X/Y 轴同时移动 10 像素
rect.move(10, 10)

// 使用 point 沿 X/Y 轴同时移动 10 像素
rect.move({ x: 10, y: 10 })

// 动画过渡移动
rect.move(10, 10, true)

rect.move(10, 10, 2) // 过渡 2 秒
```

### moveInner ( addX: `number` | [`IPointData`](../interface/math/Math#ipointdata), addY = 0, transition?: [`ITranstion`](./transition.md#transition-itranstion))

在 [内部坐标系](../../guide/advanced/coordinate.md) 中位移元素 <badge>增量操作</badge>， 支持直接传入 [坐标对象](../interface/math/Math.md#ipointdata)。

### moveWorld ( addWorldX: `number` | [`IPointData`](../interface/math/Math#ipointdata), addWorldY = 0, transition?: [`ITranstion`](./transition.md#transition-itranstion))

在 [世界坐标系](../../guide/advanced/coordinate.md#world-世界坐标系) 中位移元素 <badge>增量操作</badge>， 支持直接传入 [坐标对象](../interface/math/Math.md#ipointdata)。

## 归属

### [UI 元素](../display/UI.md)

## 示例

### 通过 move() 移动元素

::: code-group
<<< @/code/property/move/move.ts [Leafer]
<<< @/code/property/move/app/move.ts [App]
:::

### 通过 move() 移动元素，有动画过渡

::: code-group
<<< @/code/property/move/transition.ts [Leafer]
<<< @/code/property/move/app/transition.ts [App]
:::
