# changeAttr

修改元素属性（静态方法），一般用来修改默认值

## 关键属性

### changeAttr ( attrName: `string`, defaultValue: [`IValue`](/api/modules.md#ivalue) )

修改元素属性的默认值 （全局操作，支持函数返回）。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 修改文本默认填充色为红色

后续创建的所有文本，默认填充色都将变为红色， 但不会影响其他类型的元素。

<<< @/code/property/custom/changeAttr.ts

### 修改文本默认填充色为可变颜色

<<< @/code/property/custom/changeAttr2.ts
