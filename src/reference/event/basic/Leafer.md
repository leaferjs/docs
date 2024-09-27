# LeaferEvent

Leafer 事件。

想了解事件的触发顺序，请查看 [应用生命周期](/guide/life/app.md) 图示。

## 事件名称

### LeaferEvent.START

启动应用。

`leafer.start`

### LeaferEvent.BEFORE_READY

应用准备就绪前。

`leafer.before_ready`

### LeaferEvent.READY

应用准备就绪（首次布局完成）。

`leafer.ready`

### LeaferEvent.AFTER_READY

应用准备就绪后。

`leafer.after_ready`

### LeaferEvent.VIEW_READY

视图准备就绪（首次渲染完成）。

`leafer.view_ready`

### LeaferEvent.STOP

应用停止。

`leafer.stop`

### LeaferEvent.RESTART

应用重启。

`leafer.restart`

### LeaferEvent.END

结束应用（即将销毁）。

`leafer.end`

## 继承

### [Event](./Event.md)

<!-- ## API

### [LeaferEvent](/api/classes/LeaferEvent.md) -->

## 示例

<<< @/code/event/leafer/leafer.ts
