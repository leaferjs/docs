# 坐标体系

我们的应用是一个多层级的树状结构，层层嵌套，每个层级都有独立的 x、y、scaleX、scaleY、rotation、skewX、skewY 属性，这些属性因子构成了一个个独立起点的坐标系。

以小圆作为参照物，从 3D 视角俯视，由下到上，依次为小圆的内部坐标系、本地坐标系、page 坐标系、世界坐标系。

<br/>

![坐标体系](/svg/coordinate.svg)

<br/>

<br/>

![坐标体系透视图](/svg/coordinate-3d.svg)

<br/>

## 坐标系类型

判断坐标的类型，只需看坐标的起点是相对谁，就是哪一个坐标系。

### box

**包围盒坐标系:** 元素包围盒 [boxBounds](/reference/property/bounds.md#boxbounds-iboundsdata) 内的坐标

以元素实际内容的左上角为起点（0，0），一般情况下和 inner 坐标一样，当元素内容的起点不是从 inner 坐标（0，0）开始时会有差异，如路径 Path 经常不是从 0,0 开始绘制的。

### inner

**内部坐标系:** 元素内的坐标

以元素的 x,y 位置为起点（0，0）， 如元素的 width、 height、路径（Line、Path 等）中的坐标点，可以把元素想象成一个房间，房间内不受元素的 x、y、scaleX、scaleY、rotation 影响。

```ts
const rect = new Rect({
  width: 100, // [!code hl:2]
  height: 100
  stroke: 'black',
})

const path = new Path({
  path: 'M 0 0 L 100 100 L 0 100 Z', // [!code hl]
  stroke: 'black',
})
```

### local

**本地坐标系:** 相对父元素的坐标（相对坐标），类似 HTML 的 offset 坐标系

以父元素为起点（0，0），如元素的 x、y、scaleX、scaleY、rotation 属性，可以把父元素想象成房子所在的小区，内部坐标想转换为本地坐标，会受元素的 x、y、scaleX、scaleY、rotation 影响。

```ts
const path = new Path({
  x: 200, // [!code hl:2]
  y: 300,
  path: 'M 0 0 L 100 100 L 0 100 Z',
  stroke: 'black',
})
```

### page

**场景坐标系:** 相对 [缩放层](/reference/display/Leafer.md#zoomlayer-group) 的坐标（leafer 内容层坐标）， 类似 HTML 的 page 坐标系

以 leafer [缩放层](/reference/display/Leafer.md#zoomlayer-group) 为起点（0，0），一般是 leafer 自身， 第一层的根元素添加在这个坐标系中。

### world

**世界坐标系:** 在画布上的坐标（画布视口坐标），类似 HTML 的 window / client 坐标系

以画布左上角为起点（0，0），交互事件中的坐标基本都是世界坐标系，可以把画布想象成游戏世界，内部坐标想转换为世界坐标，会受元素及中间层级元素的 x、y、scaleX、scaleY、rotation 影响。

## 应用示例

我们一般通过 [transform](/reference/property/transform.md) 合并 x、y、scaleX、scaleY、rotation、skewX、skewY 属性因子用于矩阵运算，方便元素定位与坐标转换，[转换坐标](/reference/property/point/index.md) 其实就是要转换不同层级间的这些属性因子关系。

### [transform](/reference/property/transform.md)

### [转换坐标](/reference/property/point/index.md)

## 下一步

### [包围盒（边界模型）](/guide/basic/bounds.md)
