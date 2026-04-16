# data

Element data-related properties. Supports converting to reactive data via [proxyData](./proxy.md).

## Key Properties

### data: [`IObject`](../../api/interfaces/IObject.md)

A custom data object reserved for users. It will never be used internally. Default is an empty object `{}`. When using, you need to assign a new object.

## Internal Properties

### \_\_: [`IUIInputData`](../../api/interfaces/IUIInputData.md)

Internal data processing instance (double underscore variable).

## Key Methods

### set ( data?: [`IUIInputData`](../../api/interfaces/IUIInputData.md), transition?: [`ITranstion`](./transition.md#transition-itranstion))

Set element styles. The [`transition`](./transition.md#transition-itranstion) parameter determines whether to apply an [animation](../../guide/plugin/animate.md) transition.

```ts
// Set x, y properties
rect.set({ x: 100, y: 200 })

// Animate transition
rect.set({ x: 100, y: 200 }, true)

rect.set({ x: 100, y: 200 }, 2) // transition for 2 seconds
```

### reset ( data?: [`IUIInputData`](../../api/interfaces/IUIInputData.md))

Reset element styles. Supports passing a new style `data`.

You can override the `reset` method to add custom initialization logic.

### get ( ): [`IUIInputData`](../../api/interfaces/IUIInputData.md)

Get the set style property data (input data).

### get ( name: `string` ): [`IValue`](../../api/modules.md#ivalue)

Get the set property value (input data). Returns `undefined` if not set.

### setAttr ( name: `string`, value: `any` )

Set a property value.

### getAttr ( name: `string` ): `any`

Get a property value. Returns input data first, then computed data (including default values).

### getComputedAttr ( name: `string` ): `any`

Get computed property value. Returns only computed data (including default values).

## Data Layer Structure

The instance created by the data processing class `ui.__` can hold multiple layers of data to meet different business needs.

### Input Data Layer

The raw data entered when creating elements or modifying properties. Imported and exported JSON operate on this layer.

```ts
const rect = new Rect()

rect.get('width') // undefined, returns input data
rect.width // 100, returns input data first; if not present, returns default value
```

### Intermediate Data Layer

Semantic strings like percentages are first parsed into intermediate data, then dynamically combined with width/height to generate computed data.

```ts
const box = new Box({ width: 200 })
const rect = new Rect({ width: '50%' }) // for demonstration only; intermediate layer is reserved but not yet fully used

box.add(rect)

rect.__.__getMiddle('width') // { type: 'percent', value: 0.5 }, returns intermediate data
```

### Computed Data Layer

Stable final data calculated from input/intermediate data. Supports default values.

```ts
const box = new Box({ width: 100 })
const rect = new Rect({ width: '50%' })

box.add(rect)

// `rect.__` automatically provides setters/getters similar to element properties

rect.__.width // 50, computed data: 50% = 100 * (50 / 100), auto-updates when box.width changes
```

Other features such as image fill will also generate a final pattern object (computed data) for efficient rendering.

Most properties share the computed data layer to avoid additional memory overhead.

## 归属

### [UI Elements](../display/UI.md)

## Examples

### Modify properties via set()

:::code-group
<<< @/code/property/set/set.ts [Leafer]
<<< @/code/property/set/app/set.ts [App]
:::

### Modify properties via set() with animation transition

:::code-group
<<< @/code/property/set/transition.ts [Leafer]
<<< @/code/property/set/app/transition.ts [App]
:::
