# 注册编辑工具

自定义编辑工具的第 1 步是： **注册编辑工具**。

编辑工具一般用来编辑元素的尺寸、外形，选中元素时会自动载入。

## 注意事项

TypeScript 环境需在 `tsconfig.json` 配置文件中开启装饰器功能支持：

::: code-group

```json [tsconfig.json]
{
  "compilerOptions": {
    "experimentalDecorators": true // 开启装饰器功能
  }
}
```

:::

## 注册步骤

### 1. 注册编辑工具

通过 `registerEditTool()` 方法注册编辑工具。

实现原理：将编辑工具的 tag 属性作为键值存放编辑工具类。

### 2. 定义标签名

定义全局唯一的 [tag](/reference/property/tag) 名称。

加载编辑工具时，通过 tag 属性查找对应编辑工具类进行实例化。

## 继承

### [EditTool](../EditTool.md)

## 示例

::: code-group

<<< @/code/plugin/editor/editOuter/register/index.ts

<<< @/code/plugin/editor/editOuter/register/index.js
:::

## 下一步

### [自定义控制点](/plugin/in/editor/editOuter/load.md)
