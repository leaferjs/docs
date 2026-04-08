# 移除事件

## 关键方法

### off ( type?: `string` | `string`[], listener?: `IEventListener`, options?:[`IEventListenerOptions`](/api/interfaces/IEventListenerOptions.md) | `boolean` )

移除事件。

支持关闭所有事件（不传 type 参数）， 关闭一类事件（不传 listener 函数）。

## 新方法

### off\_ ( id: [`IEventListenerId`](/api/interfaces/IEventListenerId.md) | [`IEventListenerId`](/api/interfaces/IEventListenerId.md)[] ):

移除事件， 与 [on\_()](./on.md#on_) 配套使用。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 移除单个事件

::: code-group
<<< @/code/event/off/one.ts
<<< @/code/event/off/one.js
:::

### 移除多个事件

数组形式:

::: code-group
<<< @/code/event/off/constMore.ts
<<< @/code/event/off/constMore.js
:::

字符串形式:

::: code-group
<<< @/code/event/off/more.ts
<<< @/code/event/off/more.js
:::
