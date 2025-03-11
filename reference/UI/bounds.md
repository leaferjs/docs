# bounds

元素的边界属性（包围盒）， 可通过 [Bounds](/reference/math/Bounds.md) 类使用边界。

![包围盒](/svg/obb-aabb.svg)

## 只读属性

画面排版的基础，从元素的宽高、笔触、阴影计算而来。

### boxBounds: [`IBoundsData`](/api/interfaces/IBoundsData.md)

元素在 [内部坐标系](/guide/basic/coordinate.md) 中的基础边界（OBB 包围盒）。

### renderBounds: [`IBoundsData`](/api/interfaces/IBoundsData.md)

元素在 [内部坐标系](/guide/basic/coordinate.md) 中的渲染边界（AABB 包围盒）。

### worldBoxBounds: [`IBoundsData`](/api/interfaces/IBoundsData.md)

元素在 [世界坐标系](/guide/basic/coordinate.md#world) 中的基础边界（AABB 包围盒）。

元素在 boxBounds 与 [worldTransform](./transform.md#只读属性) 相乘而来，如果元素旋转了，则是旋转之后取出的新边界。

### worldRenderBounds: [`IBoundsData`](/api/interfaces/IBoundsData.md)

元素在 [世界坐标系](/guide/basic/coordinate.md#world) 中的渲染边界（AABB 包围盒）。

## 来源于

### width: `number`

元素的宽度。

不支持直接设置的元素、Group 可通过 [resizeWidth()](/reference/UI/resize.md) 调整，通过 [boxBounds](/reference/UI/bounds.md#boxbounds-iboundsdata) 获取实际宽度 。

:::tip
当宽度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleX 镜像代替，开发环境中会发出一个警告。
:::

### height: `number`

元素的高度。

不支持直接设置的元素、Group 可通过 [resizeHeight()](/reference/UI/resize.md) 调整，通过 [boxBounds](/reference/UI/bounds.md#boxbounds-iboundsdata) 获取实际高度。

:::tip
当高度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleY 镜像代替，开发环境中会发出一个警告。
:::

### 其他

路径、文本、points 会自动计算它们形成的宽高。

## 关键方法

出于性能和安全考虑，返回的数据为只读对象。

### getBounds ( type: [`IBoundsType`](/api/modules.md#iboundstype) = 'box', relative?: [`ILocationType`](/api/modules.md#ilocationtype) | [`UI`](/reference/display/UI.md) = 'world' ): [`IBoundsData`](/api/interfaces/IBoundsData.md)

获取元素的 AABB 包围盒（边界）。

可获取不同 [坐标体系](/guide/basic/coordinate.md) 下的不同 [边界类型](/guide/basic/bounds.md)，relative 可指定坐标体系或相对元素

### getLayoutBounds ( type: [`IBoundsType`](/api/modules.md#iboundstype) = 'box', relative?: [`ILocationType`](/api/modules.md#ilocationtype) | [`UI`](/reference/display/UI.md) = 'world', unscale?: `boolean` ): [`ILayoutBoundsData`](/api/interfaces/ILayoutBoundsData.md)

获取元素的 OBB 包围盒（边界），含缩放、旋转等布局属性。

可设置 unscale = true 将 scale 转换为宽高，不过仍存在 scaleX / scaleY 为 -1 的镜像情况。

### getLayoutPoints ( type: [`IBoundsType`](/api/modules.md#iboundstype) = 'box', relative: [`ILocationType`](/api/modules.md#ilocationtype) | [`UI`](/reference/display/UI.md) = 'world' ): [`IPointData`](/api/interfaces/IPointData.md)[]

获取元素的 OBB 包围盒（边界）的四个坐标点 [topLeft, topRight, bottomRight, bottomLeft]。

```ts
type ILocationType = 'world' | 'local' | 'inner' // 坐标体系
type IBoundsType = 'content' | 'box' | 'stroke' | 'margin' | 'render' // 边界类型

rect.getBounds('box', 'local')
rect.getLayoutBounds('box', 'inner')
rect.getLayoutPoints('box', rect.leafer)

// 结合Bounds使用
new Bounds(rect.getBounds('box', 'local'))
```

## 边界转换

### getWorldBounds ( inner: [`IBoundsData`](/api/interfaces/IBoundsData.md), relative?: [`UI`](/reference/display/UI.md), change?: `boolean`): [`IBoundsData`](/api/interfaces/IBoundsData.md)

获取世界坐标的边界（AABB 包围盒，传入一个 [内部坐标系](/guide/basic/coordinate.md#inner) 的边界进行转换）。

第二个可选参数：relative?: [`UI`](/reference/display/UI.md)

将 `relative` 元素假设为世界坐标系，可以实现子级到任意一个父级坐标系之间的转换。

第三个可选参数：change?: `boolean`

直接修改传入的边界返回，可以节省创建新对象的开销。

## 归属

### [UI 元素](/reference/display/UI.md)
