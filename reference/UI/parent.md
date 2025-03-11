# parent

元素的父节点。

## 只读属性

### parent: [`Group`](/reference/display/Group.md)

父元素。

## 辅助方法

### waitParent ( item: `function`, bind?: `object` )

等待元素有 [`parent`](/reference/UI/parent.md) 属性时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已存在则立即执行。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 等待元素被添加到父元素中时，执行回调

<<< @/code/property/parent/wait.ts
