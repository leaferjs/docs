# 监听事件

## 关键属性

### event：[`IEventMap`](/api/interfaces/IEventMap.md)

仅支持初始化时传入监听事件（不能导出为 JSON）。

```ts
export interface IEventMap {
  [name: string]: IEventListener | [IEventListener, IEventOption]
}

// 示例
new Rect({
  fill: '#32cd79',
  event: {
    tap: function () {
      console.log('tap')
    },
    [PointerEvent.DOWN]: [
      function () {
        console.log('pointer.down')
      },
      'once', // 同 on() 的第二个参数
    ],
  },
})
```

## 关键方法

### on ( type: `string` | `string`[], listener: `IEventListener`, options?:[`IEventOption`](/api/modules.md#ieventoption) )

侦听事件, options 为 `boolean` 时表示是否为 [捕获类型](/reference/event/flow.md)。

### once ( type: `string` | `string`[], listener: `IEventListener`, capture?: `boolean` )

只侦听一次事件，capture 表示是否为 [捕获类型](/reference/event/flow.md)。

## 新方法

### on\_ ( type: `string` | `string`[], listener: `IEventListener`, bind?: `IObject`, options?: [`IEventOption`](/api/modules.md#ieventoption)): [`IEventListenerId`](/api/interfaces/IEventListenerId.md)

侦听事件，支持传入 bind 作为 listener 的 this 对象，并返回事件 id，与 [off\_()](./off.md#off) 配套使用。

<<< @/code/event/on/simple.ts

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 监听单个事件

::: code-group
<<< @/code/event/on/one.ts
<<< @/code/event/on/one.js
:::

### 监听多个事件

数组形式:

::: code-group
<<< @/code/event/on/constMore.ts
<<< @/code/event/on/constMore.js
:::

字符串形式:

::: code-group
<<< @/code/event/on/more.ts
<<< @/code/event/on/more.js
:::

### 只监听一次事件

::: code-group
<<< @/code/event/on/once.ts
<<< @/code/event/on/once.js
:::
