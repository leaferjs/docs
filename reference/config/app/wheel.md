# 应用配置

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; [视口类型](/reference/config/app/type.md) &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按](/reference/config/app/pointer.md) &nbsp; &nbsp; [多点](/reference/config/app/multiTouch.md) &nbsp; &nbsp; [触屏](/reference/config/app/touch.md) &nbsp; &nbsp; 滚轮 &nbsp; &nbsp; [平移视图](/reference/config/app/move.md) &nbsp; &nbsp; [缩放视图](/reference/config/app/zoom.md)

##

滚轮操作相关配置, 应用运行中修改 [app.config.wheel](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下只能设置在 [App](/reference/display/App.md) 的 config 上。
:::

## 关键属性

### wheel.disabled: `boolean`

是否禁用 wheel 事件，默认为 false。

### wheel.zoomMode: `boolean` ｜ `'mouse'`

是否开启鼠标滚动直接缩放视图， 默认为 false。

:::tip 'mouse'
程序为了同时兼容触摸板的操作，可能会出现某些鼠标设备判断不精准的情况，设置为 `'mouse'` 可以实现准确的缩放（需要确认用户使用的是鼠标，而不是触摸板）。
:::

### wheel.zoomSpeed: `number`

缩放的速度， 用于自定义适配不同浏览器的速度。

取值范围 0 ～ 1, 默认 0.5。

### wheel.moveSpeed: `number`

滚动的速度， 用于自定义适配不同浏览器的速度。

取值范围 0 ～ 1, 默认 0.5。

### wheel.rotateSpeed: `number`

旋转的速度， 用于自定义适配不同浏览器的速度。

取值范围 0 ～ 1, 默认 0.5。

### wheel.posDeltaSpeed: `number`

正数 delta 滚动速度，可设为负数进行反向 delta 滚动

### wheel.negDeltaSpeed: `number`

负数 delta 滚动速度，可设为负数进行反向 delta 滚动

### wheel.preventDefault: `boolean`

是否阻止浏览器默认滚动页面事件，默认为 false。

## 示例

### 鼠标滚动直接缩放视图

缩放优先模式下，鼠标滚动直接缩放，可按下鼠标中键进行平移视图。

::: code-group
<<< @/code/app/viewport/app/zoom-mode.ts [App]

<<< @/code/app/viewport/zoom-mode.ts [Leafer]
:::
