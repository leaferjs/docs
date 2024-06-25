# Event

所有事件的基类。

## 关键属性

### type: `string`

事件类型。

### current: [`ILeaf`](/api/interfaces/ILeaf.md)

侦听事件的当前对象， 当多个对象共用同一个侦听函数时可起到区分的作用。

等同于 currentTarget。

### target: [`ILeaf`](/api/interfaces/ILeaf.md)

派发事件时设定的目标对象 / 最底层的目标对象。

### bubbles: `boolean`

该事件是否冒泡。

### phase: `number`

事件流正被处理到了哪个阶段：

- 0 这个时间，没有事件正在被处理。
- 1 捕获阶段: 事件正在被目标元素的祖先对象处理， 注册事件时配置了 capture 值为 true 时，触发捕获事件。
- 2 事件对象已经抵达目标对象。
- 3 冒泡阶段: 事件对象逆向向上传播回目标元素的祖先元素，从父元素开始冒泡。

等同于 eventPhase。

### isStop: `boolean`

事件是否已经被阻止传递。

### isStopDefault: `boolean`

是否已经阻止默认事件。

### origin: `object`

原生事件对象。

## 关键方法

### stop ( )

停止事件传递，如果同一个元素有多个侦听函数，会等待执行完后再停止传递。

同时会调用原生事件的 stopPropagation()。

### stopNow ( )

立即停止事件传递。

同时会调用原生事件的 stopImmediatePropagation()。

### stopDefault ( )

阻止默认事件。

同时会调用原生事件的 preventDefault()

## API

### [Event](/api/classes/Event.md)
