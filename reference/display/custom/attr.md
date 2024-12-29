# 属性

UI 的数据属性是响应式的， 通过监测属性变化，实现了自动化布局、局部渲染的功能。

### 强制更新属性

通过调用`__updateAttr()`方法可以强制更新某个属性，通知变化。

```ts
public __updateAttr(attrName: string): void {
  if (this.root) {
    const value = this.__.__getInput(attrName)
    this.root.emitEvent(
      new AttrEvent(AttrEvent.CHANGE, this, attrName, value, value)
    )
  }
}
```

### 访问属性

为了将来可以支持扩展语义化的属性， 我们将数据分成了输入数据、中间数据、计算数据。

##### 输入数据

```ts
this.width = '10px'

console.log(this.width) // '10px'
console.log(this.__.__input.width) // '10px'
```

##### 中间数据

主要用于百分比单位等，需要依赖父对象计算结果。

```ts
this.width = '70%'

console.log(this.width) // '70%'
console.log(this.__.__middle.width) // { percent: 0.7 }
```

##### 计算数据

转换为数字类型的最终数据。

```ts
console.log(this.__.width) // 10  通过 this.__[attrName] 可以获取最终的计算数据
```

##### 数据代理

设置图形的属性后， 会经过[数据代理](https://github.com/leaferjs/leafer/blob/main/packages/display-module/src/LeafDataProxy.ts), 最终被[DataProcessor](https://github.com/leaferjs/leafer-ui/blob/main/packages/data/src/UIData.ts) 实例进行处理并存储。

```ts
this.__ = new this.__DataProcessor(this) // 初始化 UI 的时候会创建如下数据处理实例
```

### 属性处理类型

确定处理类型，可以精细化的进行更新，提升性能。

通过阅读 [decorator](https://github.com/leaferjs/leafer/blob/main/packages/decorator/src/data.ts), [LeafLayout](https://github.com/leaferjs/leafer/blob/main/packages/layout/src/LeafLayout.ts) 源代码可以了解具体处理过程

##### aliasType

别名类型，可以为某个属性起一个别名, 比如设置 alpha 为 opacity 的别名属性:

```ts
  @aliasType('opacity')
  public alpha: number
```

##### dataType

数据类型，一般用于 id, name 等不涉及到界面变化的属性。

```ts
  @dataType()
  public name: number
```

##### positionType

定位类型，一般用于 x、y 等定位属性。

```ts
  @positionType(0)
  public x: number
```

##### boundsType

边界类型， 一般用于 width、height 等影响图形宽高的属性， 基于 positionType。

##### affectEventBoundsType

影响事件边界的类型，一般用于 strokeWidth 等会扩大 boxBounds 边界的属性， 基于 boundsType。

##### affectRenderBoundsType

影响渲染边界的类型， 一般用于阴影等特效， 基于 boundsType。

##### scaleType

缩放类型，一般用于 scaleX, scaleY。

##### rotationType

旋转类型， 一般用于 rotation。

##### surfaceType

图形表面变化，但没有影响布局， 一般用于 fill 等属性。

##### opacityType

透明度属性， 一般用于 opacity, visible 属性， 基于 surfaceType。

##### sortType

排序属性， 一般用于 zIndex。

##### pathType

路径类型， 一般用于会影响 path 形状的属性， 基于 boundsType。

## 装饰器

装饰器主要用来简化代码。

```ts
@registerUI()
export class Star extends UI implements IStar {
  @boundsType(100)
  public width: __Number

  @boundsType(100)
  public height: __Number
  // ...
}
```

在 js 代码中可以这样使用

```js
registerUI()(Star) // 类
boundsType(100)(Star.prototype, 'width') // 类属性
boundsType(100)(Star.prototype, 'height')
```
