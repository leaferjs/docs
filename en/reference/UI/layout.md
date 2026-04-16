# layout

Element layout-related properties

## Key Properties

### x: `number`

Position on the x-axis.

Note that [offsetX](./offset.md) and [around](./around.md) will affect the actual position of the element.

### y: `number`

Position on the y-axis.

Note that [offsetY](./offset.md) and [around](./around.md) will affect the actual position of the element.

### width: `number`

The width of the element.

Elements that do not support direct width assignment, or Group, can adjust it via [resizeWidth()](./resize.md), and get the actual width via [boxBounds](./bounds.md#boxbounds-iboundsdata).

:::tip
当宽度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleX 镜像代替，开发环境中会发出一个警告。
:::

### height: `number`

The height of the element. Only some elements support direct assignment.

Elements that do not support direct height assignment, or Group, can adjust it via [resizeHeight()](./resize.md), and get the actual height via [boxBounds](./bounds.md#boxbounds-iboundsdata).

:::tip
当高度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleY 镜像代替，开发环境中会发出一个警告。
:::

### scaleX: `number`

Scale on the x-axis. A negative value indicates mirroring on the x-axis.

### scaleY: `number`

Scale on the y-axis. A negative value indicates mirroring on the y-axis.

### rotation: `number`

[Rotation angle](../interface/math/Math.md#rotation), ranging from -180 to 180.

### skewX: `number`

Skew angle on the y-axis, ranging from -90 to 90.

### skewY: `number`

Skew angle on the x-axis, ranging from -90 to 90.

## Computed Property

### scale: `number` | [`IPointData`](../interface/math/Math.md#ipointdata)

Quickly set scaleX and scaleY.

```ts
leaf.scale = 2 // scaleX = 2, scaleY = 2
console.log(leaf.scale) // 2

leaf.scale = { x: 1, y: 2 } // scaleX = 1, scaleY = 2
console.log(leaf.scale) // {x: 1, y: 2}
```

## Key Method

### updateLayout ( )

Request a layout update. If there is no layout change in Leafer, it will be ignored.

## More

### [Transform Properties & Methods](./transform.md)

### [Bounds Properties & Methods](./bounds.md)

## 归属

### [UI Element](../display/UI.md)
