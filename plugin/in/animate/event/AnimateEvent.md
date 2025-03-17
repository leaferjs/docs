# AnimateEvent

动画事件

## 事件名称

### AnimateEvent.CREATED

动画实例创建事件。

`created`

### AnimateEvent.PLAY

播放动画事件。

`play`

### AnimateEvent.PAUSE

暂停动画事件。

`pause`

### AnimateEvent.STOP

停止动画事件。

`stop`

### AnimateEvent.SEEK

定位跳转动画事件。

`seek`

### AnimateEvent.UPDATE

更新动画事件，每一次样式变化都会触发。

`update`

### AnimateEvent.COMPLETED

动画完成事件。

`completed`

## 示例

支持像元素一样 [监听、移除事件](/reference/UI/on.md)，同时也支持初始化时传入 [监听事件对象](/plugin/in/animate/options/event.md)。

::: code-group
<<< @/code/plugin/animate/options/event/on.ts [Animate]
<<< @/code/plugin/animate/options/event/animate/on.ts [animate]
:::
