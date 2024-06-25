# 监听事件

## 关键方法

### on ( type: `string` | `string`[], listener: `IEventListener`, options?: [`IEventListenerOptions`](/api/interfaces/IEventListenerOptions.md) | `boolean` )

侦听事件, options 为 `boolean` 时表示是否为 [捕获类型](/reference/event/flow.md)。

### once ( type: `string` | `string`[], listener: `IEventListener`, capture?: `boolean` )

只侦听一次事件，capture 表示是否为 [捕获类型](/reference/event/flow.md)。

## 新方法

### on\_ ( type: `string` | `string`[], listener: `IEventListener`, bind?: `IObject`, options?: [`IEventListenerOptions`](/api/interfaces/IEventListenerOptions.md) | `boolean`): [`IEventListenerId`](/api/interfaces/IEventListenerId.md)

侦听事件，支持传入 bind 作为 listener 的 this 对象，并返回事件 id，与 [off\_()](./off.md#off) 配套使用。

<<< @/code/event/on/simple.ts

## 归属

### [UI](/reference/display/UI.md#深入事件)

## 示例

### 监听单个事件

<<< @/code/event/on/one.ts

### 监听多个事件

数组形式:

<<< @/code/event/on/constMore.ts

字符串形式:

<<< @/code/event/on/more.ts

### 只监听一次事件

<<< @/code/event/on/once.ts
