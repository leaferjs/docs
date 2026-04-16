<script setup>
import Case from '/component/Case.vue'
</script>

# Editor Configuration

### [Basic](./base.md)     Event     [Style](./style.md)     [Buttons](./buttons.md)     [Cursor](./cursor.md)     [Selection](./select.md)     [Control](./control.md)     [Enable](./enable.md)     [Inner Editor](./innerEditor.md)

##

Event-related configuration. Can be updated in real time during runtime via [app.editor.config](../index.md#config-ieditorconfig).

Each element also has an [individual edit config](../../../../reference/UI/editable.md#editconfig-ieditorconfig) that can override the global configuration in real time.

## Key Properties

### keyEvent: `boolean`

Whether to listen to keyboard events (e.g. arrow key movement). Default is `true`.

### arrowStep: `number`

Movement step size for arrow keys. Default is `1`.

### arrowFastStep: `number`

Movement step size when holding Shift. Default is `10`.

### multipleSelectKey: [IShortcutKeysCheck](../../../../api/interfaces/IShortcutKeysCheck.md)

多选元素的快捷键钩子函数。

```ts
multipleSelectKey(event) {
    return event.shiftKey || event.ctrlKey // default is shiftKey
}
```

### rotateKey: [IShortcutKeysCheck](../../../../api/interfaces/IShortcutKeysCheck.md)

在 resize 控制点上按下某个快捷键，会变旋转功能的钩子函数。

```ts
rotateKey(event) {
    return event.ctrlKey // default
}
```

### diagonalRotateKey: [IShortcutKeysCheck](../../../../api/interfaces/IShortcutKeysCheck.md)

Shortcut key hook for diagonal rotation.

```ts
diagonalRotateKey(event) {
    return event.shiftKey // default
}
```

### beforeSelect: [`IEditorBeforeSelect`](../../../../api/interfaces/IEditorBeforeSelect.md)

Pre-hook before selecting elements. Only takes effect during initialization or when updating [app.editor.config](../index.md#config-ieditorconfig).

Parameter `data` is `{ target }`.

Return `false` to cancel selection. Return a `target` to modify selection data.

```ts
beforeSelect(data) {
    const { target } = data // target can be single or multiple elements
    return true // return false | target
}
```

### beforeEditOuter: [`IEditorEditOuterData`](../../../../api/interfaces/IEditorEditOuterData.md)

Pre-hook for opening external editor tools via [editOuter](../../../../reference/UI/editable.md#editouter-string).

Parameter `data` is `{ target, name }`, where `name` is the tool name (e.g. 'EditTool').

Return `false` to cancel. Return a string to override the tool name.

```ts
beforeEditOuter(data) {
    const { target, name } = data
    return true // return false | name
}
```

### beforeEditInner: [`IEditorEditInnerData`](../../../../api/modules.md#ieditoreditinnerdata)

Pre-hook for opening inner editor via [editInner](../../../../reference/UI/editable.md#editinner-string).

Parameter `data` is `{ target, name }`, where `name` is the tool name (e.g. 'PathEditor').

Return `false` to cancel. Return a string to override the tool name.

```ts
beforeEditInner(data) {
    const { target, name } = data
    return true // return false | name
}
```

---

### beforeMove: [`IEditorBeforeMove`](../../../../api/interfaces/IEditorBeforeMove.md)

移动元素事件的前置钩子函数。

Parameter `data` is `{ target, x, y }`.

Return `false` to cancel. Return `{ x, y }` to modify movement.

```ts
beforeMove(data) {
    const { target, x, y } = data
    return true // return false | { x, y }
}
```

### beforeScale: [`IEditorBeforeScale`](../../../../api/interfaces/IEditorBeforeScale.md)

resize 元素事件的前置钩子函数。

Parameter `data` is `{ target, origin, scaleX, scaleY }`.

Return `false` to cancel. Return `{ scaleX, scaleY }` to modify scaling.

You can also limit size using [widthRange](../../../../reference/UI/editable.md#widthrange-irangesize) and [heightRange](../../../../reference/UI/editable.md#widthrange-irangesize).

```ts
beforeScale(data) {
    const { target, origin, scaleX, scaleY } = data
    return true // return false | { scaleX, scaleY }
}
```

### beforeRotate: [`IEditorBeforeRotate`](../../../../api/interfaces/IEditorBeforeRotate.md)

旋转元素事件的前置钩子函数。

Parameter `data` is `{ target, origin, rotation }`.

Return `false` to cancel. Return a number to modify rotation.

```ts
beforeRotate(data) {
    const { target, origin, rotation } = data
    return true // return false | rotation
}
```

### beforeSkew: [`IEditorBeforeSkew`](../../../../api/interfaces/IEditorBeforeSkew.md)

倾斜元素事件的前置钩子函数。

Parameter `data` is `{ target, origin, skewX, skewY }`.

Return `false` to cancel. Return `{ skewX, skewY }` to modify skew.

```ts
beforeSkew(data) {
    const { target, origin, skewX, skewY } = data
    return true // return false | { skewX, skewY }
}
```

### onCopy: [`IEditorOnCopy`](../../../../api/interfaces/IEditorOnCopy.md)

返回 true 表示进行了copy操作（必须返回），查看 [代码示例](#按住alt键移动可复制元素)。

```ts
onCopy() {
    // clone elements
    return true
}
```

## Examples

### Limit minimum edit size

通过 resize 元素事件的前置钩子函数实现。

:::code-group
<<< @/code/plugin/editor/config/event/beforeScale/index.ts [min size]
<<< @/code/plugin/editor/config/event/beforeScale/flip.ts [enable flip]
:::

### Copy elements by holding Alt key while dragging

<<< @/code/plugin/editor/config/copy.ts
