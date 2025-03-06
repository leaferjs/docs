# UI 元素

基础元素（所有元素的基类），展示所有元素通用的属性方法。

除了 API 列表之外，我们还提供了简单的 [分类方式](#分类) 来快速了解 API 的构成。

## 📃 API

### 所有属性

<!--@include: ../api/UI/property.md-->

### 所有方法

<!--@include: ../api/UI/method.md-->

### 静态方法

| 名称                                               | 描述                              |
| -------------------------------------------------- | --------------------------------- |
| [changeAttr()](/reference/UI/custom/changeAttr.md) | 修改元素属性的默认值 （全局操作） |
| [addAttr()](/reference/UI/custom/addAttr.md)       | 新增元素属性（全局操作）          |

##

# 分类

我们还提供了简单的 分类方式 来快速了解 API 的构成， 如下：

## 🎞️ 数据

### id / name

[id](/reference/UI/id.md) &nbsp; &nbsp; [tag](/reference/UI/tag.md) &nbsp; &nbsp; [name](/reference/UI/name.md) &nbsp; &nbsp; [className](/reference/UI/className.md) &nbsp; &nbsp; [innerId](/reference/UI/innerId.md) &nbsp; &nbsp; [innerName](/reference/UI/innerName.md)

### parent / leafer

[parent](/reference/UI/parent.md) &nbsp; &nbsp; [leafer](/reference/UI/leafer.md)

### 数据 / 克隆

[data](/reference/UI/data.md) &nbsp; &nbsp; [proxyData](/reference/UI/proxy.md) &nbsp; &nbsp; [clone()](/reference/UI/clone.md)

### 路径数据

[getPath()](/reference/UI/getPath.md) &nbsp; &nbsp; [getPathString()](/reference/UI/getPathString.md) &nbsp; &nbsp; [path](/reference/UI/path.md)

### 导入导出

[export()](/reference/UI/export.md) &nbsp; &nbsp; [toJSON()](/reference/UI/json.md) &nbsp; &nbsp; [toString](/reference/UI/json.md#tostring-string)

### 移除 / 销毁

[remove()](/reference/UI/remove.md) &nbsp; &nbsp; [destroy()](/reference/UI/destroy.md)

## 📐 布局

### 位置 / 缩放 / 旋转

[position](/reference/UI/position.md) &nbsp; &nbsp; [size](/reference/UI/size.md) &nbsp; &nbsp; [scale](/reference/UI/scale.md) &nbsp; &nbsp; [flip()](/reference/UI/flip.md) &nbsp; &nbsp; [rotation](/reference/UI/rotation.md) &nbsp; &nbsp; [skew](/reference/UI/skew.md)

### 偏移 / resize

[offset](/reference/UI/offset.md) &nbsp; &nbsp; [resize](/reference/UI/resize.md)

### 围绕中心

[origin](/reference/UI/origin.md) &nbsp; &nbsp; [around](/reference/UI/around.md)

### 包围盒 / 变换

[bounds](/reference/UI/bounds.md) &nbsp; &nbsp; [transform](/reference/UI/transform.md)

### 转换坐标

[转换坐标](/reference/UI/point/index.md) &nbsp; &nbsp; [快速转换](/reference/UI/point/high.md)

### 层叠 / 放置

[zIndex](/reference/UI/zIndex.md) &nbsp; &nbsp; [dropTo()](/reference/UI/dropTo.md)

## 🏼 外观

### 透明 / 隐藏

[opacity](/reference/UI/opacity.md) &nbsp; &nbsp; [visible](/reference/UI/visible.md)

### 填充 / 描边

[fill](/reference/UI/fill.md) &nbsp; &nbsp; [stroke](/reference/UI/stroke.md)

### 渐变 / 图像

[linear](/reference/UI/paint/linear.md) &nbsp; &nbsp; [radial](/reference/UI/paint/radial.md) &nbsp; &nbsp; [angular](/reference/UI/paint/angular.md) &nbsp; &nbsp; [solid](/reference/UI/paint/solid.md) &nbsp; &nbsp; [image](/reference/UI/paint/image.md)

### 内外阴影

[shadow](/reference/UI/shadow.md) &nbsp; &nbsp; [innerShadow](/reference/UI/innerShadow.md)

### 裁剪 / 擦除

[clip](/reference/UI/clip.md) &nbsp; &nbsp; [mask](/reference/UI/mask.md) &nbsp; &nbsp; [eraser](/reference/UI/eraser.md)

### 混合模式

[blendMode](/reference/UI/blendMode.md)

## 🖱 交互

### 可交互性

[hittable](/reference/UI/hit.md) &nbsp; &nbsp; [hitChildren](/reference/UI/hitChildren.md) &nbsp; &nbsp; [hitSelf](/reference/UI/hitSelf.md) &nbsp; &nbsp; [hitFill](/reference/UI/hitFill.md) &nbsp; &nbsp; [hitStroke](/reference/UI/hitStroke.md)

### 编辑 / 拖拽

[editable](/reference/UI/editable.md) &nbsp; &nbsp; [draggable](/reference/UI/draggable.md)

### 光标样式

[cursor](/reference/UI/cursor.md)

### 交互状态

[state](/reference/UI/state/state.md) &nbsp; &nbsp; [hover](/reference/UI/state/hover.md) &nbsp; &nbsp; [press](/reference/UI/state/press.md) &nbsp; &nbsp; [focus](/reference/UI/state/focus.md) &nbsp; &nbsp; [selected](/reference/UI/state/selected.md) &nbsp; &nbsp; [disabled](/reference/UI/state/disabled.md)

### 事件处理

[on() / once()](/reference/UI/on.md) &nbsp; &nbsp; [off()](/reference/UI/off.md) &nbsp; &nbsp; [emit()](/reference/UI/emit.md) &nbsp; &nbsp; [命名](/reference/event/name.md) &nbsp; &nbsp; [捕获/冒泡](/reference/event/flow.md) &nbsp; &nbsp; [模拟交互](/reference/event/simulation.md)

## 🐆 动画

### 动画

[animation](/reference/UI/animation.md) &nbsp; &nbsp; [animate()](/reference/UI/animate.md)

### 过渡

[transition](/reference/UI/transition.md)

### 运动路径

[motionPath](/reference/UI/motionPath.md) &nbsp; &nbsp; [motion](/reference/UI/motion.md) &nbsp; &nbsp; [getMotionTotal()](/reference/UI/getMotionTotal.md) &nbsp; &nbsp; [getMotionPoint()](/reference/UI/getMotionPoint.md)

## 🌴 高级

### 限制拖动范围

[dragBounds](/reference/UI/dragBounds.md)

### 强制渲染

[forceUpdate()](/reference/UI/forceUpdate.md) &nbsp; &nbsp; [updateLayout()](/reference/UI/forceUpdate.md#updatelayout) &nbsp; &nbsp; [forceRender()](/reference/UI/forceRender.md) &nbsp; &nbsp; [nextRender()](/reference/UI/nextRender.md)

### 查找拾取

[find()](/reference/UI/find.md) &nbsp; &nbsp; [findOne()](/reference/UI/findOne.md) &nbsp; &nbsp; [pick()](/reference/UI/pick.md)

### 自定义属性

[changeAttr()](/reference/UI/custom/changeAttr.md) &nbsp; &nbsp; [addAttr()](/reference/UI/custom/addAttr.md)
