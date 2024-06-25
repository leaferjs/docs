# move 配置

平移视图相关配置，应用运行中修改 [app.config.move](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

注意 App 结构下只能设置在 [App](/reference/display/App.md) 的 config 上。

## 关键属性

### move.disabled: `boolean`

是否禁用平移视图交互，默认为 false。

### move.scroll: `boolean` ｜ `'limit'`

限制横向或竖向滚动， 默认为 false。

设置 'limit' 会限制在有内容的区域滚动，否则可以无限滚动。

一般用于适配 [document](#type-string)、手机端上下滑动页面

### move.drag: `boolean`

拖拽时是否平移视图（将无法选取任何元素，一般用于预览模式），默认为 false。

### move.dragAnimate: `boolean`

拖拽视图结束时是否有惯性动画， 默认为 false。

### move.holdSpaceKey: `boolean`

按住空白键拖拽是否平移视图，默认为 true。

### move.holdMiddleKey: `boolean`

按住滚轮中键拖拽是否平移视图，默认为 true。

### move.holdRightKey: `boolean`

按住右键拖拽是否平移视图，默认为 false。

### move.dragEmpty: `boolean`

空白处拖拽是否平移视图，默认为 false。

### move.dragOut: `boolean`

当拖拽元素到达界面边界时，是否自动平移视图，默认为 false。

### move.autoDistance: `number`

设置 dragOut 每帧自动平移视图的距离，默认为 2。

## 示例

### 拖拽时直接平移视图（预览模式）

<<< @/code/app/config/drag.ts

### 拖拽至边界时自动平移视图

<<< @/code/app/config/autoMove.ts
