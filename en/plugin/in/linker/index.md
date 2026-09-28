<script setup>
import Case from '/component/Case.vue'
</script>

# Linker Element

Linker — a high-performance Canvas connector element.

For visually creating and editing connectors, use the [Linker Editor plugin](../linker-editor/index.md).

::: tip Inheritance

Linker  >  [Line](../../../reference/display/Line.md)  >  [UI](../../../reference/display/UI.md)

:::

## Changelog

The final version before open-sourcing was v1.0.2. [View the changelog](./update.md).

## 📦 Install the Plugin (Open Source)

The `linker` plugin is required to use this feature. [Visit the GitHub repository](https://github.com/leaferjs/leafer-in/tree/main/packages/linker).

::: code-group

```sh [npm]

npm install @leafer-in/linker

```

```sh [pnpm]

pnpm add @leafer-in/linker

```

```sh [yarn]

yarn add @leafer-in/linker

```

```sh [bun]

bun add @leafer-in/linker

```

:::

Alternatively, you can include it using a `<script>` tag and access the plugin through the global variable `LeaferIN.linker`.

::: code-group

```html [linker.min]
<script src="https://unpkg.com/@leafer-in/linker@2.3.0/dist/linker.min.js"></script>

<script>
  const { Linker, LinkerData } = LeaferIN.linker
</script>
```

```html [linker]
<script src="https://unpkg.com/@leafer-in/linker@2.3.0/dist/linker.js"></script>

<script>
  const { Linker, LinkerData } = LeaferIN.linker
</script>
```

:::

## Key Properties

### startPoint: `ILinkerPointData`

The starting point of the connector.

```ts
interface ILinkerPointData {
  id?: string | UI // The id of the start element, or an element instance (cannot be exported to JSON)
  direction?: IDirection4 | 'center' // The connector direction relative to the element. 'center' enables automatic direction
  point?: IAlign | IUnitPointData // The connection point relative to the element's actual content box. Supports alignment names and percentage coordinates
  offset?: IOptionPointData // Offset relative to the connection point
}

type IDirection4 = 'top' | 'right' | 'bottom' | 'left'

type IAlign =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'

interface IUnitPointData extends IPointData {
  type?: 'percent' | 'px'
}

interface IPointData {
  x: number
  y: number
}

interface IOptionPointData {
  x?: number
  y?: number
}
```

### endPoint: `ILinkerPointData`

The endpoint of the connector.

## points Mode

You can add intermediate points to the connector using `points`.

### points: `number`[] | [IPointData](../../../reference/interface/math/Math#ipointdata)[]

Add intermediate points using a coordinate array `[x1, y1, x2, y2, ...]` for better performance.

Alternatively, use an array of coordinate objects `[ {x, y}, {x, y}, ...]` for better readability, with lower performance.

### curve: `IPointsCurveData`

Defines how to smooth the intermediate points.

Supports [custom smoothing types for points](../../../reference/interface/ui/PathData.md#ipointscurve).

```ts
interface IPointsCurveData {
  type: IPointsCurveType
  value: IPointsCurveValue
}

type IPointsCurveType =
  | 'C' // Use cubic Bezier curves to smooth points. Extended. Default.
  | (string & {})

// Default

linker.curve = {
  type: 'C',
  value: 0.5, // Curvature, range: 0-1
}
```

## Computed Properties (Read-only)

The following properties are only available after the connector element has completed its initial layout.

### startNode: [UI](../../../reference/display/UI.md)

The element instance at the start of the connector.

### endNode: [UI](../../../reference/display/UI.md)

The element instance at the end of the connector.

### startData: `ILinkerComputedPointData`

The computed data for the starting point.

```ts
interface ILinkerComputedPointData {
  auto: boolean // Whether the connector direction is automatic
  direction: IAlign // The actual connector direction relative to the element
  point: IPointData // The actual connection point in the element's content box coordinate system
}
```

### endData: `ILinkerComputedPointData`

The computed data for the endpoint.

## Properties Added to Connected Elements

### startLinker?: `Linker`[]

All connector instances that use the current element as their starting element.

### endLinker?: `Linker`[]

All connector instances that use the current element as their ending element.

## Key Methods

### createStartPoint ( worldPoint: `IPointData`, node?: [UI](../../../reference/display/UI.md), options?: `ILinkerPointOptions` ): `ILinkerPointData`

Creates the [startPoint](#startpoint-ilinkerpointdata) of a connector.

Automatically determines the connection point on the `node` element based on the [world coordinate](https://www.leaferjs.com/ui/guide/advanced/coordinate.md#world-%E4%B8%96%E7%95%8C%E5%9D%90%E6%A0%87%E7%B3%BB) from the event.

If `node` is not provided, a coordinate-only point is created.

```ts
interface IPointData {
  x: number
  y: number
}

interface ILinkerPointOptions {
  snapRadius?: number // After snapping to a direction point, if the snap distance exceeds this radius (relative to the element's Box coordinate system), the connection point automatically adds offset: {x, y}
  mode?:
    | 'edge' // Automatically snap to the edge of the element's bounding box. Default mode.
    | 'four' // Automatically snap to one of the four directions on the element's bounding box
    | 'auto' // Automatically snap to the element's bounding box. The best direction is automatically updated when the element is dragged.
    | 'free' // Can snap to any point inside the element
}
```

### createEndPoint ( worldPoint: `IPointData`, node?: [UI](../../../reference/display/UI.md), options?: `ILinkerPointOptions` ): `ILinkerPointData`

Creates the [endPoint](#endpoint-ilinkerpointdata) of a connector.

### createLinkerPoint ( worldPoint: `IPointData`, node?: [UI](../../../reference/display/UI.md), options?: `ILinkerPointOptions` ): `ILinkerPointData`

Generates a connection point only. You can modify the data before assigning it to the connector's [startPoint](#startpoint-ilinkerpointdata) or [endPoint](#endpoint-ilinkerpointdata).

## Examples

### Create a Connector Element

<<< @/code/plugin/linker/index.ts

### Connector Element with Flow Animation

<<< @/code/plugin/linker/flow.ts

### Create a Connector Element by Dragging

<<< @/code/plugin/linker/link.ts

### Fixed Connector Width Independent of View Zoom

<<< @/code/plugin/linker/fixed.ts

### Create a Connection Point with Automatic Direction Snapping and Offset

<<< @/code/plugin/linker/create.ts
