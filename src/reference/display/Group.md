# Group

创建 Group。用于组合多个子元素，自身没有填充/描边样式，可以定位、不断嵌套。

实际宽高随子元素变化，不能设置，可以通过 [bounds](/reference/property/bounds.md) 获取实际宽高信息。

## 关键属性（只读）

### children: [`UI`](./UI.md)[]

子元素列表，不能直接操作。

[图形编辑器](/plugin/in/editor/Editor.md#打组) 中使用时，需将 [hitChildren](/reference/property/hitChildren.md) 设为 false，只能通过双击进组编辑子元素。

<!-- ## 辅助属性

### zIndex: `number`

子元素可以通过设置 zIndex 控制自身在 父 Group 中的层叠顺序, 默认为 0。 -->

## 关键方法

### add ( child: [`UI`](./UI.md) | [`UI`](./UI.md)[])

添加子元素，可同时添加多个子元素 add ( [child, child, ...] )。

### remove ( child: [`UI`](./UI.md)，destroy?: `boolean`)

移除指定的子元素， destroy 为是否同时销毁移除的子元素。

### remove ( )

移除当前元素。

### destroy ( )

移除 + 销毁当前元素，同时会销毁所有子元素。

### clear ( )

清空所有子元素（移除 + 销毁）。

## 辅助方法

### addAt ( child: [`UI`](./UI.md) | [`UI`](./UI.md)[], index: `number`)

添加子元素在指定位置。

### addBefore ( child: [`UI`](./UI.md) | [`UI`](./UI.md)[], before: [`UI`](./UI.md))

添加子元素在指定的元素前面。

### addAfter ( child: [`UI`](./UI.md) | [`UI`](./UI.md)[], after: [`UI`](./UI.md))

添加子元素在指定的元素后面。

<!-- ### clone ( ):[`UI`](/reference/display/UI.md)

克隆当前元素。 -->

<!-- ### 批量操作

### addMany ( child: [`UI`](./UI.md), child[`UI`](./UI.md), ... )

添加多个子元素，推荐使用 add ( [child, child, ...] ) 代替。
 -->

## 继承元素

### [UI](./UI.md)

<!-- ## API

### [Group](/api/classes/Group.md) -->

## 示例

### 通过 add 方法添加

<<< @/code/display/Group/create.ts

### 通过 children 属性添加

<<< @/code/display/Group/children.ts

### 使用 tag 对象创建

<<< @/code/basic/display/tag.ts

### 使用条件移除

支持所有 [find()](/reference/property/find.md) 条件参数 。

<<< @/code/basic/display/remove-tag.ts
