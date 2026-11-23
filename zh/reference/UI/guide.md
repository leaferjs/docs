# 元素通用功能

为了方便快速了解 [UI 元素](../display/UI.md) 的 API，我们将其通用功能进行了分类，如下：

## 🎞️ 数据

### id / name

[id](../UI/id.md) &nbsp; &nbsp; [tag](../UI/tag.md) &nbsp; &nbsp; [name](../UI/name.md) &nbsp; &nbsp; [className](../UI/className.md) &nbsp; &nbsp; [innerId](../UI/innerId.md) &nbsp; &nbsp; [innerName](../UI/innerName.md)

### parent / leafer

[parent](../UI/parent.md) &nbsp; &nbsp; [leafer](../UI/leafer.md)

### 数据 / 克隆

[data](../UI/data.md) &nbsp; &nbsp; [proxyData](../UI/proxy.md) &nbsp; &nbsp; [clone()](../UI/clone.md)

### 路径数据

[getPath()](../UI/getPath.md) &nbsp; &nbsp; [getPathString()](../UI/getPathString.md) &nbsp; &nbsp; [path](../UI/path.md)

### 导入导出

[export()](../UI/export.md) &nbsp; &nbsp; [toJSON()](../UI/json.md) &nbsp; &nbsp; [toString](../UI/json.md#tostring-string)

### 移除 / 销毁

[remove()](../UI/remove.md) &nbsp; &nbsp; [destroy()](../UI/destroy.md)

## 📐 布局

### 位置 / 缩放 / 旋转

[position](../UI/position.md) &nbsp; &nbsp; [size](../UI/size.md) &nbsp; &nbsp; [scale](../UI/scale.md) &nbsp; &nbsp; [flip()](../UI/flip.md) &nbsp; &nbsp; [rotation](../UI/rotation.md) &nbsp; &nbsp; [skew](../UI/skew.md)

### 偏移 / resize

[offset](../UI/offset.md) &nbsp; &nbsp; [resize](../UI/resize.md)

### 围绕中心

[origin](../UI/origin.md) &nbsp; &nbsp; [around](../UI/around.md)

### 包围盒 / 变换

[bounds](../UI/bounds.md) &nbsp; &nbsp; [transform](../UI/transform.md)

### 转换坐标

[转换坐标](../UI/point/index.md) &nbsp; &nbsp; [快速转换](../UI/point/high.md)

### 层叠 / 放置

[zIndex](../UI/zIndex.md) &nbsp; &nbsp; [dropTo()](../UI/dropTo.md)

## 🏼 外观

### 透明 / 隐藏

[opacity](../UI/opacity.md) &nbsp; &nbsp; [visible](../UI/visible.md)

### 填充 / 描边

[fill](../UI/fill.md) &nbsp; &nbsp; [stroke](../UI/stroke.md)

### 渐变 / 图像

[linear](../UI/paint/linear.md) &nbsp; &nbsp; [radial](../UI/paint/radial.md) &nbsp; &nbsp; [angular](../UI/paint/angular.md) &nbsp; &nbsp; [solid](../UI/paint/solid.md) &nbsp; &nbsp; [image](../UI/paint/image.md)

### 内外阴影

[shadow](../UI/shadow.md) &nbsp; &nbsp; [innerShadow](../UI/innerShadow.md)

### 淡化 / 突出

[dim](../UI/dim.md) &nbsp; &nbsp; [bright](../UI/bright.md)

### 裁剪 / 擦除

[clip](../UI/clip.md) &nbsp; &nbsp; [mask](../UI/mask.md) &nbsp; &nbsp; [eraser](../UI/eraser.md)

### 混合模式

[blendMode](../UI/blendMode.md)

## 🖱 交互

### 可交互性

[hittable](../UI/hit.md) &nbsp; &nbsp; [hitChildren](../UI/hitChildren.md) &nbsp; &nbsp; [hitSelf](../UI/hitSelf.md) &nbsp; &nbsp; [hitFill](../UI/hitFill.md) &nbsp; &nbsp; [hitStroke](../UI/hitStroke.md)

### 编辑 / 拖拽

[editable](../UI/editable.md) &nbsp; &nbsp; [draggable](../UI/draggable.md)

### 光标样式

[cursor](../UI/cursor.md)

### 交互状态

[state](../UI/state/state.md) &nbsp; &nbsp; [hover](../UI/state/hover.md) &nbsp; &nbsp; [press](../UI/state/press.md) &nbsp; &nbsp; [focus](../UI/state/focus.md) &nbsp; &nbsp; [selected](../UI/state/selected.md) &nbsp; &nbsp; [disabled](../UI/state/disabled.md)

### 事件处理

[on() / once()](../UI/on.md) &nbsp; &nbsp; [off()](../UI/off.md) &nbsp; &nbsp; [emit()](../UI/emit.md) &nbsp; &nbsp; [命名](../event/name.md) &nbsp; &nbsp; [捕获/冒泡](../event/flow.md) &nbsp; &nbsp; [模拟交互](../event/simulation.md)

## 🐆 动画

### 动画

[animation](../UI/animation.md) &nbsp; &nbsp; [animate()](../UI/animate.md)

### 过渡

[transition](../UI/transition.md)

### 运动路径

[motionPath](../UI/motionPath.md) &nbsp; &nbsp; [motion](../UI/motion.md) &nbsp; &nbsp; [getMotionTotal()](../UI/getMotionTotal.md) &nbsp; &nbsp; [getMotionPoint()](../UI/getMotionPoint.md)

## 🌴 高级

### 限制拖动范围

[dragBounds](../UI/dragBounds.md)

### 强制渲染

[forceUpdate()](../UI/forceUpdate.md) &nbsp; &nbsp; [updateLayout()](../UI/forceUpdate.md#updatelayout) &nbsp; &nbsp; [forceRender()](../UI/forceRender.md) &nbsp; &nbsp; [nextRender()](../UI/nextRender.md)

### 查找拾取

[find()](../UI/find.md) &nbsp; &nbsp; [findOne()](../UI/findOne.md) &nbsp; &nbsp; [pick()](../UI/pick.md)

### 自定义属性

[changeAttr()](../UI/custom/changeAttr.md) &nbsp; &nbsp; [addAttr()](../UI/custom/addAttr.md)
