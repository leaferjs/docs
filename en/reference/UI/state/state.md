<script setup>
import Case from '/component/Case.vue'
</script>

# state

Element states allow you to predefine complex UI or game states and switch between them at any time. Supports [transition effects](../transition.md).

[Box](../../display/Box.md) / [Group](../../display/Group.md) can use the [button](./state.md#button-boolean) property to automatically sync interaction states to child elements.

:::tip Note
You need to install the [state plugin](../../../plugin/in/state/index.md) to use this feature.
:::

## State Priority

state < selected < focus < hover < press < disabled

## Key Properties

### states: [`IStates`](../../../api/interfaces/IStates.md)

A predefined state list represented as a key-value object.

Each state can define all element styles, including animations and interaction styles such as hover.

```ts
interface IStates {
  [state: string]: IUIInputData
}
```

### state: `string`

The current state of the element. The state name corresponds to a key in `states`. Default is empty.

### button: `boolean`

Whether the element is a button. Default is `false`.

Buttons cannot be nested. When enabled, child elements will automatically sync interaction states such as `state`, `hover`, `press`, etc.

## 归属

### [UI Element](../../display/UI.md)

## Examples

<case name="State" index=0 editor=false></case>

### Toggle element state on click

:::code-group
<<< @/code/property/state/state.ts
<<< @/code/property/state/app/state.ts

<case name="Transition" editor=false></case>

### Button with synced hover state

::: code-group
<<< @/code/property/transition/button.ts [Leafer]
<<< @/code/property/transition/app/button.ts [App]
:::
