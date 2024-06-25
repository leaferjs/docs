# findOne

查找元素功能（选择器），只获取一个元素。

想获取一个数组，请使用 [find()](./find.md)。

## 关键方法

### findOne ( condition: `number` | `string` | `IFindMethod` ): [`UI`](/reference/display/UI.md)

通过 [id](/reference/property/layer.md)、[innerId](/reference/property/layer.md#只读属性)、[className](/reference/property/layer.md)、[tag](/reference/property/layer.md#只读属性)、函数等条件查找元素，只返回一个元素。

### findId ( id: `number` | `string` ): [`UI`](/reference/display/UI.md)

查找 id, 支持查找数字类型的 id（必须原始 id 类型为数字）。

## 归属

### [UI](/reference/display/UI.md#查找元素)

## 示例

### 通过 id 查找

<<< @/code/property/findOne/id.ts

### 通过 innerId 查找

<<< @/code/property/findOne/innerId.ts

### 通过 className 查找

<<< @/code/property/findOne/className.ts

### 通过 tag 查找

<<< @/code/property/findOne/tag.ts

### 通过 函数 查找

<<< @/code/property/findOne/method.ts
