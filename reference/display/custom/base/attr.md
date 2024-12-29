# 添加属性

自定义元素的第 3 步是： **添加属性**。

属性分为普通属性和数据属性，我们这里主要讲的是数据属性（可以导出为 JSON 的属性）

## 添加步骤

### 1. 在接口中添加属性

需要在输入数据、数据处理（计算数据）接口中添加属性（js 可忽略）。

### 2. 在元素中添加属性

添加数据属性后，还需要为属性指定一个 [属性处理器](#属性处理器)，导出时才能进入 JSON。

## 属性处理器

自动为数据属性生成有相关业务功能的 setter/getter 函数，常用如下：

### [boundsType](/api/modules.md#boundstype)

边界类型。

当属性有变化时，会引起元素的重新布局和渲染。

### [surfaceType](/api/modules.md#boundstype)

表面类型。

当属性有变化时，会引起元素的重新渲染， 但不会布局。

### [dataType](/api/modules.md#datatype)

数据类型。

当属性有变化时，不会重新布局和渲染。

## 特殊处理

### set 逻辑处理

可以在数据处理类上通过`set + 属性名`为元素添加 set 处理逻辑。

如果数据属性没有特殊的逻辑，只需创建一个空的数据处理类即可，内部会自动处理一切。

```ts
// 添加 width 的set处理逻辑
export class CustomData extends RectData {
  _width: number // 计算数据的私有变量

  //会自动转为 width 的 setter函数 并移除掉，所以不要调用super.setWidth(value)
  setWidth(value: number): void {
    this._width = Math.ceil(value)
    // 通过 this.__leaf 可访问元素自身
  }
}
```

### 数据处理类的变量命名

1. 无下划线的变量：计算数据 getter/setter 变量， 自动生成，不可设置。

2. 单个下划线变量：计算数据的私有变量，按需自动生成，可设置。

3. 注意其他变量只能通过两个下划线 `__`开头的名字命名!!!，否则会有问题。

```ts
// 其他变量命名
export class CustomData extends RectData {
  __isAutoSize: number // 非数据属性，用来辅助业务逻辑
}
```

## 示例

::: code-group

<<< @/code/display/Custom/base/attr/index.ts

<<< @/code/display/Custom/base/attr/index.js
:::

## 下一步

### [添加方法](/reference/display/custom/base/method.md)
