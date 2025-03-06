# 概览

参考手册主要包含四大板块：元素介绍、元素属性方法、事件类型、常用类库，并支持全文搜索。

为了聚焦主要知识，每篇文档只展示了关键属性方法，可通过点击 [继承](/reference/display/Rect.md#继承) 或 [归属](/reference/UI/fill.md#归属) 文档溯源。

## 元素

### [App](/reference/display/App.md) &nbsp; &nbsp; [Leafer](/reference/display/Leafer.md) &nbsp; &nbsp; [Frame](/reference/display/Frame.md) &nbsp; &nbsp;[Box](/reference/display/Box.md) &nbsp; &nbsp; [Group](/reference/display/Group.md) &nbsp; &nbsp; [UI](/reference/display/UI.md) &nbsp; &nbsp; [Custom](/reference/display/custom/base/register.md)

### [Rect](/reference/display/Rect.md) &nbsp; &nbsp; [Ellipse](/reference/display/Ellipse.md) &nbsp; &nbsp; [Line](/reference/display/Line.md) &nbsp; &nbsp; [Polygon](/reference/display/Polygon.md) &nbsp; &nbsp; [Star](/reference/display/Star.md)

### [Path](/reference/display/Path.md) &nbsp; &nbsp; [Pen](/reference/display/Pen.md) &nbsp; &nbsp; [Image](/reference/display/Image.md) &nbsp; &nbsp; [SVG](/reference/display/SVG.md) &nbsp; &nbsp; [Canvas](/reference/display/Canvas.md) &nbsp; &nbsp;[Text](/reference/display/Text.md)

## 配置

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; [视口类型](/reference/config/app/type.md) &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按操作](/reference/config/app/pointer.md) &nbsp; &nbsp; [滚轮操作](/reference/config/app/wheel.md) &nbsp; &nbsp; [平移视图](/reference/config/app/move.md) &nbsp; &nbsp; [缩放视图](/reference/config/app/zoom.md) &nbsp; &nbsp;

## 属性方法

### [id](/reference/UI/id.md) &nbsp; &nbsp; [name](/reference/UI/name.md) &nbsp; &nbsp; [opacity](/reference/UI/opacity.md) &nbsp; &nbsp; [visible](/reference/UI/visible.md) &nbsp; &nbsp; [zIndex](/reference/UI/zIndex.md) &nbsp; &nbsp;

### [x](/reference/UI/layout.md) &nbsp; &nbsp;[y](/reference/UI/layout.md) &nbsp; &nbsp;[width](/reference/UI/layout.md#width-number) &nbsp; &nbsp;[height](/reference/UI/layout.md#height-number) &nbsp; &nbsp;[scaleX](/reference/UI/layout.md#scalex-number) &nbsp; &nbsp;[scaleY](/reference/UI/layout.md#scaley-number) &nbsp; &nbsp;[rotation](/reference/UI/layout.md#rotation-number)

### [offsetX](/reference/UI/offset.md) &nbsp; &nbsp;[offsetY](/reference/UI/offset.md) &nbsp; &nbsp;[scrollX](/reference/display/Box.md#滚动属性) &nbsp; &nbsp;[scrollY](/reference/display/Box.md#滚动属性)

### [fill](/reference/UI/fill.md) &nbsp; &nbsp; [stroke](/reference/UI/stroke.md)

### [on()](/reference/UI/on.md) &nbsp; &nbsp; [once()](/reference/UI/on.md) &nbsp; &nbsp; [off()](/reference/UI/off.md) &nbsp; &nbsp; [emit()](/reference/UI/emit.md)

### [hittable](/reference/UI/hit.md) &nbsp; &nbsp; [hitChildren](/reference/UI/hit.md) &nbsp; &nbsp; [hitFill](/reference/UI/hit.md#hitfill-ihittype) &nbsp; &nbsp; [draggable](/reference/UI/draggable.md) &nbsp; &nbsp; [editable](/reference/UI/editable.md) &nbsp; &nbsp; [cursor](/reference/UI/cursor.md)

### [hoverStyle](/reference/UI/state/hover.md) &nbsp; &nbsp; [pressStyle](/reference/UI/state/press.md) &nbsp; &nbsp; [focusStyle](/reference/UI/state/focus.md) &nbsp; &nbsp; [selectedStyle](/reference/UI/state/selected.md) &nbsp; &nbsp; [disabledStyle](/reference/UI/state/disabled.md)

### [set()](/reference/UI/data.md)&nbsp; &nbsp;[get()](/reference/UI/data.md)&nbsp; &nbsp;[reset()](/reference/UI/data.md)&nbsp; &nbsp;[setAttr()](/reference/UI/data.md)&nbsp; &nbsp;[getAttr()](/reference/UI/data.md)&nbsp; &nbsp;[getComputedAttr()](/reference/UI/data.md) &nbsp; &nbsp; [clone()](/reference/UI/clone.md)

### [waitParent()](/reference/UI/parent.md#waitparent-item-function-bind-object) &nbsp; &nbsp; [waitLeafer()](/reference/UI/leafer.md#waitleafer-item-function-bind-object) &nbsp; &nbsp;[dropTo()](/reference/UI/dropTo.md)

### [nextRender()](/reference/UI/nextRender.md) &nbsp; &nbsp; [updateLayout()](/reference/UI/layout.md#updatelayout) &nbsp; &nbsp; [forceRender()](/reference/UI/forceRender.md) &nbsp; &nbsp; [forceUpdate()](/reference/UI/forceUpdate.md)

### [bounds](/reference/UI/bounds.md) &nbsp; &nbsp; [transform](/reference/UI/transform.md) &nbsp; &nbsp; [origin](/reference/UI/origin.md) &nbsp; &nbsp; [around](/reference/UI/around.md) &nbsp; &nbsp; [转换坐标](/reference/UI/point/index.md) &nbsp; &nbsp; [转换移动距离](/reference/UI/point/index.md#转换移动距离)

### [resizeWidth()](/reference/UI/resize.md) &nbsp; &nbsp;[resizeHeight()](/reference/UI/resize.md)

### [linear](/reference/UI/paint/linear.md) &nbsp; &nbsp; [radial](/reference/UI/paint/radial.md) &nbsp; &nbsp; [angular](/reference/UI/paint/angular.md) &nbsp; &nbsp; [solid](/reference/UI/paint/solid.md) &nbsp; &nbsp; [image](/reference/UI/paint/image.md)

### [shadow](/reference/UI/shadow.md) &nbsp; &nbsp; [innerShadow](/reference/UI/innerShadow.md) &nbsp; &nbsp; [blur](/reference/UI/blur.md) &nbsp; &nbsp; [backgroundBlur](/reference/UI/backgroundBlur.md)

### [path](/reference/UI/path.md) &nbsp; &nbsp;[clip](/reference/UI/clip.md) &nbsp; &nbsp; [mask](/reference/UI/mask.md) &nbsp; &nbsp; [eraser](/reference/UI/eraser.md) &nbsp; &nbsp;[blendMode](/reference/UI/blendMode.md)

### [find()](/reference/UI/find.md) &nbsp; &nbsp;[findTag()](/reference/UI/find.md) &nbsp; &nbsp;[findOne()](/reference/UI/findOne.md) &nbsp; &nbsp; [findId()](/reference/UI/findOne.md) &nbsp; &nbsp; [pick()](/reference/UI/pick.md)

### [getPath()](/reference/UI/getPath.md) &nbsp; &nbsp; [getPathString()](/reference/UI/getPathString.md) &nbsp; &nbsp; [export()](/reference/UI/export.md) &nbsp; &nbsp; [toJSON()](/reference/UI/json.md) &nbsp; &nbsp; [toString()](/reference/UI/json.md#tostring-string)

## 事件类型

### [PointerEvent](/reference/event/ui/Pointer.md) &nbsp; &nbsp; [DragEvent](/reference/event/ui/Drag.md) &nbsp; &nbsp; [DropEvent](/reference/event/ui/Drop.md) &nbsp; &nbsp; [SwipeEvent](/reference/event/ui/Swipe.md)

### [MoveEvent](/reference/event/ui/Move.md) &nbsp; &nbsp; [ZoomEvent](/reference/event/ui/Zoom.md) &nbsp; &nbsp; [RotateEvent](/reference/event/ui/Rotate.md)

### [LeaferEvent](/reference/event/basic/Leafer.md) &nbsp; &nbsp; [ResizeEvent](/reference/event/basic/Resize.md) &nbsp; &nbsp; [KeyEvent](/reference/event/ui/Key.md)

### [RenderEvent](/reference/event/basic/Render.md) &nbsp; &nbsp; [LayoutEvent](/reference/event/basic/Layout.md) &nbsp; &nbsp; [WatchEvent](/reference/event/basic/Watch.md) &nbsp; &nbsp; [UIEvent](/reference/event/ui/UIEvent.md) &nbsp; &nbsp; [Event](/reference/event/basic/Event.md)
