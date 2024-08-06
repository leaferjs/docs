# 事件处理

## 监听事件

为矩形添加鼠标进入/离开事件效果：

::: code-group
<<< @/code/basic/event/hover.ts#listen
<<< @/code/basic/event/hover.js#listen
:::

还支持初始化传入 [event](/reference/property/on.md) 对象，用于快速监听事件：

::: code-group
<<< @/code/basic/event/event.ts#listen
<<< @/code/basic/event/event.js#listen
:::

## 使用字符串

了解事件类型的字符串[命名规则](/reference/event/name.md)。

```ts
rect.on('pointer.enter', onEnter)
rect.on('pointer.leave', onLeave)
```

## 移除事件

```ts
rect.off('pointer.enter', onEnter)
rect.off('pointer.leave', onLeave)
```

## 派发事件

```ts
rect.emit('pointer.enter', { current: rect })
```

## 恭喜 🎉

你已完成基础知识的学习，接下来将学习几个重要的进阶知识。

## 下一步

### [视窗交互](/guide/app/window)
