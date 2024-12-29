# 概览

参考手册主要包含四大板块：元素介绍、元素属性方法、事件类型、常用类库，并支持全文搜索。

为了聚焦主要知识，每篇文档只展示了关键属性方法，可通过点击 [继承](/reference/display/Rect.md#继承) 或 [归属](/reference/property/fill.md#归属) 文档溯源。

## 元素

### [App](/reference/display/App) &nbsp; &nbsp; [Leafer](/reference/display/Leafer) &nbsp; &nbsp; [Frame](/reference/display/Frame) &nbsp; &nbsp;[Box](/reference/display/Box) &nbsp; &nbsp; [Group](/reference/display/Group) &nbsp; &nbsp; [UI](/reference/display/UI) &nbsp; &nbsp; [Custom](/reference/display/custom/base/register.md)

### [Rect](/reference/display/Rect) &nbsp; &nbsp; [Ellipse](/reference/display/Ellipse) &nbsp; &nbsp; [Line](/reference/display/Line) &nbsp; &nbsp; [Polygon](/reference/display/Polygon) &nbsp; &nbsp; [Star](/reference/display/Star)

### [Path](/reference/display/Path) &nbsp; &nbsp; [Pen](/reference/display/Pen) &nbsp; &nbsp; [Image](/reference/display/Image) &nbsp; &nbsp; [SVG](/reference/display/SVG) &nbsp; &nbsp; [Canvas](/reference/display/Canvas) &nbsp; &nbsp;[Text](/reference/display/Text)

## 配置

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; [视口类型](/reference/config/app/type.md) &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按操作](/reference/config/app/pointer.md) &nbsp; &nbsp; [滚轮操作](/reference/config/app/wheel.md) &nbsp; &nbsp; [平移视图](/reference/config/app/move.md) &nbsp; &nbsp; [缩放视图](/reference/config/app/zoom.md) &nbsp; &nbsp;

## 属性方法

### [id](/reference/property/id) &nbsp; &nbsp; [name](/reference/property/name) &nbsp; &nbsp; [opacity](/reference/property/opacity) &nbsp; &nbsp; [visible](/reference/property/visible) &nbsp; &nbsp; [zIndex](/reference/property/zIndex) &nbsp; &nbsp;

### [x](/reference/property/layout) &nbsp; &nbsp;[y](/reference/property/layout) &nbsp; &nbsp;[width](/reference/property/layout#width-number) &nbsp; &nbsp;[height](/reference/property/layout#height-number) &nbsp; &nbsp;[scaleX](/reference/property/layout#scalex-number) &nbsp; &nbsp;[scaleY](/reference/property/layout#scaley-number) &nbsp; &nbsp;[rotation](/reference/property/layout#rotation-number)

### [offsetX](/reference/property/offset) &nbsp; &nbsp;[offsetY](/reference/property/offset) &nbsp; &nbsp;[scrollX](/reference/display/Box.md#滚动属性) &nbsp; &nbsp;[scrollY](/reference/display/Box.md#滚动属性)

### [fill](/reference/property/fill) &nbsp; &nbsp; [stroke](/reference/property/stroke)

### [on()](/reference/property/on) &nbsp; &nbsp; [once()](/reference/property/on) &nbsp; &nbsp; [off()](/reference/property/off) &nbsp; &nbsp; [emit()](/reference/property/emit)

### [hittable](/reference/property/hit) &nbsp; &nbsp; [hitChildren](/reference/property/hit) &nbsp; &nbsp; [hitFill](/reference/property/hit#hitfill-ihittype) &nbsp; &nbsp; [draggable](/reference/property/draggable) &nbsp; &nbsp; [editable](/reference/property/editable) &nbsp; &nbsp; [cursor](/reference/property/cursor)

### [hoverStyle](/reference/property/state/hover) &nbsp; &nbsp; [pressStyle](/reference/property/state/press) &nbsp; &nbsp; [focusStyle](/reference/property/state/focus) &nbsp; &nbsp; [selectedStyle](/reference/property/state/selected) &nbsp; &nbsp; [disabledStyle](/reference/property/state/disabled)

### [set()](/reference/property/data)&nbsp; &nbsp;[get()](/reference/property/data)&nbsp; &nbsp;[reset()](/reference/property/data)&nbsp; &nbsp;[setAttr()](/reference/property/data)&nbsp; &nbsp;[getAttr()](/reference/property/data)&nbsp; &nbsp;[getComputedAttr()](/reference/property/data) &nbsp; &nbsp; [clone()](/reference/property/clone)

### [waitParent()](/reference/property/parent#waitparent-item-function-bind-object) &nbsp; &nbsp; [waitLeafer()](/reference/property/leafer#waitleafer-item-function-bind-object) &nbsp; &nbsp;[dropTo()](/reference/property/dropTo.md)

### [nextRender()](/reference/property/nextRender) &nbsp; &nbsp; [updateLayout()](/reference/property/layout#updatelayout) &nbsp; &nbsp; [forceRender()](/reference/property/forceRender) &nbsp; &nbsp; [forceUpdate()](/reference/property/forceUpdate)

### [bounds](/reference/property/bounds) &nbsp; &nbsp; [transform](/reference/property/transform) &nbsp; &nbsp; [origin](/reference/property/origin) &nbsp; &nbsp; [around](/reference/property/around) &nbsp; &nbsp; [转换坐标](/reference/property/point/) &nbsp; &nbsp; [转换移动距离](/reference/property/point/index.md#转换移动距离)

### [resizeWidth()](/reference/property/resize) &nbsp; &nbsp;[resizeHeight()](/reference/property/resize)

### [linear](/reference/property/paint/linear) &nbsp; &nbsp; [radial](/reference/property/paint/radial) &nbsp; &nbsp; [angular](/reference/property/paint/angular) &nbsp; &nbsp; [solid](/reference/property/paint/solid) &nbsp; &nbsp; [image](/reference/property/paint/image)

### [shadow](/reference/property/shadow) &nbsp; &nbsp; [innerShadow](/reference/property/innerShadow) &nbsp; &nbsp; [blur](/reference/property/blur) &nbsp; &nbsp; [backgroundBlur](/reference/property/backgroundBlur)

### [path](/reference/property/path.md) &nbsp; &nbsp;[clip](/reference/property/clip) &nbsp; &nbsp; [mask](/reference/property/mask) &nbsp; &nbsp; [eraser](/reference/property/eraser) &nbsp; &nbsp;[blendMode](/reference/property/blendMode)

### [find()](/reference/property/find.md) &nbsp; &nbsp;[findTag()](/reference/property/find.md) &nbsp; &nbsp;[findOne()](/reference/property/findOne.md) &nbsp; &nbsp; [findId()](/reference/property/findOne.md) &nbsp; &nbsp; [pick()](/reference/property/pick.md)

### [getPath()](/reference/property/getPath.md) &nbsp; &nbsp; [getPathString()](/reference/property/getPathString.md) &nbsp; &nbsp; [export()](/reference/property/export.md) &nbsp; &nbsp; [toJSON()](/reference/property/json.md) &nbsp; &nbsp; [toString()](/reference/property/json.md#tostring-string)

## 事件类型

### [PointerEvent](/reference/event/ui/Pointer) &nbsp; &nbsp; [DragEvent](/reference/event/ui/Drag) &nbsp; &nbsp; [DropEvent](/reference/event/ui/Drop) &nbsp; &nbsp; [SwipeEvent](/reference/event/ui/Swipe)

### [MoveEvent](/reference/event/ui/Move) &nbsp; &nbsp; [ZoomEvent](/reference/event/ui/Zoom) &nbsp; &nbsp; [RotateEvent](/reference/event/ui/Rotate)

### [LeaferEvent](/reference/event/basic/Leafer) &nbsp; &nbsp; [ResizeEvent](/reference/event/basic/Resize) &nbsp; &nbsp; [KeyEvent](/reference/event/ui/Key)

### [RenderEvent](/reference/event/basic/Render) &nbsp; &nbsp; [LayoutEvent](/reference/event/basic/Layout) &nbsp; &nbsp; [WatchEvent](/reference/event/basic/Watch) &nbsp; &nbsp; [UIEvent](/reference/event/ui/UIEvent) &nbsp; &nbsp; [Event](/reference/event/basic/Event)
