# 开发必读

开发前了解这些知识，可以帮助你更好的使用 LeaferUI。

## 盒子模型

## 数据

我们提供了一套可自定义扩展的数据处理架构，未来可以支持语义化的属性。

#### 数据代理

设置图形的属性后， 通过 setter， 最终会被 DataProcessor 实例进行处理并存储。

```ts
this.__ = new this.__DataProcessor(this) // 初始化 UI 的时候会创建如下数据处理实例
```

#### 输入数据

因为有了数据代理，便可以进行复杂的数据处理， 假设 width 可以输入语义化的字符串。

```ts
this.width = '10px'

console.log(this.width) // '10px'
console.log(this.__.__input.width) // '10px'
```

#### 计算数据

通过处理，最终会转换为数字类型，方便代码内部使用。

```ts
console.log(this.__.width) // 10  通过 this.__[attrName] 可以获取最终的计算数据
```

## 变量名

为了能让开发者更自由的定义自己的变量，防止冲突产生，我们在大部分内部使用的变量名前加了两个下划线， 如下:

```ts
    public __: ILeafData
    public __layout: ILeafLayout

    public __relative: IMatrixWithBoundsData
    public __world: IMatrixWithBoundsData

    public __worldOpacity: number
```
