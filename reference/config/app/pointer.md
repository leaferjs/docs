# pointer 配置

点按操作相关配置， 应用运行中修改 [app.config.pointer](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下只能设置在 [App](/reference/display/App.md) 的 config 上。
:::

## 关键属性

### pointer.touch: `boolean`

是否使用 原生 touch 事件 模拟 [PointeEvent](/reference/event/ui/Pointer.md) 事件，默认为 false。

### pointer.hitRadius: `number`

光标的碰撞半径， 默认为 5。

:::tip

当光标距离元素在 `hitRadius` 范围内时，应用可以拾取到元素，并进行了穿透检测，从多个碰撞到的元素中，优先拾取最符合碰撞条件的元素，防止误拾取。

:::

### pointer.through: `boolean`

点击事件是否获取穿透路径，通过穿透路径可以找到被当前元素遮挡的底部元素。

### pointer.tapMore: `boolean`

`tap`、`double_tap`、`long_tap` 事件是否多个同时触发， 默认为 false (只触发其中之一)。

### pointer.tapTime: `number`

双击事件中，每次单击和间隔的最大时长， 默认为 120ms。

必须在 120ms + 120ms 间隔 + 120ms 内 完成双击, 超过时长将不触发双击事件。

### pointer.longPressTime: `number`

产生长按事件的最小时长，默认为 800ms。

### pointer.transformTime: `number`

当缩放、滚动、旋转事件未继续触发，一段时间后，自动触发结束事件， 默认为 500ms。

由于鼠标滚轮、触摸板无法直接检测到结束事件，因此采用模拟方式触发。

### pointer.hover: `boolean`

是否派发`pointer.over`、`pointer.out`、`pointer.enter`、`pointer.leave`事件, 默认为 true

手机端可设为 false。

### pointer.dragHover: `boolean`

拖动过程中是否派发 `pointer.over`、`pointer.out`、`pointer.enter`、`pointer.leave`事件，默认为 true。

### pointer.dragDistance: `number`

超过一定的距离后，才能触发拖拽事件，防止误触，默认为 2。

### pointer.swipeDistance: `number`

超过一定的距离后，才能触发滑动事件，默认为 20。

### pointer.preventDefault: `boolean`

是否阻止浏览器默认事件， 默认为 false。

### pointer.preventDefaultMenu: `boolean`

是否阻止浏览器默认菜单事件， 默认为 false.

## 示例

### 取消光标碰撞半径

::: code-group
<<< @/code/app/config/hitRadius.ts [Leafer]

<<< @/code/app/config/app/hitRadius.ts [App]
:::

### 获取穿透路径

::: code-group
<<< @/code/app/config/throughPath.ts [Leafer]

<<< @/code/app/config/app/throughPath.ts [App]
:::
