# 应用与引擎配置

### [基础](./base.md) &nbsp; &nbsp; [视口类型](./type.md) &nbsp; &nbsp; [画布](./canvas.md) &nbsp; &nbsp; [点按](./pointer.md) &nbsp; &nbsp; [多点](./multiTouch.md) &nbsp; &nbsp; [触屏](./touch.md) &nbsp; &nbsp; 滚轮 &nbsp; &nbsp; [平移视图](./move.md) &nbsp; &nbsp; [缩放视图](./zoom.md)

##

滚轮操作相关配置, 引擎运行中修改 [app.config.wheel](../../display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](../../../guide/advanced/app.md) 下只能设置在 [App](../../display/App.md) 的 config 上。
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

正数 delta 滚动速度，可设为负数反向滚动。

### wheel.negDeltaSpeed: `number`

负数 delta 滚动速度，可设为负数反向滚动。

### wheel.preventDefault: `boolean`

是否阻止浏览器默认滚动页面事件，默认为 false。

### wheel.delta: [`IPointData`](../../interface/math/Math.md#ipointdata)

基准 delta 速度校准，可根据不同系统、浏览器细化定制。

当设置 moveSpeed、zoomSpeed 起不到效果时可调整此参数，设置最佳值。

以下为默认值：

```ts
  // 基准速度（会影响zoomSpeed)，可根据不同系统、浏览器细化定制
  delta: {
    x: 80 / 4, // 鼠标横向滚动的一格产生的 delta 值，可通过原始鼠标滚轮事件查看 delta 值是否匹配
    y: 8.0 // 鼠标竖向滚动一格产生的 delta 值
  },
```

## 示例

### 鼠标滚动直接缩放视图

缩放优先模式下，鼠标滚动直接缩放，可按下鼠标中键进行平移视图。

::: code-group
<<< @/code/app/viewport/app/zoom-mode.ts [App]

<<< @/code/app/viewport/zoom-mode.ts [Leafer]
:::
