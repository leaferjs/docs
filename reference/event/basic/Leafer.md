# LeaferEvent

Leafer 事件。

想了解事件的触发顺序，请查看 [引擎生命周期](/guide/life/leafer.md) 图示。

::: tip 继承
LeaferEvent &nbsp;>&nbsp; [Event](../basic/Event.md)
:::

## 事件名称

### LeaferEvent.START

启动引擎。

`leafer.start`

### LeaferEvent.BEFORE_READY

引擎准备就绪前。

`leafer.before_ready`

### LeaferEvent.READY

引擎准备就绪（首次布局完成）。

`leafer.ready`

### LeaferEvent.AFTER_READY

引擎准备就绪后。

`leafer.after_ready`

### LeaferEvent.VIEW_READY

视图准备就绪（首次渲染完成）。

`leafer.view_ready`

### LeaferEvent.STOP

引擎停止。

`leafer.stop`

### LeaferEvent.RESTART

引擎重启。

`leafer.restart`

### LeaferEvent.END

结束（即将销毁引擎）。

`leafer.end`

### 视图事件

### LeaferEvent.TRANSFORM

Leafer 实例的 x、y、scaleX、scaleY、rotation、skew [视口属性](/reference/display/Leafer.md#视口属性-viewport) 变化事件。

app 应用结构需在 app.tree 等子 Leafer 上监听此事件。

`leafer.transform`

### LeaferEvent.MOVE

Leafer 实例的 x、y [视口属性](/reference/display/Leafer.md#视口属性-viewport) 变化事件。

app 应用结构需在 app.tree 等子 Leafer 上监听此事件。

`leafer.move`

### LeaferEvent.SCALE

Leafer 实例的 scale、scaleX、scaleY [视口属性](/reference/display/Leafer.md#视口属性-viewport) 变化事件。

app 应用结构需在 app.tree 等子 Leafer 上监听此事件。

`leafer.scale`

### LeaferEvent.ROTATE

Leafer 实例的 rotation [视口属性](/reference/display/Leafer.md#视口属性-viewport) 变化事件。

app 应用结构需在 app.tree 等子 Leafer 上监听此事件。

`leafer.rotate`

### LeaferEvent.SKEW

Leafer 实例的 skew [视口属性](/reference/display/Leafer.md#视口属性-viewport) 变化事件。

app 应用结构需在 app.tree 等子 Leafer 上监听此事件。

`leafer.skew`

### 交互模式

### LeaferEvent.UPDATE_MODE

Leafer 实例的 [mode](/reference/display/App.md#mode-ileafermode) 交互模式变化事件。

app 应用结构需在 app 上监听此事件。

`leafer.update_mode`

```ts
app.on_(LeaferEvent.UPDATE_MODE, (data: { mode: ILeaferMode }) => {
  if (data.mode && data.mode !== 'normal') this.cancel()
})
```

<!-- ## 继承事件

### [Event](./Event.md) -->

<!-- ## API

### [LeaferEvent](/api/classes/LeaferEvent.md) -->

## 示例

### 监听 Leafer 事件

<<< @/code/event/leafer/leafer.ts

### 监听 Leafer 缩放变化事件

<<< @/code/event/leafer/scale.ts
