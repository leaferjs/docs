<script setup>
import Case from '/component/Case.vue'
</script>

# Linker 元素

Linker —— 高性能 Canvas 连线元素。

如需可视化创建、编辑连线，可使用 [Linker Editor 插件](../linker-editor/index.md)。

::: tip 继承
Linker &nbsp;>&nbsp; [Line](../../../reference/display/Line.md) &nbsp;>&nbsp; [UI](../../../reference/display/UI.md)
:::

## 更新日志

开源前的最后版本为 v1.0.2，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 linker 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/linker)。

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

或通过 script 标签引入，使用全局变量 LeaferIN.linker 访问插件内部功能。

::: code-group

```html [linker.min]
<script src="https://unpkg.com/@leafer-in/linker@2.3.2/dist/linker.min.js"></script>
<script>
  const { Linker, LinkerData } = LeaferIN.linker
</script>
```

```html [linker]
<script src="https://unpkg.com/@leafer-in/linker@2.3.2/dist/linker.js"></script>
<script>
  const { Linker, LinkerData } = LeaferIN.linker
</script>
```

:::

## 关键属性

### startPoint: `ILinkerPointData`

连线的起点。

```ts
interface ILinkerPointData {
  id?: string | UI // 起点元素的 id，也支持元素实例（只是导出不了json）
  direction?: IDirection4 | 'center' // 连线的方向（相对元素），为 center 时表示自动方向
  point?: IAlign | IUnitPointData // 连接点（相对元素实际内容的box坐标点，支持使用对齐方向名、百分比坐标）
  offset?: IOptionPointData // 相对连接点的偏移值
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

连线的终点。

## points 模式

可通过 points 添加连线的途径点。

### points: `number`[] | [IPointData](../../../reference/interface/math/Math#ipointdata)[]

可通过坐标数组 [ x1,y1, x2,y2, ...] 添加连线的途径点（高性能）。

或通过坐标对象数组 [ {x, y}, {x, y} ...] 添加连线的途径点 （可读性高，性能一般）。

### curve: `IPointsCurveData`

平滑途径点的方式。

支持 [自定义平滑 points 类型](../../../reference/interface/ui/PathData.md#ipointscurve)。

```ts
interface IPointsCurveData {
  type: IPointsCurveType
  value: IPointsCurveValue
}

type IPointsCurveType =
  | 'C' // 使用三次贝塞尔曲线平滑 points，已扩展， 默认值
  | (string & {})

// 默认对象
linker.curve = {
  type: 'C',
  value: 0.5, // 曲率，取值范围 0-1,
}
```

## 计算属性（只读）

只有当连线元素首次布局后，以下属性才有值。

### startNode: [UI](../../../reference/display/UI.md)

连线起点的元素实例。

### endNode: [UI](../../../reference/display/UI.md)

连线终点的元素实例。

### startData: `ILinkerComputedPointData`

连线起点的计算数据。

```ts
interface ILinkerComputedPointData {
  auto: boolean // 是否自动连线方向
  direction: IAlign // 当前实际的连线方向 （相对元素）
  point: IPointData // 当前实际连接点的坐标 （相对元素实际内容的box坐标系）
}
```

### endData: `ILinkerComputedPointData`

连线终点的计算数据。

## 被连线元素上增加的属性

### startLinker?: `Linker`[]

以当前元素作为起点的所有连线实例。

### endLinker?: `Linker`[]

以当前元素作为终点的所有连线实例。

## 关键方法

### createStartPoint ( worldPoint: `IPointData`, node?: [UI](../../../reference/display/UI.md), options?: `ILinkerPointOptions` ): `ILinkerPointData`

创建连线的起点 [startPoint](#startpoint-ilinkerpointdata)。

根据事件中的 [world 世界坐标点](https://www.leaferjs.com/ui/guide/advanced/coordinate.md#world-%E4%B8%96%E7%95%8C%E5%9D%90%E6%A0%87%E7%B3%BB)，自动获取在 node 目标元素上的连接点数据进行创建。

node 参数不存在时将创建纯坐标点。

```ts
interface IPointData {
  x: number
  y: number
}

interface ILinkerPointOptions {
  snapRadius?: number // 吸附到方向点上之后，如果吸附距离超过这个吸附半径（相对元素的Box坐标系），连接点对象会自动增加 offset: {x,y}
  mode?:
    | 'edge' // 自动吸附到元素包围盒边缘，默认模式
    | 'four' // 自动吸附到元素包围盒上的4个方向
    | 'auto' // 自动吸附到元素包围盒上，拖拽元素会自动更新最佳方向
    | 'free' // 可以吸附到元素内部
}
```

### createEndPoint ( worldPoint: `IPointData`, node?: [UI](../../../reference/display/UI.md), options?: `ILinkerPointOptions` ): `ILinkerPointData`

创建连线的终点 [endPoint](#endpoint-ilinkerpointdata)。

### createLinkerPoint ( worldPoint: `IPointData`, node?: [UI](../../../reference/display/UI.md), options?: `ILinkerPointOptions` ): `ILinkerPointData`

仅生成连接点，可以自己修改数据后，再设置到连线的 [startPoint](#startpoint-ilinkerpointdata)、[endPoint](#endpoint-ilinkerpointdata) 上。

## 示例

### 创建连线元素

<<< @/code/plugin/linker/index.ts

### 带流动动画的连线元素

<<< @/code/plugin/linker/flow.ts

### 拖拽创建连线元素

<<< @/code/plugin/linker/link.ts

### 连线元素固定线宽不随视图放大

<<< @/code/plugin/linker/fixed.ts

### 创建连线点，自动吸附方向、偏移距离

<<< @/code/plugin/linker/create.ts
