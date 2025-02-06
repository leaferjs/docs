# UI

基础元素（所有元素的基类），展示所有元素通用的属性方法。

除了 API 列表之外，我们还提供了简单的 [分类方式](#分类) 来快速了解 API 的构成。

## 📃 API

### 所有属性

<!--@include: ../api/UI/property.md-->

### 所有方法

<!--@include: ../api/UI/method.md-->

### 静态方法

| 名称                                                     | 描述                              |
| -------------------------------------------------------- | --------------------------------- |
| [changeAttr()](/reference/property/custom/changeAttr.md) | 修改元素属性的默认值 （全局操作） |
| [addAttr()](/reference/property/custom/addAttr.md)       | 新增元素属性（全局操作）          |

##

# 分类

我们还提供了简单的 分类方式 来快速了解 API 的构成， 如下：

## 🎞️ 数据

### id / name

[id](/reference/property/id) &nbsp; &nbsp; [tag](/reference/property/tag) &nbsp; &nbsp; [name](/reference/property/name) &nbsp; &nbsp; [className](/reference/property/className) &nbsp; &nbsp; [innerId](/reference/property/innerId) &nbsp; &nbsp; [innerName](/reference/property/innerName)

### parent / leafer

[parent](/reference/property/parent) &nbsp; &nbsp; [leafer](/reference/property/leafer)

### 数据 / 克隆

[data](/reference/property/data) &nbsp; &nbsp; [proxyData](/reference/property/proxy) &nbsp; &nbsp; [clone()](/reference/property/clone)

### 路径数据

[getPath()](/reference/property/getPath.md) &nbsp; &nbsp; [getPathString()](/reference/property/getPathString.md) &nbsp; &nbsp; [path](/reference/property/path)

### 导入导出

[export()](/reference/property/export.md) &nbsp; &nbsp; [toJSON()](/reference/property/json.md) &nbsp; &nbsp; [toString](/reference/property/json.md#tostring-string)

### 移除 / 销毁

[remove()](/reference/property/remove) &nbsp; &nbsp; [destroy()](/reference/property/destroy)

## 📐 布局

### 位置 / 缩放 / 旋转

[position](/reference/property/position) &nbsp; &nbsp; [size](/reference/property/size) &nbsp; &nbsp; [scale](/reference/property/scale) &nbsp; &nbsp; [flip()](/reference/property/flip) &nbsp; &nbsp; [rotation](/reference/property/rotation) &nbsp; &nbsp; [skew](/reference/property/skew)

### 偏移 / resize

[offset](/reference/property/offset) &nbsp; &nbsp; [resize](/reference/property/resize)

### 围绕中心

[origin](/reference/property/origin) &nbsp; &nbsp; [around](/reference/property/around)

### 包围盒 / 变换

[bounds](/reference/property/bounds) &nbsp; &nbsp; [transform](/reference/property/transform)

### 转换坐标

[转换坐标](/reference/property/point/) &nbsp; &nbsp; [快速转换](/reference/property/point/high)

### 层叠 / 放置

[zIndex](/reference/property/zIndex) &nbsp; &nbsp; [dropTo()](/reference/property/dropTo)

## 🏼 外观

### 透明 / 隐藏

[opacity](/reference/property/opacity) &nbsp; &nbsp; [visible](/reference/property/visible)

### 填充 / 描边

[fill](/reference/property/fill) &nbsp; &nbsp; [stroke](/reference/property/stroke)

### 渐变 / 图像

[linear](/reference/property/paint/linear) &nbsp; &nbsp; [radial](/reference/property/paint/radial) &nbsp; &nbsp; [angular](/reference/property/paint/angular) &nbsp; &nbsp; [solid](/reference/property/paint/solid) &nbsp; &nbsp; [image](/reference/property/paint/image)

### 内外阴影

[shadow](/reference/property/shadow) &nbsp; &nbsp; [innerShadow](/reference/property/innerShadow)

### 裁剪 / 擦除

[clip](/reference/property/clip) &nbsp; &nbsp; [mask](/reference/property/mask) &nbsp; &nbsp; [eraser](/reference/property/eraser)

### 混合模式

[blendMode](/reference/property/blendMode)

## 🖱 交互

### 可交互性

[hittable](/reference/property/hit) &nbsp; &nbsp; [hitChildren](/reference/property/hitChildren) &nbsp; &nbsp; [hitSelf](/reference/property/hitSelf) &nbsp; &nbsp; [hitFill](/reference/property/hitFill) &nbsp; &nbsp; [hitStroke](/reference/property/hitStroke)

### 编辑 / 拖拽

[editable](/reference/property/editable) &nbsp; &nbsp; [draggable](/reference/property/draggable)

### 光标样式

[cursor](/reference/property/cursor)

### 交互状态

[state](/reference/property/state/state.md) &nbsp; &nbsp; [hover](/reference/property/state/hover.md) &nbsp; &nbsp; [press](/reference/property/state/press.md) &nbsp; &nbsp; [focus](/reference/property/state/focus.md) &nbsp; &nbsp; [selected](/reference/property/state/selected.md) &nbsp; &nbsp; [disabled](/reference/property/state/disabled.md)

### 事件处理

[on() / once()](/reference/property/on) &nbsp; &nbsp; [off()](/reference/property/off) &nbsp; &nbsp; [emit()](/reference/property/emit) &nbsp; &nbsp; [命名](/reference/event/name) &nbsp; &nbsp; [捕获/冒泡](/reference/event/flow) &nbsp; &nbsp; [模拟交互](/reference/event/simulation)

## 🐆 动画

### 动画

[animation](/reference/property/animation) &nbsp; &nbsp; [animate()](/reference/property/animate)

### 过渡

[transition](/reference/property/transition)

### 运动路径

[motionPath](/reference/property/motionPath) &nbsp; &nbsp; [motion](/reference/property/motion) &nbsp; &nbsp; [getMotionTotal()](/reference/property/getMotionTotal) &nbsp; &nbsp; [getMotionPoint()](/reference/property/getMotionPoint)

## 🌴 高级

### 限制拖动范围

[dragBounds](/reference/property/dragBounds.md)

### 强制渲染

[forceUpdate()](/reference/property/forceUpdate.md) &nbsp; &nbsp; [updateLayout()](/reference/property/forceUpdate.md#updatelayout) &nbsp; &nbsp; [forceRender()](/reference/property/forceRender.md) &nbsp; &nbsp; [nextRender()](/reference/property/nextRender.md)

### 查找拾取

[find()](/reference/property/find.md) &nbsp; &nbsp; [findOne()](/reference/property/findOne.md) &nbsp; &nbsp; [pick()](/reference/property/pick.md)

### 自定义属性

[changeAttr()](/reference/property/custom/changeAttr.md) &nbsp; &nbsp; [addAttr()](/reference/property/custom/addAttr.md)
