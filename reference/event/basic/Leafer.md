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

<!-- ## 继承事件

### [Event](./Event.md) -->

<!-- ## API

### [LeaferEvent](/api/classes/LeaferEvent.md) -->

## 示例

<<< @/code/event/leafer/leafer.ts
