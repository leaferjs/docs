# KeyEvent

键盘事件。

只能在 Leafer 引擎上监听键盘事件。

::: tip 继承
KeyEvent &nbsp;>&nbsp; [UIEvent](./UIEvent.md) &nbsp;>&nbsp; [Event](../basic/Event.md)
:::

## 事件名称

### KeyEvent.DOWN

按下按键事件， 长按会不断触发。

`key.down`

### KeyEvent.HOLD <Badge type="tip" text="new" />

按住按键事件， 长按只会触发一次。

`key.hold`

### KeyEvent.UP

抬起按键事件。

`key.up`

## 关键属性

### key: `string`

物理按键的值。

### code: `string`

物理按键，能够区分出 ShiftLeft 与 ShiftRight。

## 关键方法

### Keyboard.isHoldSpaceKey(): `boolean`

是否按住空格键。

### Keyboard.isHold(code: `string`): `boolean`

是否按住某一个物理按键。

<!-- ## 继承事件

### [UIEvent](./UIEvent) -->

<!--
## API

### [KeyEvent](/api/classes/KeyEvent.md) -->
