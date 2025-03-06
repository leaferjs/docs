<script setup>
import Case from '/component/Case.vue'
</script>

# state

元素的状态，可预设复杂多样的元素、游戏状态，用于随时切换， 支持添加 [过渡效果](/reference/UI/transition.md)。

[Box](/reference/display/Box.md) / [Group ](/reference/display/Group.md)可通过设置 [button](/reference/UI/state/state.md#button-boolean) 属性，使子元素自动同步交互状态。

::: tip 注意事项
需安装 [交互状态插件](/plugin/in/state/index.md) 才能使用。
:::

## 状态优先级

状态样式从低到高的覆盖顺序: state < selected < focus < hover < press < disabled

## 关键属性

### states: [`IStates`](/api/interfaces/IStates.md)

预设状态列表， 一个键值对象。

每个状态都可以设置元素的所有样式，包含动画、hover 等交互样式。

```ts
interface IStates {
  [state: string]: IUIInputData
}
```

### state: `string`

元素当前的状态， 状态名为 states 的键名， 默认为空。

### button: `boolean`

是否为按钮， 默认为 false。

按钮不能嵌套，设为按钮后，子元素将自动同步交互状态，如 state、hover、press...

## 归属

### [UI](/reference/display/UI.md)

## 示例

<case name="State" index=0 editor=false></case>

### 点击切换元素状态

<<< @/code/property/state/state.ts

<case name="Transition" editor=false></case>

### 同步 hover 状态的按钮

<<< @/code/property/transition/button.ts
