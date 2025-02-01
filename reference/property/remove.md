# remove

移除当前元素。

## 关键方法

### remove ( )

移除当前元素。

### remove ( child: [`UI`](/reference/display/UI.md))

组元素移除指定的子元素。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 标准移除

<<< @/code/basic/remove/remove.ts

### 条件移除

同 [find()](/reference/property/find.md) 方法的参数一致，内部会先 find() 再批量移除。

<<< @/code/basic/remove/remove-tag.ts
