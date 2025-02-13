# data

元素数据相关属性， 支持通过 [proxyData](./proxy.md) 转为响应式数据。

## 关键属性

### data: [`IObject`](/api/interfaces/IObject.md)

预留给用户的自定义数据对象，我们永远不会占用， 默认为空对象 {} 。

## 内部属性

### \_\_: [`IUIInputData`](/api/interfaces/IUIInputData.md)

内部数据处理实例（两个下划线的变量）。

## 关键方法

### set ( data?: [`IUIInputData`](/api/interfaces/IUIInputData.md), transition?: [`ITranstion`](/reference/property/transition.md#transition-itranstion))

设置元素样式，[`transition`](/reference/property/transition.md#transition-itranstion) 参数表示是否进行 [动画](/guide/plugin/animate.md) 过渡。

```ts
// 设置 x、y 属性
rect.set({ x: 100, y: 200 })

// 动画过渡
rect.set({ x: 100, y: 200 }, true)

rect.set({ x: 100, y: 200 }, 2) // 过渡 2 秒
```

### reset ( data?: [`IUIInputData`](/api/interfaces/IUIInputData.md))

重置元素样式, 支持传入一个新的样式 data。

可以通过重写 reset 方法加入自定义的元素初始化逻辑。

### get ( ): [`IUIInputData`](/api/interfaces/IUIInputData.md)

获取设置过的样式属性数据（输入数据）。

### get ( name: `string` ): [`IValue`](/api/modules.md#ivalue)

获取设置过的属性值（输入数据），未设置返回 `undefine`。

### setAttr ( name: `string`, value: `any` )

设置属性值。

### getAttr ( name: `string` ): `any`

获取属性值，优先返回输入数据，其次返回计算数据（含默认值）。

### getComputedAttr ( name: `string` ): `any`

获取计算属性值，只返回计算数据（含默认值）。

## 数据分层结构

通过数据处理类创建的实例 `ui.__`，可以承载多层数据，满足不同的业务需求。

### 输入数据层

创建元素/修改属性时输入的原始数据，导入导出的 JSON 都是在这个数据层。

```ts
const rect = new Rect()

rect.get('width') //  undefined，返回输入数据
rect.width // 100，返回输入数据优先, 不存在则返回默认值
```

### 中间数据层

像百分比的语义化字符串，会先解析为一个中间数据，再动态结合宽高生成计算数据。

```ts
const box = new Box({ width: 200 })
const rect = new Rect({ width: '50%' }) // 仅演示，目前是预留了中间数据层，还未使用

box.add(rect)

rect.__.__getMiddle('width') // { type: 'percent', value: 0.5 }， 返回中间数据
```

### 计算数据层

通过输入数据/中间数据计算得到稳定的最终数据，支持返回默认值。

```ts
const box = new Box({ width: 100 })
const rect = new Rect({ width: '50%' })

box.add(rect)

// `rect.__` 会自动添加同元素数据属性一样的 setter/getter

rect.__.width // 50, 返回计算数据 50% = 100 * (50 / 100)，box.width变化时会自动更新
```

其他如图片填充，也会生成一个最终的 pattern 对象（计算数据）用于快速渲染。

大部分的属性都是共用计算数据层，避免额外的内存开销。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 通过 set() 修改属性

<<< @/code/property/set/set.ts

### 通过 set() 修改属性，有动画过渡

<<< @/code/property/set/transition.ts
