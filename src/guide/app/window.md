# 缩放平移视图

[Leafer](/reference/display/Leafer.md) 默认自带窗口交互功能，能够缩放平移视图，可修改 [leafer.config.type](/reference/config/app/type.md) 改变窗口类型。

另外通过 [视图插件](/plugin/in/view/index.md) / [滚动条插件](/plugin/in/scroll/index.md) 可以便捷控制视图，支持 fit 视图、聚集到指定元素。

![window](/svg/window.svg)

## 平移视图

1. 移动端/触摸板: 双指滑动。
2. 鼠标: 滚轮（纵向滚动），Shift + 滚轮（横向滚动），鼠标中键 / 空格键 + 拖拽 (自由移动)。

更多配置请看 [app.config.move](/reference/config/app/move.md)， 提供了丰富的配置功能，涵盖各种场景。

## 缩放视图

1. 移动端/触摸板: 双指捏合。
2. 鼠标: Ctrl / Command + 滚轮。

更多配置请看 [app.config.zoom](/reference/config/app/zoom.md) / [app.config.wheel](/reference/config/app/wheel.md)。

## 视图属性（viewport）

可通过 [Leafer 视图属性](/reference/display/Leafer.md#视图属性-viewport) / [App 视图属性](/reference/display/App.md#视图属性-viewport) 手动平移、缩放视图。

## 取消缩放平移视图功能

将窗口类型 type 设为 'draw' 可取消缩放平移视图功能。

<<< @/code/app/config/type/draw.ts

## 更多示例

### [自定义窗口功能](/reference/config/app/type.md#custom-类型)

### [鼠标滚动直接缩放视图](/reference/config/app/wheel.md#鼠标滚动直接缩放视图)

### [控制缩放范围](/reference/config/app/zoom.md#控制视图缩放范围)

### [单独指定缩放层](/reference/display/Leafer.md#单独指定缩放层)

## 下一步

### [局部渲染](/guide/app/partRender)
