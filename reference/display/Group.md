# Group 元素

创建 Group。类似于 HTML5 中的 DIV，但自身没有填充/描边等外观样式，用于组合多个子元素，可设置 x、y、scale、rotation 等属性，子元素相对其进行定位，支持不断嵌套。

::: tip 继承
Group &nbsp;>&nbsp; [UI](./UI.md)

<br/>

注意：实际宽高随子元素变化，不能设置 width / hegiht，需通过 [bounds](/reference/UI/bounds.md) 获取实际宽高信息。
:::

## 关键属性（只读）

### children: [`UI`](./UI.md)[]

子元素列表，不能直接操作。

[图形编辑器](/plugin/in/editor/index.md#编组) 中使用时，需将 [hitChildren](/reference/UI/hitChildren.md) 设为 false，只能通过双击进组编辑子元素。

## 编辑属性

### resizeChildren: `boolean`

子元素是否跟随 resize， 默认为 true。

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

<!-- ## 继承元素

### [UI](./UI.md) -->

<!-- ## API

### [Group](/api/classes/Group.md) -->

## 示例

### 通过 add 方法添加

::: code-group
<<< @/code/display/Group/create.ts [Leafer]
<<< @/code/display/Group/app/create.ts [App]
:::

### 通过 children 属性添加

::: code-group
<<< @/code/display/Group/children.ts [Leafer]
<<< @/code/display/Group/app/children.ts [App]
:::

### 使用 tag 对象创建

<<< @/code/basic/display/tag.ts

### 使用条件移除

支持所有 [find()](/reference/UI/find.md) 条件参数 。

<<< @/code/basic/remove/remove-tag.ts
