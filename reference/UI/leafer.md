# leafer

元素所在的 Leafer 实例。

## 只读属性

### leafer: [`Leafer`](/reference/display/Leafer.md)

元素所在的 Leafer 实例。

### app: [`App`](/reference/display/Leafer.md) ｜ [`Leafer`](/reference/display/Leafer.md)

元素所在的 App 实例（根应用），非 App 结构时为 Leafer。

### isLeafer: `boolean`

元素是否为 Leafer 实例。

### leaferIsCreated: `boolean`

Leafer 实例及子元素 [创建完成](/reference/display/Leafer.md#created-boolean)（完成首次创建）。

### leaferIsReady: `boolean`

Leafer 实例是否 [准备就绪](/reference/display/Leafer.md#ready-boolean)（完成首次布局）。

### zoomLayer: [`Group`](/reference/display/Group.md)

Leafer 实例的 [缩放平移视图层](/reference/display/Leafer.md#zoomlayer-group)。

## 辅助方法

### waitLeafer ( item: `function`, bind?: `object` )

等待元素有 [`leafer`](/reference/UI/leafer.md) 属性时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已存在则立即执行。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 等待元素被添加到应用中时，执行回调

<<< @/code/property/leafer/wait.ts
