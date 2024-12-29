# addAttr

新增元素属性（静态方法），新增后的属性，可以收集变化和 JSON 导出。

## 关键属性

### addAttr ( attrName: `string`, defaultValue: [`IValue`](/api/modules.md#ivalue), typeFn?: [IAttrDecorator](/api/interfaces/IAttrDecorator.md) )

新增元素属性（全局操作）， defaultValue 为默认值，typeFn 为数据装饰器（默认为 [boundsType](/api/modules.md#boundstype)）。

## 数据装饰器

数据处理方法，自动为属性生成有相关业务逻辑的 setter/getter 函数。

### [boundsType](/api/modules.md#boundstype)

边界类型。

当属性有变化时，会引起元素的重新布局和渲染。

### [surfaceType](/api/modules.md#boundstype)

表面类型。

当属性有变化时，会引起元素的重新渲染， 但不会布局。

### [dataType](/api/modules.md#datatype)

数据类型。

当属性有变化时，不会重新布局和渲染。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 为文本新增一个 float 属性

<<< @/code/property/custom/addAttr.ts

### 为文本新增一个 dataType 类型的属性

<<< @/code/property/custom/addAttr-datatype.ts
