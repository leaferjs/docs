# layer

元素基础图层属性。

## 关键属性

### id: `string`

唯一 id。

### className: `string`

分类名，同 HTML 的 className。

### name: `string`

名称。

## 只读属性

### tag: `string`

标签名（元素的类名），如 `Rect`。

### innerId: `number`

临时创建的内部唯一 id，用于快速识别元素。

### innerName: `string`

临时创建的内部唯一名称，用于快速识别元素。

### app: [`App`](/reference/display/Leafer.md) ｜ [`Leafer`](/reference/display/Leafer.md)

所属 App（根应用），非 App 结构时为 Leafer。

### leafer: [`Leafer`](/reference/display/Leafer.md)

所属 Leafer 。

### isLeafer: `boolean`

元素是否为 Leafer。

### leaferIsCreated: `boolean`

Leafer 及子元素 [创建完成](/reference/display/Leafer.md#created-boolean)（完成首次创建）。

### leaferIsReady: `boolean`

Leafer 是否 [准备就绪](/reference/display/Leafer.md#ready-boolean)（完成首次布局）。

### zoomLayer: [`Group`](/reference/display/Group.md)

Leafer 的 [缩放平移视图层](/reference/display/Leafer.md#zoomlayer-group)。

### parent: [`Group`](/reference/display/Group.md)

父元素。

### destroyed: `boolean`

元素是否已被销毁。

## 关键方法

### remove ( )

移除当前元素。

### destroy ( )

移除 + 销毁当前元素。

## 辅助方法

### waitParent ( item: `function`, bind?: `object` )

等待元素有 [`parent`](/reference/property/layer.md#parent-group) 属性时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已存在则立即执行。

### waitLeafer ( item: `function`, bind?: `object` )

等待元素有 [`leafer`](/reference/property/layer.md#leafer-leafer) 属性时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已存在则立即执行。

## 归属

### [UI](/reference/display/UI.md#基础属性)
