# touch 配置

触摸事件相关配置, 应用运行中修改 [app.config.touch](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下只能设置在 [App](/reference/display/App.md) 的 config 上。
:::

## 关键属性

### touch.preventDefault: `boolean` | `'auto'`

是否阻止移动端默认触摸屏滑动页面事件，默认为 'auto'。

设置 'auto'， draggable / editable / 监听 DragEvent.DRAG 的元素仍可单独拖拽，其他地方拖拽将会滑动页面。

设置 true， 所有地方拖拽将不会滑动页面。

设置 false， 所有地方拖拽将会滑动页面。
