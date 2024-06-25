# Leafer-tree

负责定义

1. 树结构
2. 事件触发
3. 布局
4. 渲染接口

事件
布局
数据
元素操作/绘制接口

**盒子模型**

外面
renderBounds shadow
eventBounds (center/outside) border
localBounds
里面

**属性**
使用@dataAttr 装饰属性，自动生成 getter、setter

watcher 触发 UpdateEvent.UPDATE,
renderer 触发 LayoutEvent.REQUEST_LAYOUT,
layouter 完成布局，触发 LayoutEvent.LAYOUT 通知变化的 Bounds
renderer 完成渲染

首次渲染与布局采用全布局与全渲染模式，并在首次布局前自动绑定 root 元素，之后只对变化的区域进行局部布局与渲染

### 核心架构

```ts
// leafer.js
Tree —— Branch—— Leaf —— Layouter / Eventer
```

```ts
// 稳定的package
import { Leafer } from 'leafer-core'
export * from 'leafer-tree'
export * as event from 'leafer-event'
export * as math from 'leafer-math'
export * from 'leafer-task'
export * from 'leafer-runtime'
export * from 'leafer-debug'

// 可替换的package
export * as ui from 'leafer-ui'

import { Interaction } from 'leafer-interaction' // 可选
import { LeaferCanvas } from 'leafer-canvas'
import { LeaferData } from 'leafer-data'

import { Layouter } from 'leafer-layouter'
import { Rendererer } from 'leafer-renderer'
import { Selector } from 'leafer-selector' // 可选

Leafer.class.Interaction = Interaction
Leafer.class.LeaferCanvas = LeaferCanvas
Leafer.class.LeaferData = LeaferData

Leafer.class.Layouter = Layouter
Leafer.class.Renderer = Rendererer
Leafer.class.Selector = Selector
```

### 扩展功能

```ts
extends ———— booster (加速器) —— design (支持在线设计、白板、无代码平台等场景, 需商业授权)
    |            |
    |            ╚—— 可扩展其他场景 // 如游戏、页面应用、文档类场景
    |
    |——————— 官方插件 —— animate (动画)
    |          |
    |          ╚—— 通用需求制作插件 // 如创建工具、编辑工具
    |
    |——————— 第三方插件
    |
    ╚——————— 可与Vue、React结合
```

### 实例结构

```ts
// 树结构
leafer ————  view (视窗平移、缩放) —— shape (用户创建的图形)

```

如何创建一个图形引擎

事件触发
支持事件监听（冒泡、捕获）

布局 (矩阵、边界)
世界矩阵
本地矩阵
本地 Bounds
本地渲染 Bounds
本地事件 Bounds

世界矩阵从上到下更新
世界边界从下往上更新

数据属性 （通过装饰器简化 setter/getter、收集属性的工作）
默认值处理（2 种方式: 1.直接设置默认值，占内存， 但调用快 2. 调用时判断是否需要返回默认值，不占内存，调用稍慢一点）
收集影响矩阵、边界的属性，当用户设置相关属性时，设置影响的相关字段需要更新
收集单位、角度、百分比等字段， 当用户设置时，进行换算结果

父子对象操作
zIndex 排序

绘制优化，尽量避免每一次都设置 setTransform, fillStyle, strokeStyle
