# LeafList

LeafList 高性能元素列表类。

可以通过 [innerId](/reference/property/innerId) 快速查找到元素。

## 关键属性

### list: [`ILeaf`](/api/interfaces/ILeaf.md)[]

实际的元素列表。

### keys: [`INumberMap`](/api/interfaces/INumberMap.md)

索引对象，通过 [innerId](/reference/property/innerId) 索引元素。

## 只读属性

### length: number

元素的个数。

## 关键方法

### has ( leaf: [`ILeaf`](/api/interfaces/ILeaf.md)): `boolean`

检测是否存在某个元素。

### add ( leaf: [`ILeaf`](/api/interfaces/ILeaf.md))

添加一个元素。

### addAt ( leaf: [`ILeaf`](/api/interfaces/ILeaf.md), index: `number`)

添加一个元素到指定位置。

### addList ( list: [`ILeaf`](/api/interfaces/ILeaf.md)[])

添加一组元素。

### remove ( leaf: [`ILeaf`](/api/interfaces/ILeaf.md))

移除元素。

### indexAt ( index: `number`):[`ILeaf`](/api/interfaces/ILeaf.md)

获取指定位置的元素。

### indexOf ( leaf: [`ILeaf`](/api/interfaces/ILeaf.md)): `number`

获取元素的位置。

### forEach ( itemCallback: [`IFunction`](/api/interfaces/IFunction.md))

遍历元素。

### clone ( ): [`LeafList`](/api/classes/LeafList.md)

克隆一个 LeafList 对象。

### update ( )

更新元素索引。

### reset ( )

重置列表。

### destroy ( )

销毁列表。

## API

### [LeafList](/api/classes/LeafList.md)
