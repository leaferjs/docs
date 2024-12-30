# 获取包围盒大小

当我们用鼠标绘制图形，或对元素进行对齐、矩形碰撞检测的时候，需要知道元素的位置和大小，也就是包围盒。

## 包围盒的模型

图中是一个元素由内到外形成的各种类型包围盒，每个包围盒都包含 x、y、width、height 属性信息。

![盒子模型](/svg/bounds.svg)

### margin 包围盒

**外部边界:** 基准边界 + margin。

### render 包围盒

**渲染边界:** 笔触边界 + 阴影等。

### stroke 包围盒

**笔触边界:** 基准边界 + stroke，可响应交互事件的边界。

### box 包围盒

**基准边界:** 包含 padding，以此为基准向内、向外延伸边界。

### content 包围盒

**内容边界:** 填充内容的边界，不包含 padding，一般用于测量 [Text](/reference/display/Text.md) 的实际文本大小。

## OBB 和 AABB 包围盒

当元素被旋转、缩放后，在 [不同的坐标系下](./coordinate.md) 会形成 OBB 和 AABB 包围盒。

![包围盒](/svg/obb-aabb.svg)

<!--
### 内部坐标系边界

以元素自身为起点（0，0），由元素的宽高、路径形成的内部边界。

已提供了 [获取属性](/reference/property/bounds.md#boxbounds-iboundsdata) 与 [获取方法](/reference/property/bounds.md#关键方法)。

### 本地坐标系边界

以父元素为起点（0，0），将内部边界与 [localTransform](/reference/property/transform.md#localtransform-imatrixdata) 相乘而来，会受元素的 x、y、scaleX、scaleY、rotation 影响。

已提供了[获取方法](/reference/property/bounds.md#关键方法)。

### 世界坐标系边界

以画布左上角为起点（0，0），将内部边界与 [worldTransform](/reference/property/transform.md#worldtransform-imatrixdata) 相乘而来，会受元素及中间层级元素的 x、y、scaleX、scaleY、rotation 影响。

已提供了 [获取属性](/reference/property/bounds.md#boxbounds-iboundsdata) 与 [获取方法](/reference/property/bounds.md#关键方法)。 -->

## 示例

### 我们以创建图形的例子，来了解包围盒与坐标系的相互作用

按下鼠标拖动开始画矩形，抬起结束，当缩放平移视图后，仍然可以准确绘制新的矩形。

::: code-group
<<< @/code/plugin/editor/create-mode.ts
<<< @/code/plugin/editor/create-mode.js
:::

## 获取包围盒

### 事件中的获取方法

[DragEvent](/reference/event/ui/Drag#拖拽区域)

### 元素上的获取方法

| 名称                                                                                                                                                   | 描述                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| [boxBounds](/reference/property/bounds#boxbounds-iboundsdata)                                                                                          | 相对 [内部坐标系](/guide/basic/coordinate.md) 的基础边界（[OBB](/reference/property/bounds) 包围盒）        |
| [renderBounds](/reference/property/bounds#renderbounds-iboundsdata)                                                                                    | 相对 [内部坐标系](/guide/basic/coordinate.md) 的渲染边界（[AABB](/reference/property/bounds) 包围盒）       |
| [worldBoxBounds](/reference/property/bounds#worldboxbounds-iboundsdata)                                                                                | 相对 [世界坐标系](/guide/basic/coordinate.md#world) 的基础边界（[AABB](/reference/property/bounds) 包围盒） |
| [worldRenderBounds](/reference/property/bounds#worldrenderbounds-iboundsdata)                                                                          | 相对 [世界坐标系](/guide/basic/coordinate.md#world) 的渲染边界（[AABB](/reference/property/bounds) 包围盒） |
| [getBounds()](/reference/property/bounds#getbounds-type-iboundstype-box-relative-ilocationtype-ui-world-iboundsdata)                                   | 获取 [AABB](/reference/property/bounds) 包围盒（边界）                                                      |
| [getLayoutBounds()](/reference/property/bounds#getlayoutbounds-type-iboundstype-box-relative-ilocationtype-ui-world-unscale-boolean-ilayoutboundsdata) | 获取 [OBB](/reference/property/bounds) 包围盒（边界），含缩放、旋转等布局属性                               |
| [getLayoutPoints()](/reference/property/bounds#getlayoutpoints-type-iboundstype-box-relative-ilocationtype-ui-world-ipointdata)                        | 获取 [OBB](/reference/property/bounds) 包围盒（边界）的四个坐标点）                                         |

### 数学计算

### [Bounds 类](/reference/math/Bounds.md)

## 下一步

### [局部渲染](/guide/advanced/partRender)
