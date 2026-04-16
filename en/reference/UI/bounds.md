# bounds

Element boundary properties (bounding box). You can work with bounds via the [Bounds](../math/Bounds.md) class.

![Bounding box](/svg/obb-aabb.svg)

## Read-only Properties

The foundation of layout, calculated from the element’s width, height, stroke, and shadow.

### boxBounds: [`IBoundsData`](../../api/interfaces/IBoundsData.md)

The element’s base bounds in the [internal coordinate system](../../guide/advanced/coordinate.md) (OBB bounding box).

### renderBounds: [`IBoundsData`](../../api/interfaces/IBoundsData.md)

The element’s render bounds in the [internal coordinate system](../../guide/advanced/coordinate.md) (AABB bounding box).

### worldBoxBounds: [`IBoundsData`](../../api/interfaces/IBoundsData.md)

The element’s base bounds in the [world coordinate system](../../guide/advanced/coordinate.md#world-世界坐标系) (AABB bounding box).

Calculated from `boxBounds` multiplied by [worldTransform](./transform.md#只读属性). If the element is rotated, this is the new bounding box after rotation.

### worldRenderBounds: [`IBoundsData`](../../api/interfaces/IBoundsData.md)

The element’s render bounds in the [world coordinate system](../../guide/advanced/coordinate.md#world-世界坐标系) (AABB bounding box).

## Derived From

### width: `number`

The width of the element.

For elements or Groups that do not support direct setting, you can adjust it via [resizeWidth()](./resize.md), and get the actual width via [boxBounds](./bounds.md#boxbounds-iboundsdata).

:::tip
当宽度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleX 镜像代替，开发环境中会发出一个警告。
:::

### height: `number`

The height of the element.

For elements or Groups that do not support direct setting, you can adjust it via [resizeHeight()](./resize.md), and get the actual height via [boxBounds](./bounds.md#boxbounds-iboundsdata).

:::tip
当高度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleY 镜像代替，开发环境中会发出一个警告。
:::

## Auxiliary Properties

### renderSpread: [`IFourNumber`](../interface/math/Math.md#ifournumber)

强制扩大渲染边界数值，防止文本等渲染边界测量不正确导致花屏, 默认为 0。

```ts
renderSpread: [20, 10, 20, 10] // [top, right, bottom, left]
renderSpread: [20, 10, 20] // [top, (right-left), bottom]
renderSpread: [20, 10] // [(top-bottom), (right-left)]
renderSpread: 20 // all
```

### Others

Paths, text, and points will automatically calculate their resulting width and height.

## Key Methods

For performance and safety reasons, returned data is read-only.

### getBounds ( type: [`IBoundsType`](../../api/modules.md#iboundstype) = 'box', relative?: [`ILocationType`](../../api/modules.md#ilocationtype) | [`UI`](../display/UI.md) = 'world' ): [`IBoundsData`](../../api/interfaces/IBoundsData.md)

Get the element’s AABB bounding box.

You can retrieve different [bounds types](../../guide/advanced/bounds.md) in different [coordinate systems](../../guide/advanced/coordinate.md). The `relative` parameter can specify a coordinate system or a reference element.

### getLayoutBounds ( type: [`IBoundsType`](../../api/modules.md#iboundstype) = 'box', relative?: [`ILocationType`](../../api/modules.md#ilocationtype) | [`UI`](../display/UI.md) = 'world', unscale?: `boolean` ): [`ILayoutBoundsData`](../../api/interfaces/ILayoutBoundsData.md)

Get the element’s OBB bounding box, including layout properties such as scaling and rotation.

You can set `unscale = true` to convert scale into width and height, though mirrored cases with `scaleX / scaleY = -1` may still exist.

### getLayoutPoints ( type: [`IBoundsType`](../../api/modules.md#iboundstype) = 'box', relative: [`ILocationType`](../../api/modules.md#ilocationtype) | [`UI`](../display/UI.md) = 'world' ): [`IPointData`](../../api/interfaces/IPointData.md)[]

Get the four corner points of the element’s OBB bounding box: [topLeft, topRight, bottomRight, bottomLeft].

```ts
type ILocationType = 'world' | 'page' | 'local' | 'inner' // coordinate systems
type IBoundsType = 'content' | 'box' | 'stroke' | 'margin' | 'render' // bounds types

rect.getBounds('box', 'local')
rect.getLayoutBounds('box', 'inner')
rect.getLayoutPoints('box', rect.leafer)

// Use with Bounds
new Bounds(rect.getBounds('box', 'local'))
```

## Bounds Conversion

### getWorldBounds ( inner: [`IBoundsData`](../../api/interfaces/IBoundsData.md), relative?: [`UI`](../display/UI.md), change?: `boolean`): [`IBoundsData`](../../api/interfaces/IBoundsData.md)

Get bounds in the world coordinate system (AABB). Pass in bounds from the [internal coordinate system](../../guide/advanced/coordinate.md#inner-内部坐标系) for conversion.

Second optional parameter: relative?: [`UI`](../display/UI.md)

Treat the `relative` element as the world coordinate system to convert from a child to any parent coordinate system.

Third optional parameter: change?: `boolean`

Modify the input bounds directly and return it to avoid creating a new object.

## 归属

### [UI Elements](../display/UI.md)

## Example

### Detect bounding box collision between elements

<<< @/code/advanced/bounds/test.ts
