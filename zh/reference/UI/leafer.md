# leafer

元素所在的 Leafer 引擎。

## 只读属性

### leafer: [`Leafer`](../display/Leafer.md)

元素所在的 Leafer 引擎。

### app: [`App`](../display/Leafer.md) ｜ [`Leafer`](../display/Leafer.md)

元素所在的 App 实例（根应用），非 App 结构时为 Leafer。

### isLeafer: `boolean`

元素是否为 Leafer 引擎。

### leaferIsCreated: `boolean`

Leafer 引擎及子元素 [创建完成](../display/Leafer.md#created-boolean)（完成首次创建）。

### leaferIsReady: `boolean`

Leafer 引擎是否 [准备就绪](../display/Leafer.md#ready-boolean)（完成首次布局）。

### zoomLayer: [`Group`](../display/Group.md)

Leafer 引擎的 [缩放平移视图层](../display/Leafer.md#zoomlayer-group)。

## 辅助方法

### waitLeafer ( item: `function`, bind?: `object` )

等待元素有 [`leafer`](./leafer.md) 属性时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已存在则立即执行。

## 归属

### [UI 元素](../display/UI.md)

## 示例

### 等待元素被添加到引擎中时，执行回调

::: code-group
<<< @/code/property/leafer/wait.ts [Leafer]
<<< @/code/property/leafer/app/wait.ts [App]
:::
