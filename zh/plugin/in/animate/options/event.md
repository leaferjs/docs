<script setup>
import Case from '/component/Case.vue'
</script>

# 事件

## 关键属性

### event: [`IAnimateEvents`](/api/interfaces/IAnimateEvent.md)

监听事件对象，同时支持 [AnimateEvent](/plugin/in/animate/event/AnimateEvent.md) 方式。

```ts
interface IAnimateEvents {
  created?: IAnimateEventFunction // 动画实例创建事件

  play?: IAnimateEventFunction // 播放动画事件
  pause?: IAnimateEventFunction // 暂停动画事件
  stop?: IAnimateEventFunction // 停止动画事件
  seek?: IAnimateEventFunction // 定位跳转动画事件

  update?: IAnimateEventFunction // 更新动画事件，每一次样式变化都会触发
  completed?: IAnimateEventFunction // 动画完成事件
}

interface IAnimateEventFunction {
  (animate?: Animate): void
}
```

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 监听动画事件

::: code-group
<<< @/code/plugin/animate/options/event/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/event/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/event/set/ease.ts [set]
<<< @/code/plugin/animate/options/event/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/event/ease.ts [Animate]
:::

### 通过 on() 监听动画事件

支持像元素一样 [监听、移除事件](/reference/UI/on.md)

::: code-group
<<< @/code/plugin/animate/options/event/animate/on.ts [animate]
<<< @/code/plugin/animate/options/event/on.ts [Animate]
:::
