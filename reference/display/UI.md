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

[id](/reference/property/id.md) &nbsp; &nbsp; [tag](/reference/property/tag.md) &nbsp; &nbsp; [name](/reference/property/name.md) &nbsp; &nbsp; [className](/reference/property/className.md) &nbsp; &nbsp; [innerId](/reference/property/innerId.md) &nbsp; &nbsp; [innerName](/reference/property/innerName.md)

### parent / leafer

[parent](/reference/property/parent.md) &nbsp; &nbsp; [leafer](/reference/property/leafer.md)

### 数据 / 克隆

[data](/reference/property/data.md) &nbsp; &nbsp; [proxyData](/reference/property/proxy.md) &nbsp; &nbsp; [clone()](/reference/property/clone.md)

### 路径数据

[getPath()](/reference/property/getPath.md) &nbsp; &nbsp; [getPathString()](/reference/property/getPathString.md) &nbsp; &nbsp; [path](/reference/property/path.md)

### 导入导出

[export()](/reference/property/export.md) &nbsp; &nbsp; [toJSON()](/reference/property/json.md) &nbsp; &nbsp; [toString](/reference/property/json.md#tostring-string)

### 移除 / 销毁

[remove()](/reference/property/remove.md) &nbsp; &nbsp; [destroy()](/reference/property/destroy.md)

## 📐 布局

### 位置 / 缩放 / 旋转

[position](/reference/property/position.md) &nbsp; &nbsp; [size](/reference/property/size.md) &nbsp; &nbsp; [scale](/reference/property/scale.md) &nbsp; &nbsp; [flip()](/reference/property/flip.md) &nbsp; &nbsp; [rotation](/reference/property/rotation.md) &nbsp; &nbsp; [skew](/reference/property/skew.md)

### 偏移 / resize

[offset](/reference/property/offset.md) &nbsp; &nbsp; [resize](/reference/property/resize.md)

### 围绕中心

[origin](/reference/property/origin.md) &nbsp; &nbsp; [around](/reference/property/around.md)

### 包围盒 / 变换

[bounds](/reference/property/bounds.md) &nbsp; &nbsp; [transform](/reference/property/transform.md)

### 转换坐标

[转换坐标](/reference/property/point/index.md) &nbsp; &nbsp; [快速转换](/reference/property/point/high.md)

### 层叠 / 放置

[zIndex](/reference/property/zIndex.md) &nbsp; &nbsp; [dropTo()](/reference/property/dropTo.md)

## 🏼 外观

### 透明 / 隐藏

[opacity](/reference/property/opacity.md) &nbsp; &nbsp; [visible](/reference/property/visible.md)

### 填充 / 描边

[fill](/reference/property/fill.md) &nbsp; &nbsp; [stroke](/reference/property/stroke.md)

### 渐变 / 图像

[linear](/reference/property/paint/linear.md) &nbsp; &nbsp; [radial](/reference/property/paint/radial.md) &nbsp; &nbsp; [angular](/reference/property/paint/angular.md) &nbsp; &nbsp; [solid](/reference/property/paint/solid.md) &nbsp; &nbsp; [image](/reference/property/paint/image.md)

### 内外阴影

[shadow](/reference/property/shadow.md) &nbsp; &nbsp; [innerShadow](/reference/property/innerShadow.md)

### 裁剪 / 擦除

[clip](/reference/property/clip.md) &nbsp; &nbsp; [mask](/reference/property/mask.md) &nbsp; &nbsp; [eraser](/reference/property/eraser.md)

### 混合模式

[blendMode](/reference/property/blendMode.md)

## 🖱 交互

### 可交互性

[hittable](/reference/property/hit.md) &nbsp; &nbsp; [hitChildren](/reference/property/hitChildren.md) &nbsp; &nbsp; [hitSelf](/reference/property/hitSelf.md) &nbsp; &nbsp; [hitFill](/reference/property/hitFill.md) &nbsp; &nbsp; [hitStroke](/reference/property/hitStroke.md)

### 编辑 / 拖拽

[editable](/reference/property/editable.md) &nbsp; &nbsp; [draggable](/reference/property/draggable.md)

### 光标样式

[cursor](/reference/property/cursor.md)

### 交互状态

[state](/reference/property/state/state.md) &nbsp; &nbsp; [hover](/reference/property/state/hover.md) &nbsp; &nbsp; [press](/reference/property/state/press.md) &nbsp; &nbsp; [focus](/reference/property/state/focus.md) &nbsp; &nbsp; [selected](/reference/property/state/selected.md) &nbsp; &nbsp; [disabled](/reference/property/state/disabled.md)

### 事件处理

[on() / once()](/reference/property/on.md) &nbsp; &nbsp; [off()](/reference/property/off.md) &nbsp; &nbsp; [emit()](/reference/property/emit.md) &nbsp; &nbsp; [命名](/reference/event/name.md) &nbsp; &nbsp; [捕获/冒泡](/reference/event/flow.md) &nbsp; &nbsp; [模拟交互](/reference/event/simulation.md)

## 🐆 动画

### 动画

[animation](/reference/property/animation.md) &nbsp; &nbsp; [animate()](/reference/property/animate.md)

### 过渡

[transition](/reference/property/transition.md)

### 运动路径

[motionPath](/reference/property/motionPath.md) &nbsp; &nbsp; [motion](/reference/property/motion.md) &nbsp; &nbsp; [getMotionTotal()](/reference/property/getMotionTotal.md) &nbsp; &nbsp; [getMotionPoint()](/reference/property/getMotionPoint.md)

## 🌴 高级

### 限制拖动范围

[dragBounds](/reference/property/dragBounds.md)

### 强制渲染

[forceUpdate()](/reference/property/forceUpdate.md) &nbsp; &nbsp; [updateLayout()](/reference/property/forceUpdate.md#updatelayout) &nbsp; &nbsp; [forceRender()](/reference/property/forceRender.md) &nbsp; &nbsp; [nextRender()](/reference/property/nextRender.md)

### 查找拾取

[find()](/reference/property/find.md) &nbsp; &nbsp; [findOne()](/reference/property/findOne.md) &nbsp; &nbsp; [pick()](/reference/property/pick.md)

### 自定义属性

[changeAttr()](/reference/property/custom/changeAttr.md) &nbsp; &nbsp; [addAttr()](/reference/property/custom/addAttr.md)
