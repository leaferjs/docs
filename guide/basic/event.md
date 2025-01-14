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

## 交互属性

| 名称                                                                              | 描述                                                                                                                                                              |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [hittable](/reference/property/hit)                                               | 元素是否响应鼠标、触摸或其他指针设备的交互事件，类似 CSS 的 pointer-events 属性                                                                                   |
| [hitChildren](/reference/property/hitChildren)                                    | 进一步定义元素子级的可交互性                                                                                                                                      |
| [hitSelf](/reference/property/hitSelf)                                            | 进一步定义自身（不含子元素）的可交互性                                                                                                                            |
| [hitFill](/reference/property/hitFill)                                            | 进一步定义元素 [fill](/reference/property/fill.md) 的可交互性，设置 pixel 可以进行 PNG / SVG 图片的像素级检测，过滤掉透明像素                                     |
| [hitStroke](/reference/property/hitStroke)                                        | 进一步定义元素 [stroke](/reference/property/stroke.md) 的可交互性                                                                                                 |
| [editable](/reference/property/editable)                                          | 是否允许编辑，需安装 [图形编辑器插件](/plugin/in/editor/)                                                                                                         |
| [draggable](/reference/property/draggable)                                        | 是否允许拖拽                                                                                                                                                      |
| [dragBounds](/reference/property/dragBounds.md)                                   | 限制元素的拖动范围                                                                                                                                                |
| [cursor](/reference/property/cursor)                                              | hover 到元素上时，显示的光标样式，支持所有 [CSS 的光标名称](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor)                                              |
| [states](/reference/property/state/state.md#states-istates)                       | 状态列表，可预设复杂多样的元素、游戏状态，用于随时切换， 支持添加 [过渡效果](/reference/property/transition.md)，需安装 [交互状态插件](/plugin/in/state/index.md) |
| [state](/reference/property/state/state.md#state-string)                          | 当前状态，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                        |
| [button](/reference/property/state/state.md#button-boolean)                       | 设为按钮，子元素将自动同步交互状态，如 state、hover、press...，需安装 [交互状态插件](/plugin/in/state/index.md)                                                   |
| [hoverStyle](/reference/property/state/hover.md#hoverstyle-iuiinputdata)          | 光标移入时的交互样式， 移出后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                           |
| [pressStyle](/reference/property/state/press.md#pressstyle-iuiinputdata)          | 光标按下时的交互样式， 抬起后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                           |
| [focusStyle](/reference/property/state/focus.md#focusstyle-iuiinputdata)          | 元素 focus() 时的聚焦样式， 失去焦点后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                  |
| [selected](/reference/property/state/selected.md#selected-boolean)                | 是否选中，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                        |
| [selectedStyle](/reference/property/state/selected.md#selectedstyle-iuiinputdata) | 元素 `selected` 设为 true 时的选中样式， `selected` 设为 false 后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                       |
| [disabled](/reference/property/state/disabled.md#disabled-boolean)                | 是否禁用，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                        |
| [disabledStyle](/reference/property/state/disabled.md#disabledstyle-iuiinputdata) | 元素 `disabled` 设为 true 时的禁用样式， `disabled` 设为 false 后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                       |

## 常用事件

### [PointerEvent](/reference/event/ui/Pointer) &nbsp; &nbsp; [DragEvent](/reference/event/ui/Drag) &nbsp; &nbsp; [DropEvent](/reference/event/ui/Drop) &nbsp; &nbsp; [SwipeEvent](/reference/event/ui/Swipe)

### [MoveEvent](/reference/event/ui/Move) &nbsp; &nbsp; [ZoomEvent](/reference/event/ui/Zoom) &nbsp; &nbsp; [RotateEvent](/reference/event/ui/Rotate)

### [LeaferEvent](/reference/event/basic/Leafer) &nbsp; &nbsp; [ResizeEvent](/reference/event/basic/Resize) &nbsp; &nbsp; [KeyEvent](/reference/event/ui/Key)

### [RenderEvent](/reference/event/basic/Render) &nbsp; &nbsp; [LayoutEvent](/reference/event/basic/Layout) &nbsp; &nbsp; [WatchEvent](/reference/event/basic/Watch) &nbsp; &nbsp;

## 下一步

### [移除内容](/guide/basic/remove.md)
