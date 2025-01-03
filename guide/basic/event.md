# 事件处理

拥有同 HTML 一样完善的事件处理模型，支持 [捕获/冒泡](/reference/event/flow) 阶段，并支持 [模拟交互](/reference/event/simulation)。

## 监听事件

为矩形添加鼠标进入/离开事件效果：

::: code-group
<<< @/code/basic/event/hover.ts#listen
<<< @/code/basic/event/hover.js#listen
:::

## 初始化事件

支持初始化传入 [event](/reference/property/on.md) 对象（不能导出为 JSON），用于快速监听事件：

::: code-group
<<< @/code/basic/event/event.ts#listen
<<< @/code/basic/event/event.js#listen
:::

## 使用字符串

了解事件类型的字符串[命名规则](/reference/event/name.md)。

```ts
rect.on('pointer.enter', onEnter)
rect.on('pointer.leave', onLeave)
```

## 移除事件

```ts
rect.off('pointer.enter', onEnter)
rect.off('pointer.leave', onLeave)
```

## 派发事件

```ts
rect.emit('pointer.enter', { current: rect })
```

## 事件方法

### [on() / once()](/reference/property/on) &nbsp; &nbsp; [off()](/reference/property/off) &nbsp; &nbsp; [emit()](/reference/property/emit) &nbsp; &nbsp; [命名](/reference/event/name) &nbsp; &nbsp; [捕获/冒泡](/reference/event/flow) &nbsp; &nbsp; [模拟交互](/reference/event/simulation)

## 常用事件

### [PointerEvent](/reference/event/ui/Pointer) &nbsp; &nbsp; [DragEvent](/reference/event/ui/Drag) &nbsp; &nbsp; [DropEvent](/reference/event/ui/Drop) &nbsp; &nbsp; [SwipeEvent](/reference/event/ui/Swipe)

### [MoveEvent](/reference/event/ui/Move) &nbsp; &nbsp; [ZoomEvent](/reference/event/ui/Zoom) &nbsp; &nbsp; [RotateEvent](/reference/event/ui/Rotate)

### [LeaferEvent](/reference/event/basic/Leafer) &nbsp; &nbsp; [ResizeEvent](/reference/event/basic/Resize) &nbsp; &nbsp; [KeyEvent](/reference/event/ui/Key)

### [RenderEvent](/reference/event/basic/Render) &nbsp; &nbsp; [LayoutEvent](/reference/event/basic/Layout) &nbsp; &nbsp; [WatchEvent](/reference/event/basic/Watch) &nbsp; &nbsp;

## 下一步

### [移除内容](/guide/basic/remove.md)
