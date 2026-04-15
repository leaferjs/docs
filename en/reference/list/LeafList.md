# LeafList

LeafList high-performance element list class.

Elements can be quickly found via [innerId](../UI/innerId.md).

## Key Properties

### list: [`ILeaf`](../../api/interfaces/ILeaf.md)[]

The actual element list.

### keys: [`INumberMap`](../../api/interfaces/INumberMap.md)

Index object, used to index elements via [innerId](../UI/innerId.md).

## Readonly Properties

### length: number

The number of elements.

## Key Methods

### has ( leaf: [`ILeaf`](../../api/interfaces/ILeaf.md)): `boolean`

Checks whether an element exists.

### add ( leaf: [`ILeaf`](../../api/interfaces/ILeaf.md))

Adds an element.

### addAt ( leaf: [`ILeaf`](../../api/interfaces/ILeaf.md), index: `number`)

Adds an element at the specified position.

### addList ( list: [`ILeaf`](../../api/interfaces/ILeaf.md)[])

Adds a group of elements.

### remove ( leaf: [`ILeaf`](../../api/interfaces/ILeaf.md))

Removes an element.

### indexAt ( index: `number`):[`ILeaf`](../../api/interfaces/ILeaf.md)

Gets the element at the specified position.

### indexOf ( leaf: [`ILeaf`](../../api/interfaces/ILeaf.md)): `number`

Gets the position of an element.

### forEach ( itemCallback: [`IFunction`](../../api/interfaces/IFunction.md))

Iterates over elements.

### clone ( ): [`LeafList`](../../api/classes/LeafList.md)

Clones a LeafList object.

### update ( )

Updates element indices.

### reset ( )

Resets the list.

### destroy ( )

Destroys the list.

## API

### [LeafList](../../api/classes/LeafList.md)
