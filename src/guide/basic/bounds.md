# 边界模型

图中是基于[内部坐标系](./coordinate#内部坐标-inner)由内到外形成的边界。

![盒子模型](/svg/bounds.svg)

## 边界类型

### content

**内容边界:** 填充内容的边界，不包含 padding，一般用于[Text](/reference/display/Text.md) 。

### box

**基准边界:** 包含 padding，以此为基准向内、向外延伸边界。

### stroke

**笔触边界:** 基准边界 + stroke，可响应交互事件的边界。

### margin

**外部边界:** 基准边界 + margin。

### render

**渲染边界:** 笔触边界 + 阴影等。

## 坐标系边界

### 内部坐标系边界

以元素自身为起点（0，0），由元素的宽高、路径形成的内部边界。

已提供了 [获取属性](/reference/property/bounds.md#boxbounds-iboundsdata) 与 [获取方法](/reference/property/bounds.md#关键方法)。

### 本地坐标系边界

以父元素为起点（0，0），将内部边界与 [localTransform](/reference/property/transform.md#localtransform-imatrixdata) 相乘而来，会受元素的 x、y、scaleX、scaleY、rotation 影响。

已提供了[获取方法](/reference/property/bounds.md#关键方法)。

### 世界坐标系边界

以画布左上角为起点（0，0），将内部边界与 [worldTransform](/reference/property/transform.md#worldtransform-imatrixdata) 相乘而来，会受元素及中间层级元素的 x、y、scaleX、scaleY、rotation 影响。

已提供了 [获取属性](/reference/property/bounds.md#boxbounds-iboundsdata) 与 [获取方法](/reference/property/bounds.md#关键方法)。

## 应用示例

### [bounds](/reference/property/bounds.md)

## 下一步

### [渲染周期](/guide/life/render.md)
