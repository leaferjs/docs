# layer

图层相关属性。

## 关键属性

### id: `string`

唯一 id。

### className: `string`

分类名，同 HTML 的 className。

### name: `string`

名称。

### opacity: `number`

元素的不透明度，取值范围为 0 ～ 1， 默认为 1。

### visible: `boolean` | `number`

元素是否可见， 默认为 true。

设为 false 仍会占用空间，只有设为数字 0 时， 才会有类似 css 的 `display: none` 效果。

### blendMode: [`BlendMode`](./blendMode.md)

元素的混合模式， 默认为穿透模式。

### zIndex: `number`

元素层叠顺序, 默认为 0。

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

所属 Leafer。

### zoomLayer: [`Group`](/reference/display/Group.md)

leafer 的缩放层。

### isLeafer: `boolean`

是否为 Leafer。

### parent: [`Group`](/reference/display/Group.md)

父元素。

### worldOpacity: `number`

元素相对于应用视图的不透明度。

当 `visible` 为 false 时，此属性值为 0。

### destroyed: `boolean`

元素是否已被销毁。

## 关键方法

### dropTo ( parent: [`Group`](/reference/display/Group.md), index?: `number`)

将元素拖拽放置到另一个父容器中，同时保持在世界坐标中的显示位置不变， `index`表示放置的层级。

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

### nextRender ( item: `function`, bind?: `object` )

等待下一次渲染帧执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

### removeNextRender ( item: `function` )

移除 nextRender()的 item 监听。

### forceRender ( )

强制渲染元素，只会重新渲染，不会更新布局。

### forceUpdate ( attrName?: `string` )

强制更新元素渲染，默认会更新元素的布局与渲染，可指定属性名 `attrName` 以提高更新性能。

## 归属

### [UI](/reference/display/UI.md#基础属性)
