# 概览

参考手册主要包含四大板块：元素介绍、元素属性方法、事件类型、常用类库，并支持全文搜索。

为了聚焦主要知识，每篇文档只展示了关键属性方法，可通过点击 [继承](/reference/display/Rect.md#继承) 或 [归属](/reference/property/fill.md#归属) 文档溯源。

## 元素

### [App](/reference/display/App.md) &nbsp; &nbsp; [Leafer](/reference/display/Leafer.md) &nbsp; &nbsp; [Frame](/reference/display/Frame.md) &nbsp; &nbsp;[Box](/reference/display/Box.md) &nbsp; &nbsp; [Group](/reference/display/Group.md) &nbsp; &nbsp; [UI](/reference/display/UI.md) &nbsp; &nbsp; [Custom](/reference/display/custom/base/register.md)

### [Rect](/reference/display/Rect.md) &nbsp; &nbsp; [Ellipse](/reference/display/Ellipse.md) &nbsp; &nbsp; [Line](/reference/display/Line.md) &nbsp; &nbsp; [Polygon](/reference/display/Polygon.md) &nbsp; &nbsp; [Star](/reference/display/Star.md)

### [Path](/reference/display/Path.md) &nbsp; &nbsp; [Pen](/reference/display/Pen.md) &nbsp; &nbsp; [Image](/reference/display/Image.md) &nbsp; &nbsp; [SVG](/reference/display/SVG.md) &nbsp; &nbsp; [Canvas](/reference/display/Canvas.md) &nbsp; &nbsp;[Text](/reference/display/Text.md)

## 配置

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; [视口类型](/reference/config/app/type.md) &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按操作](/reference/config/app/pointer.md) &nbsp; &nbsp; [滚轮操作](/reference/config/app/wheel.md) &nbsp; &nbsp; [平移视图](/reference/config/app/move.md) &nbsp; &nbsp; [缩放视图](/reference/config/app/zoom.md) &nbsp; &nbsp;

## 属性方法

### [id](/reference/property/id.md) &nbsp; &nbsp; [name](/reference/property/name.md) &nbsp; &nbsp; [opacity](/reference/property/opacity.md) &nbsp; &nbsp; [visible](/reference/property/visible.md) &nbsp; &nbsp; [zIndex](/reference/property/zIndex.md) &nbsp; &nbsp;

### [x](/reference/property/layout.md) &nbsp; &nbsp;[y](/reference/property/layout.md) &nbsp; &nbsp;[width](/reference/property/layout.md#width-number) &nbsp; &nbsp;[height](/reference/property/layout.md#height-number) &nbsp; &nbsp;[scaleX](/reference/property/layout.md#scalex-number) &nbsp; &nbsp;[scaleY](/reference/property/layout.md#scaley-number) &nbsp; &nbsp;[rotation](/reference/property/layout.md#rotation-number)

### [offsetX](/reference/property/offset.md) &nbsp; &nbsp;[offsetY](/reference/property/offset.md) &nbsp; &nbsp;[scrollX](/reference/display/Box.md#滚动属性) &nbsp; &nbsp;[scrollY](/reference/display/Box.md#滚动属性)

### [fill](/reference/property/fill.md) &nbsp; &nbsp; [stroke](/reference/property/stroke.md)

### [on()](/reference/property/on.md) &nbsp; &nbsp; [once()](/reference/property/on.md) &nbsp; &nbsp; [off()](/reference/property/off.md) &nbsp; &nbsp; [emit()](/reference/property/emit.md)

### [hittable](/reference/property/hit.md) &nbsp; &nbsp; [hitChildren](/reference/property/hit.md) &nbsp; &nbsp; [hitFill](/reference/property/hit.md#hitfill-ihittype) &nbsp; &nbsp; [draggable](/reference/property/draggable.md) &nbsp; &nbsp; [editable](/reference/property/editable.md) &nbsp; &nbsp; [cursor](/reference/property/cursor.md)

### [hoverStyle](/reference/property/state/hover.md) &nbsp; &nbsp; [pressStyle](/reference/property/state/press.md) &nbsp; &nbsp; [focusStyle](/reference/property/state/focus.md) &nbsp; &nbsp; [selectedStyle](/reference/property/state/selected.md) &nbsp; &nbsp; [disabledStyle](/reference/property/state/disabled.md)

### [set()](/reference/property/data.md)&nbsp; &nbsp;[get()](/reference/property/data.md)&nbsp; &nbsp;[reset()](/reference/property/data.md)&nbsp; &nbsp;[setAttr()](/reference/property/data.md)&nbsp; &nbsp;[getAttr()](/reference/property/data.md)&nbsp; &nbsp;[getComputedAttr()](/reference/property/data.md) &nbsp; &nbsp; [clone()](/reference/property/clone.md)

### [waitParent()](/reference/property/parent.md#waitparent-item-function-bind-object) &nbsp; &nbsp; [waitLeafer()](/reference/property/leafer.md#waitleafer-item-function-bind-object) &nbsp; &nbsp;[dropTo()](/reference/property/dropTo.md)

### [nextRender()](/reference/property/nextRender.md) &nbsp; &nbsp; [updateLayout()](/reference/property/layout.md#updatelayout) &nbsp; &nbsp; [forceRender()](/reference/property/forceRender.md) &nbsp; &nbsp; [forceUpdate()](/reference/property/forceUpdate.md)

### [bounds](/reference/property/bounds.md) &nbsp; &nbsp; [transform](/reference/property/transform.md) &nbsp; &nbsp; [origin](/reference/property/origin.md) &nbsp; &nbsp; [around](/reference/property/around.md) &nbsp; &nbsp; [转换坐标](/reference/property/point/index.md) &nbsp; &nbsp; [转换移动距离](/reference/property/point/index.md#转换移动距离)

### [resizeWidth()](/reference/property/resize.md) &nbsp; &nbsp;[resizeHeight()](/reference/property/resize.md)

### [linear](/reference/property/paint/linear.md) &nbsp; &nbsp; [radial](/reference/property/paint/radial.md) &nbsp; &nbsp; [angular](/reference/property/paint/angular.md) &nbsp; &nbsp; [solid](/reference/property/paint/solid.md) &nbsp; &nbsp; [image](/reference/property/paint/image.md)

### [shadow](/reference/property/shadow.md) &nbsp; &nbsp; [innerShadow](/reference/property/innerShadow.md) &nbsp; &nbsp; [blur](/reference/property/blur.md) &nbsp; &nbsp; [backgroundBlur](/reference/property/backgroundBlur.md)

### [path](/reference/property/path.md) &nbsp; &nbsp;[clip](/reference/property/clip.md) &nbsp; &nbsp; [mask](/reference/property/mask.md) &nbsp; &nbsp; [eraser](/reference/property/eraser.md) &nbsp; &nbsp;[blendMode](/reference/property/blendMode.md)

### [find()](/reference/property/find.md) &nbsp; &nbsp;[findTag()](/reference/property/find.md) &nbsp; &nbsp;[findOne()](/reference/property/findOne.md) &nbsp; &nbsp; [findId()](/reference/property/findOne.md) &nbsp; &nbsp; [pick()](/reference/property/pick.md)

### [getPath()](/reference/property/getPath.md) &nbsp; &nbsp; [getPathString()](/reference/property/getPathString.md) &nbsp; &nbsp; [export()](/reference/property/export.md) &nbsp; &nbsp; [toJSON()](/reference/property/json.md) &nbsp; &nbsp; [toString()](/reference/property/json.md#tostring-string)

## 事件类型

### [PointerEvent](/reference/event/ui/Pointer.md) &nbsp; &nbsp; [DragEvent](/reference/event/ui/Drag.md) &nbsp; &nbsp; [DropEvent](/reference/event/ui/Drop.md) &nbsp; &nbsp; [SwipeEvent](/reference/event/ui/Swipe.md)

### [MoveEvent](/reference/event/ui/Move.md) &nbsp; &nbsp; [ZoomEvent](/reference/event/ui/Zoom.md) &nbsp; &nbsp; [RotateEvent](/reference/event/ui/Rotate.md)

### [LeaferEvent](/reference/event/basic/Leafer.md) &nbsp; &nbsp; [ResizeEvent](/reference/event/basic/Resize.md) &nbsp; &nbsp; [KeyEvent](/reference/event/ui/Key.md)

### [RenderEvent](/reference/event/basic/Render.md) &nbsp; &nbsp; [LayoutEvent](/reference/event/basic/Layout.md) &nbsp; &nbsp; [WatchEvent](/reference/event/basic/Watch.md) &nbsp; &nbsp; [UIEvent](/reference/event/ui/UIEvent.md) &nbsp; &nbsp; [Event](/reference/event/basic/Event.md)
